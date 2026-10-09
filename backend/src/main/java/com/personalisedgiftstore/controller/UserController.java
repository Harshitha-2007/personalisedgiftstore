package com.personalisedgiftstore.controller;

import com.personalisedgiftstore.entity.User;
import com.personalisedgiftstore.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {

        return userRepository.findAll();

    }

    // Create a new user
    @PostMapping
    public User createUser(@RequestBody User user) {

        return userRepository.save(user);

    }

    // Login
    @PostMapping("/login")
    public String login(@RequestBody User loginUser) {

        User user =
                userRepository.findByEmail(
                        loginUser.getEmail()
                ).orElse(null);

        if (user == null) {

            return "User not found";

        }

        if (!user.getPassword().equals(loginUser.getPassword())) {

            return "Invalid password";

        }

        return "Login successful - Role: " + user.getRole();

    }
}