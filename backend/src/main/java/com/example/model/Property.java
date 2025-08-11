package com.example.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
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
    private String imageUrl;
}

