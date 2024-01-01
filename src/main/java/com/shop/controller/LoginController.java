package com.shop.controller;

import com.shop.entity.Member;
import com.shop.repository.MemberRepositoryImpl;
import com.shop.request.LoginRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import javax.servlet.http.HttpSession;

@Controller
@AllArgsConstructor
@Slf4j
public class LoginController {

   MemberRepositoryImpl memberRepository;

    @GetMapping("/login")
    public String showLoginForm() {
        return "/login";
    }

    @PostMapping("/login")
    public String processLogin(LoginRequest loginRequest, Model model, HttpSession session) {
        Member findMember = memberRepository.findByMemberId(loginRequest.getMemberId()).orElse(null);
        if (findMember != null && findMember.getPassword().equals(loginRequest.getPassword())) {
            // 로그인 성공
            log.info("로그인 성공");

            session.setAttribute("memberId", loginRequest.getMemberId());
            model.addAttribute("message", true);
            return "redirect:/home";
        } else {
            log.info("로그인 실패");
            model.addAttribute("message", "Invalid username or password");
            return "redirect:/login";
        }
    }
}
