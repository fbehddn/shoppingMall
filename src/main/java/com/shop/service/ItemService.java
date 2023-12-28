package com.shop.service;

import com.shop.entity.Item;

import java.util.List;

public interface ItemService {
    void saveItem(Item item);

    List<Item> findItems();

    Item findOne(Long itemId);
}
