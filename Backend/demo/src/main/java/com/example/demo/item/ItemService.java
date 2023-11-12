
package com.example.demo.item;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    public void addNewItem(Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(Long itemId) {
        boolean exists = itemRepository.existsById(itemId);

        if(!exists) {
            throw new IllegalStateException("item with id " + itemId + " does not exists");
        }

        itemRepository.deleteById(itemId);
    }

    // public void updateItem(Long itemId, Item itemDetails) {
    //     // Add logic to update an item
    // }
}
