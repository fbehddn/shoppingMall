package com.shop.dto;

import com.shop.constant.ItemSellStatus;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class ItemForm {
    private Long itemId;
    private String name;
    private int price;
    private int stockQuantity;
    private ItemSellStatus itemSellStatus;
}
