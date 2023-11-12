
package com.example.demo.customer;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;

@Entity
@Table
public class Customer {
    @Id
    @SequenceGenerator(
        name = "customer_sequence",
        sequenceName = "customer_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "customer_sequence"
    )
    private Long id;
    private String FName;
    private String LName;
    private String City;
    private String Email;

    
    @ElementCollection
    @CollectionTable(name = "customer_borrow_requests")
    @Column(name = "borrow_request_id")
    private List<Long> borrowRequests;

    public Customer() {
    }

    public Customer(String FName, String LName, String City, String Email) {
        this.FName = FName;
        this.LName = LName;
        this.City = City;
        this.Email = Email;
    }

    public Customer(Long id, String FName, String LName, String City, String Email) {
        this.id = id;
        this.FName = FName;
        this.LName = LName;
        this.City = City;
        this.Email = Email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public  String getFName() {
        return FName;
    }

    public void setFName(String FName) {
        this.FName = FName;
    }

    public  String getLName() {
        return LName;
    }

    public void setLName(String LName) {
        this.LName = LName;
    }

    public  String getCity() {
        return City;
    }

    public void setCity(String City) {
        this.City = City;
    }

    public  String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public List<Long> getBorrowRequests() {
        return borrowRequests;
    }

    public void setBorrowRequests(List<Long> borrowRequests) {
        this.borrowRequests = borrowRequests;
    }

    public void addBorrowRequest(Long borrowRequest) {
        this.borrowRequests.add(borrowRequest);
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", FName=" + FName +
                ", LName=" + LName +
                ", City=" + City +
                ", Email=" + Email +
                '}';
    }

    
}
