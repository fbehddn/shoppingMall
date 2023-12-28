package com.shop.repository;

import com.shop.entity.Item;

import java.util.List;

public interface ItemRepository{
    void save(Item item);

    Item findOne(Long id);

    List<Item> findAll();
}
