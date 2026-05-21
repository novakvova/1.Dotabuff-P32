package org.example.duplo.services;

import org.example.duplo.dtos.HeroDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class HeroService {
    private final RestTemplate restTemplate = new RestTemplate();
    @Value("${opendota.api.hero-url}")
    private String heroUrl;

    public List<HeroDto> getHeroes(String name) {

        HeroDto[] response =
                restTemplate.getForObject(heroUrl, HeroDto[].class);

        List<HeroDto> heroes = Arrays.asList(response);

        if (name == null || name.isEmpty()) {
            return heroes;
        }

        return heroes.stream()
                .filter(h -> h.getLocalizedName() != null &&
                        h.getLocalizedName().toLowerCase()
                                .contains(name.toLowerCase()))
                .toList();
    }

    public HeroDto getHeroById(int id) {

        HeroDto[] response =
                restTemplate.getForObject(heroUrl, HeroDto[].class);

        return Arrays.stream(response)
                .filter(h -> h.getId() != null &&
                        h.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public List<HeroDto> getTopHeroes(int limit) {

        HeroDto[] response =
                restTemplate.getForObject(heroUrl, HeroDto[].class);

        return Arrays.stream(response)
                .sorted((a, b) -> Double.compare(b.getWinRate(), a.getWinRate()))
                .limit(limit)
                .toList();
    }


}