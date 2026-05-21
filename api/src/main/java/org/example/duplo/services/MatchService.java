package org.example.duplo.services;

import org.example.duplo.dto.book.MatchDto;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class MatchService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String MATCHES_URL =
            "https://api.opendota.com/api/players/{accountId}/matches";

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
