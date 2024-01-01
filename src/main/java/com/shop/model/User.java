package com.shop.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private String userId;
    private String password;

    public User(String userId) {
        this.userId = userId;
    }
}
