
package com.example.demo.item;

import java.util.List;

import com.example.demo.customer.Customer;
import jakarta.transaction.Transactional;
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

    @Transactional
    public void updateItem(Long itemId, Item itemDetail) {
         Item item = itemRepository.findById(itemId)
                 .orElseThrow(() -> new IllegalStateException("item with id " + itemId + " does not exists"));

         if(itemDetail.getItemName() != null && itemDetail.getItemName().length() > 0 && !itemDetail.getItemName().equals(item.getItemName())) {
            item.setItemName(itemDetail.getItemName());
        }

         if(itemDetail.getCondition() != null && itemDetail.getCondition().length() > 0 && !itemDetail.getCondition().equals(item.getCondition())) {
             item.setCondition(itemDetail.getCondition());
         }

        if(itemDetail.getTags() != null && !itemDetail.getTags().isEmpty() && !itemDetail.getTags().equals(item.getTags())) {
            item.setTags(itemDetail.getTags());
        }

        if(itemDetail.getImageIDs() != null && !itemDetail.getImageIDs().isEmpty() && !itemDetail.getImageIDs().equals(item.getImageIDs())) {
            item.setTags(itemDetail.getImageIDs());
        }

        if(itemDetail.getRentalState() != null && itemDetail.getRentalState().length() > 0 && !itemDetail.getRentalState().equals(item.getRentalState())) {
            item.setRentalState(itemDetail.getRentalState());
        }

        if(itemDetail.getTransactionHistory() != null && !itemDetail.getTransactionHistory().isEmpty() && !itemDetail.getTransactionHistory().equals(item.getTransactionHistory())) {
            item.setTransactionHistory(itemDetail.getTransactionHistory());
        }

        if(itemDetail.getReturnDate() != null && itemDetail.getReturnDate().lengthOfMonth() > 0 && itemDetail.getReturnDate().lengthOfYear() > 0 && !itemDetail.getReturnDate().equals(item.getReturnDate())){
            item.setReturnDate(itemDetail.getReturnDate());
        }

        if(itemDetail.getOwnerFirstName() != null && itemDetail.getOwnerFirstName().length() > 0 && !itemDetail.getOwnerFirstName().equals(item.getOwnerFirstName())) {
            item.setOwnerFirstName(itemDetail.getOwnerFirstName());
        }

        if(itemDetail.getOwnerLastName() != null && itemDetail.getOwnerLastName().length() > 0 && !itemDetail.getOwnerLastName().equals(item.getOwnerLastName())) {
            item.setOwnerLastName(itemDetail.getOwnerLastName());
        }

        if(itemDetail.getBorrowerFirstName() != null && itemDetail.getBorrowerFirstName().length() > 0 && !itemDetail.getBorrowerFirstName().equals(item.getBorrowerFirstName())) {
            item.setBorrowerFirstName(itemDetail.getBorrowerFirstName());
        }

        if(itemDetail.getBorrowerLastName() != null && itemDetail.getBorrowerLastName().length() > 0 && !itemDetail.getBorrowerLastName().equals(item.getBorrowerLastName())) {
            item.setBorrowerLastName(itemDetail.getBorrowerLastName());
        }

        itemRepository.save(item);
     }
}
