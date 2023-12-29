package com.shop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "member")
public class Member {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "member_id")
    private String memberId;

    @Column(nullable = false)
    private String name;

    private String password;

    private String email;

    private String address;

//    @OneToMany(mappedBy = "member")
//    private List<Order> orders = new ArrayList<>();

}
