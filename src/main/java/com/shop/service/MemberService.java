package com.shop.service;

import com.shop.entity.Member;

import java.util.List;
import java.util.Optional;

public interface MemberService {
    String join(Member member);

//    void validateDuplicateMember(Member member);

    List<Member> findAll();

    Optional<Member> findByMemberId(String memberId);

}
