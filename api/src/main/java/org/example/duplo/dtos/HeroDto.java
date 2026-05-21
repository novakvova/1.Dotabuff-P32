package org.example.duplo.dto.book;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class HeroDto {
    private Long id;

    private String name;

    @JsonProperty("localized_name")
    private String localizedName;

    private String img;

    @JsonProperty("pro_win")
    private Integer proWin;

    @JsonProperty("pro_pick")
    private Integer proPick;

    private Double winRate;

    public Double getWinRate() {
        if (proPick == null || proPick == 0) {
            return 0.0;
        }
        return Math.round(
                ((double) proWin / proPick * 100) * 100
        ) / 100.0;
    }
}