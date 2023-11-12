package com.example.demo.item;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table
public class Item {
    @Id
    @SequenceGenerator(
            name = "item_sequence",
            sequenceName = "item_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "item_sequence"
    )
    private long itemID;
    private String itemName;
    private String useruid;
    private String condition;
    @ElementCollection
    @CollectionTable(name = "item_tags")
    @Column(name = "tag_id")
    private List<String> tags;
    private String description;
    @ElementCollection
    @CollectionTable(name = "image_ids")
    @Column(name = "image_id")
    private List<String> imageIDs;
    private String rentalState;
    @ElementCollection
    @CollectionTable(name = "transaction_history")
    @Column(name = "transaction_history_id")
    private List<String> transactionHistory;

    private LocalDate returnDate;
    private String ownerFirstName;
    private String ownerLastName;
    private String borrowerFirstName;
    private String borrowerLastName;

    public Item() {
    }

    public Item(String itemName,
                String useruid,
                String condition,
                List<String> tags,
                String description,
                List<String> imageIDs,
                String rentalState) {
        this.itemName = itemName;
        this.useruid = useruid;
        this.condition = condition;
        this.tags = tags;
        this.description = description;
        this.imageIDs = imageIDs;
        this.rentalState = rentalState;
    }

    public Item(long itemID,
                String itemName,
                String useruid,
                String condition,
                List<String> tags,
                String description,
                List<String> imageIDs,
                String rentalState) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.useruid = useruid;
        this.condition = condition;
        this.tags = tags;
        this.description = description;
        this.imageIDs = imageIDs;
        this.rentalState = rentalState;
    }

    public long getItemID() {
        return itemID;
    }

    public void setItemID(long itemID) {
        this.itemID = itemID;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getUseruid() {
        return useruid;
    }

    public void setUseruid(String useruid) {
        this.useruid = useruid;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getImageIDs() {
        return imageIDs;
    }

    public void setImageIDs(List<String> imageIDs) {
        this.imageIDs = imageIDs;
    }

    public String getRentalState() {
        return rentalState;
    }

    public void setRentalState(String rentalState) {
        this.rentalState = rentalState;
    }

    public List<String> getTransactionHistory() {
        return transactionHistory;
    }

    public void setTransactionHistory(List<String> transactionHistory) {
        this.transactionHistory = transactionHistory;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public String getOwnerFirstName() {
        return ownerFirstName;
    }

    public void setOwnerFirstName(String ownerFirstName) {
        this.ownerFirstName = ownerFirstName;
    }

    public String getOwnerLastName() {
        return ownerLastName;
    }

    public void setOwnerLastName(String ownerLastName) {
        this.ownerLastName = ownerLastName;
    }

    public String getBorrowerFirstName() {
        return borrowerFirstName;
    }

    public void setBorrowerFirstName(String borrowerFirstName) {
        this.borrowerFirstName = borrowerFirstName;
    }

    public String getBorrowerLastName() {
        return borrowerLastName;
    }

    public void setBorrowerLastName(String borrowerLastName) {
        this.borrowerLastName = borrowerLastName;
    }

    @Override
    public String toString() {
        return "Item{" +
                "itemID=" + itemID +
                ", itemName='" + itemName + '\'' +
                ", useruid='" + useruid + '\'' +
                ", condition='" + condition + '\'' +
                ", description='" + description + '\'' +
                ", rentalState='" + rentalState + '\'' +
                ", ownerFirstName='" + ownerFirstName + '\'' +
                ", ownerLastName='" + ownerLastName + '\'' +
                ", borrowerFirstName='" + borrowerFirstName + '\'' +
                ", borrowerLastName='" + borrowerLastName + '\'' +
                '}';
    }
}
