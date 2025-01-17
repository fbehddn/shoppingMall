package com.shop.controller;

import com.shop.dto.ItemForm;
import com.shop.entity.Item;
import com.shop.service.ItemServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class ItemController {
    private final ItemServiceImpl itemService;

    @GetMapping("/items")
    public String list(Model model) {
        List<Item> items = itemService.findItems();
        model.addAttribute("items", items);
        return "items/itemList";
    }

    @GetMapping("/items/new")
    public String createForm(Model model) {
        model.addAttribute("itemForm", new ItemForm());
        return "items/createItemForm";
    }

    @PostMapping("/items/new")
    public String create(ItemForm form, BindingResult result) {
        if (result.hasErrors()) {
            return "items/createItemForm";
        }

        /**
         * 아이템 저장 로직
         */

        Item item = new Item();
        item.setId(form.getItemId());
        item.setName(form.getName());
        item.setPrice(form.getPrice());
        item.setStockQuantity(form.getStockQuantity());
        item.setItemSellStatus(form.getItemSellStatus());

        itemService.saveItem(item);

        return "redirect:/";
    }
}
