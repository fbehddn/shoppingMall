package com.shop.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@RequiredArgsConstructor
public class MemberForm {
    @NotEmpty(message = "회원 ID는 필수 입력")
    private String memberId;
    private String password;
    private String name;
    private String address;
    private String email;
}
