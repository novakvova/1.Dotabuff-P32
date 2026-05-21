package org.example.duplo.controllers;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.duplo.dtos.HeroDto;
import org.example.duplo.services.HeroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
@Tag(name = "Heroes", description = "Герої")
public class HeroController {
    private final HeroService heroService;

    @Operation(summary = "Отримати список усіх героїв")
    @GetMapping("/heroes")
    public List<HeroDto> getHeroes(@RequestParam(required = false) String name) {
        return heroService.getHeroes(name);
    }

    @Operation(summary = "Отримати героя за id")
    @GetMapping("/heroes/{id}")
    public HeroDto getHeroById(@PathVariable int id) {
        return heroService.getHeroById(id);
    }


    @Operation(summary = "Отримати топ героїв по проценту перемог")
    @GetMapping("/heroes/top")
    public List<HeroDto> getTopHeroes(@RequestParam(defaultValue = "10") int limit) {
        return heroService.getTopHeroes(limit);
    }
}