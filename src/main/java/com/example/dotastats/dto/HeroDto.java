package com.example.dotastats.dto;

import lombok.Data;

@Data
public class HeroDto {
    private String id;
    private String name;
    private String localized_name;
    private String img;
    private double win_rate;
}