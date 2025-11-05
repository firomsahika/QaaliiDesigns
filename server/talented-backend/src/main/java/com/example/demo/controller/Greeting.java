package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class Greeting {
    @GetMapping("/greet")
    public String greet() {
        return "Hello, World!";
    }

    
}
