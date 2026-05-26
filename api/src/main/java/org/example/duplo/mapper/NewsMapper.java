package org.example.duplo.mapper;

import org.example.duplo.dtos.NewsDto;
import org.example.duplo.entity.News;
import org.springframework.stereotype.Component;

@Component
public class NewsMapper {

    public NewsDto toDto(News news) {
        if (news == null) return null;

        return NewsDto.builder()
                .id(news.getId())
                .title(news.getTitle())
                .content(news.getContent())
                .imageUrl(news.getImageUrl())
                .createdAt(news.getCreatedAt())
                .build();
    }

    public News toEntity(NewsDto dto) {
        if (dto == null) return null;

        News news = new News();
        news.setId(dto.getId());
        news.setTitle(dto.getTitle());
        news.setContent(dto.getContent());
        news.setImageUrl(dto.getImageUrl());
        news.setCreatedAt(dto.getCreatedAt());

        return news;
    }
}