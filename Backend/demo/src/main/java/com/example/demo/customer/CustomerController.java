
package com.example.demo.customer;

import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/customer")
public class CustomerController {
    private final CustomerService userService;

    public CustomerController(CustomerService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<Customer> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public void registerNewUser(@RequestBody Customer user) {
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        userService.deleteUser(userId);
    }

    @PutMapping(path = "{userId}")
    public void updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) Long itemId) {
        userService.addBorrowRequest(userId, itemId);;
    }
}
