package org.example.duplo.controllers;

import org.example.duplo.dtos.NewsDto;
import org.example.duplo.services.NewsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "*")
public class NewsController {

    private final NewsService service;

    public NewsController(NewsService service) {
        this.service = service;
    }

    @GetMapping
    public List<NewsDto> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public NewsDto getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public NewsDto create(@RequestBody NewsDto dto) {
        return service.create(dto);
    }

    @PutMapping("/{id}")
    public NewsDto update(@PathVariable Long id, @RequestBody NewsDto dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}