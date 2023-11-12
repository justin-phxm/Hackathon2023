
package com.example.demo.item;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/item")
public class ItemController {
    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping
    public void registerNewItem(@RequestBody Item item) {
        itemService.addNewItem(item);
    }

    @DeleteMapping(path = "{itemId}")
    public void deleteItem(@PathVariable("itemId") Long itemId) {
        itemService.deleteItem(itemId);
    }

    // @PutMapping(path = "{itemId}")
    // public void updateItem(
    //         @PathVariable("itemId") Long itemId,
    //         @RequestBody Item itemDetails) {
    //     itemService.updateItem(itemId, itemDetails);
    // }
}
