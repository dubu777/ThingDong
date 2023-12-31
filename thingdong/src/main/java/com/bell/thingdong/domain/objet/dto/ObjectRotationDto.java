package com.bell.thingdong.domain.objet.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ObjectRotationDto {
	@Schema(description = "오브젝트 x 회전 값", example = "1")
	private Double x;

	@Schema(description = "오브젝트 y 회전 값", example = "2")
	private Double y;

	@Schema(description = "오브젝트 z 회전 값", example = "3")
	private Double z;
}
