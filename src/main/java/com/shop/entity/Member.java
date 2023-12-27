package com.shop.entity;

import com.shop.dto.MemberForm;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "member")
public class Member {
    @Id
    @Column(name = "member_id")
    private String id;

    @Column(nullable = false)
    private String name;

    private String password;

    private String email;

    private String address;

//    @OneToMany(mappedBy = "member")
//    private List<Order> orders = new ArrayList<>();

}
