package com.shop.entity;

import com.shop.constant.ItemSellStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    @Enumerated(EnumType.STRING)
    private ItemSellStatus itemSellStatus; //상품 판매상태

}
