package com.personalisedgiftstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PersonalisedGiftStoreApplication {

    public static void main(String[] args) {

        SpringApplication.run(
            PersonalisedGiftStoreApplication.class,
            args
        );

    }

    @GetMapping("/")
    public String home() {

        return "Personalised Gift Store Backend is running successfully!";

    }
}