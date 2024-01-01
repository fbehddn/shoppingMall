package com.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

@Controller
public class MainController {

    @GetMapping("/")
    public String home(@SessionAttribute(name = "userId", required = false) Long userId) {
        if (userId == null) {
            System.out.println("로그인X");
        } else {
            System.out.println("로그인O");
        }
        return "home";
    }
}
