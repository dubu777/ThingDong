package com.bell.thingdong.domain.room.dto.response;

import java.util.List;

import com.bell.thingdong.domain.objet.dto.UserObjectRoomDto;
import com.bell.thingdong.domain.smartthings.dto.SmartThingsRoomDto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRoomRes {
	@Schema(description = "해당 방에 존재하는 가구 리스트들")
	private List<UserObjectRoomDto> userObjectList;

	@Schema(description = "해당 방에 존재하는 스마트 띵스 리스트들")
	private List<SmartThingsRoomDto> smartThingsList;

	@Schema(description = "해당 방의 벽지 색상", example = "yellow, green, purple, white, black, pink")
	private String roomColor;

	@Schema(description = "해당 방 색상 path", example = "green.glb")
	private String roomColorPath;

	@Schema(description = "해당 방 번호", example = "2")
	private Long roomId;

	@Schema(description = "해당 방 주인의 id", example = "hello")
	private String userId;

	@Schema(description = "다크 모드 여부", example = "true")
	private Boolean darkMode;
}