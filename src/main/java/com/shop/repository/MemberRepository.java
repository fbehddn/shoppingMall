package com.shop.repository;

import com.shop.entity.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    void save(Member member);

    Optional<Member> findByMemberId(String id);

    List<Member> findAll();

    List<Member> findByName(String name);

}
