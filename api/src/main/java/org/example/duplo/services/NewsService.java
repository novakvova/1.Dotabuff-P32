package org.example.duplo.services;

import org.example.duplo.dtos.NewsDto;
import org.example.duplo.entity.News;
import org.example.duplo.mapper.NewsMapper;
import org.example.duplo.repository.NewsRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService {

    private final NewsRepository repo;
    private final NewsMapper newsMapper;

    public NewsService(NewsRepository repo, NewsMapper newsMapper) {
        this.repo = repo;
        this.newsMapper = newsMapper;
    }

    public List<NewsDto> getAll() {
        return repo.findAll()
                .stream()
                .map(newsMapper::toDto)
                .collect(Collectors.toList());
    }

    public NewsDto getById(Long id) {
        return newsMapper.toDto(
                repo.findById(id)
                        .orElseThrow(() -> new RuntimeException("News not found"))
        );
    }

    public NewsDto create(NewsDto dto) {
        News news = newsMapper.toEntity(dto);
        news.setCreatedAt(LocalDateTime.now());
        return newsMapper.toDto(repo.save(news));
    }

    public NewsDto update(Long id, NewsDto dto) {
        News news = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("News not found"));

        news.setTitle(dto.getTitle());
        news.setContent(dto.getContent());
        news.setImageUrl(dto.getImageUrl());

        return newsMapper.toDto(repo.save(news));
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}