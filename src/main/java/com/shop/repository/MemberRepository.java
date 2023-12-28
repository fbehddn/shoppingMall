package com.shop.repository;

import com.shop.entity.Member;

import java.util.List;

public interface MemberRepository {
    void save(Member member);

    Member findById(String id);

    List<Member> findAll();

    List<Member> findByName(String name);

}
