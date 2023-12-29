package com.shop.service;

import com.shop.entity.Member;

import java.util.List;

public interface MemberService {
    String join(Member member);

//    void validateDuplicateMember(Member member);

    List<Member> findAll();

    Member findById(String memberId);

}
