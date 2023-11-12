package com.example.demo.item;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table
public class Item {
    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private long itemID;
    private String itemName;
    private String useruid;
    private String condition;
    private List tags;
    private String description;
    private List imageIDs;
    private String rentalState;
    private List<String> transactionHistory;

    private LocalDate returnDate;
    private String ownerFirstName;
    private String ownerLastName;
    private String borrowerFirstName;
    private String borrowerLastName;



}
