
package com.example.demo.customer;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class CustomerService {
    private final CustomerRepository userRepository;

    public CustomerService(CustomerRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Customer> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(Customer user) {
        Optional<Customer> userOptional = userRepository.findUserByEmail(user.getEmail());

        if (userOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }

        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        boolean exists = userRepository.existsById(userId);

        if (!exists) {
            throw new IllegalStateException("user with id " + userId + " does not exists");
        }

        userRepository.deleteById(userId);
    }

    @Transactional
    public void addBorrowRequest(Long userId, Long itemId) {
        Customer customer = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalStateException("user with id " + userId + " does not exists"));
        
        if(itemId != null && itemId > 0 && !customer.getBorrowRequests().contains(itemId)) {
            customer.getBorrowRequests().add(itemId);
            userRepository.save(customer);  

        }
        
        
    }
}
