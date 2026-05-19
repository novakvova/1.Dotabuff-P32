package com.example.dotastats.dto;

import lombok.Data;

@Data
public class MatchDto {

    private Long match_id;
    private Integer hero_id;
    private Integer kills;
    private Integer deaths;
    private Integer assists;
    private Boolean radiant_win;
}