package com.shop.service;

import com.shop.entity.Member;
import com.shop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;

    /**
     * 회원가입
     */
    @Transactional
    public String join(Member member) {
//        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getMemberId();
    }

//    public void validateDuplicateMember(Member member) {
//        Member findMembers = memberRepository.findById(member.getId());
//        if (!findMembers.isEmpty()) {throw new IllegalStateException("이미 존재하는 회원입니다."); }
//    }

    /**
     * 전체 회원 조회
     */
    @Override
    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    @Override
    public Optional<Member> findByMemberId(String memberId) {
        return memberRepository.findByMemberId(memberId);
    }

}

