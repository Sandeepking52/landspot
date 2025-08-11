package com.example.demo.entity;

// package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "properties")
public class Property {

    @Id
    private String id;

    private String title;
    private String description;
    private String location;
    private double price;
    private String type;
    private double area;
    private String imageUrl; // URL from Cloudinary

    // Constructors, Getters, Setters
    // You can use Lombok's @Data for boilerplate code
}

