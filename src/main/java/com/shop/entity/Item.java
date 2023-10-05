package com.shop.entity;

import com.shop.constant.ItemSellStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name="item")
public class Item {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "item_id")
    private Long id; //상품 코드

    @Column(nullable = false)
    private String name; //상품 이름

    @Column(name = "price", nullable = false)
    private int price; //상품 가격

    @Column(nullable = false)
    private int stockQuantity; //상품 재고

    private String itemDetail; //상품 상세

    @Enumerated(EnumType.STRING)
    private ItemSellStatus itemSellStatus; //상품 판매상태

    private LocalDateTime regTime; //상품 등록시간
    private LocalDateTime updateTime; //상품 수정시간
}
