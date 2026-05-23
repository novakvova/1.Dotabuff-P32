package com.example.dotastats.controller;

import com.example.dotastats.dto.HeroDto;
import com.example.dotastats.dto.MatchDto;
import com.example.dotastats.service.HeroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class HeroController {

    private final HeroService heroService;

    public HeroController(HeroService heroService) {
        this.heroService = heroService;
    }

    @GetMapping("/heroes")
    public List<HeroDto> getHeroes(@RequestParam(required = false) String name) {
        return heroService.getHeroes(name);
    }

    @GetMapping("/heroes/{id}")
    public HeroDto getHeroById(@PathVariable int id) {
        return heroService.getHeroById(id);
    }

    @GetMapping("/heroes/top")
    public List<HeroDto> getTopHeroes(@RequestParam(defaultValue = "10") int limit) {
        return heroService.getTopHeroes(limit);
    }


    @GetMapping("/matches")
    public List<MatchDto> getMatches(@RequestParam long accountId) {
        return heroService.getMatches(accountId);
    }
}