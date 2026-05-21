package org.example.duplo.controllers;


import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.duplo.dtos.MatchDto;
import org.example.duplo.services.MatchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
@Tag(name = "Matches", description = "Матчі")
public class MatchController {
    private final MatchService matchService;

    @GetMapping("/matches")
    public List<MatchDto> getMatches(@RequestParam long accountId) {
        return matchService.getMatches(accountId);
    }
}