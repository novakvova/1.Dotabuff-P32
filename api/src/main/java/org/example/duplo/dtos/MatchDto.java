package org.example.duplo.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class MatchDto {
    @JsonProperty("match_id")
    private Long id;

    @JsonProperty("hero_id")
    private Integer heroId;

    private Integer kills;

    private Integer deaths;

    private Integer assists;

    @JsonProperty("radiant_win")
    private Boolean radiantWin;
}