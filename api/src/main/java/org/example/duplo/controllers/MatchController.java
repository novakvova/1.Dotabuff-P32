package org.example.duplo.controllers;


import lombok.RequiredArgsConstructor;
import org.example.duplo.dtos.MatchDto;
import org.example.duplo.services.MatchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class MatchController {
    private final MatchService matchService;

    @GetMapping("/matches")
    public List<MatchDto> getMatches(@RequestParam long accountId) {
        return matchService.getMatches(accountId);
    }
}