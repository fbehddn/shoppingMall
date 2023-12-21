package com.shop.controller;

import com.shop.dto.MemberFormDto;
import com.shop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("/new")
    public String memberForm(Model model) {
        model.addAttribute("memberFormDto", new MemberFormDto());
        return "/member/memberForm";
    }

    @PostMapping("/new")
    public String processMemberForm(@ModelAttribute MemberFormDto memberFormDto, Model model) {
        try {
            memberService.saveMember(memberFormDto);
            return "redirect:/"; // 회원 가입 성공 시 홈페이지로 리다이렉트
        } catch (IllegalStateException e) {
            // 중복 회원 예외 처리
            model.addAttribute("error", e.getMessage());
            return "/member/memberForm"; // 중복 회원일 경우 다시 회원 가입 폼으로 이동
        }
    }
}
