package com.example.dotastats.service;

import com.example.dotastats.dto.HeroDto;
import com.example.dotastats.dto.MatchDto;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class HeroService {

    private final RestTemplate restTemplate = new RestTemplate();

    private final String HERO_URL =
            "https://api.opendota.com/api/heroStats";

    private final String MATCHES_URL =
            "https://api.opendota.com/api/players/{accountId}/matches";


    public List<HeroDto> getHeroes(String name) {

        HeroDto[] response =
                restTemplate.getForObject(HERO_URL, HeroDto[].class);

        List<HeroDto> heroes = Arrays.asList(response);

        if (name == null || name.isEmpty()) {
            return heroes;
        }

        return heroes.stream()
                .filter(h -> h.getLocalized_name() != null &&
                        h.getLocalized_name().toLowerCase()
                                .contains(name.toLowerCase()))
                .toList();
    }

    public HeroDto getHeroById(int id) {

        HeroDto[] response =
                restTemplate.getForObject(HERO_URL, HeroDto[].class);

        return Arrays.stream(response)
                .filter(h -> h.getId() != null &&
                        Integer.parseInt(h.getId()) == id)
                .findFirst()
                .orElse(null);
    }

    public List<HeroDto> getTopHeroes(int limit) {

        HeroDto[] response =
                restTemplate.getForObject(HERO_URL, HeroDto[].class);

        return Arrays.stream(response)
                .sorted((a, b) -> Double.compare(b.getWin_rate(), a.getWin_rate()))
                .limit(limit)
                .toList();
    }

    public List<MatchDto> getMatches(long accountId) {

        MatchDto[] response =
                restTemplate.getForObject(
                        MATCHES_URL,
                        MatchDto[].class,
                        accountId
                );

        return Arrays.asList(response);
    }
}