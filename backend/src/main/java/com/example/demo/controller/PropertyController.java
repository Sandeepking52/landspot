package com.example.demo.controller;

import com.example.demo.service.CloudinaryService;
import com.example.demo.service.PropertyService;
import com.example.model.Property;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:3000")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @Autowired
    private CloudinaryService cloudinaryService;

    @PostMapping
    public Property createProperty(
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam String location,
            @RequestParam double price,
            @RequestParam String type,
            @RequestParam double area,
            @RequestParam(required = false) MultipartFile image
    ) throws IOException {

        String imageUrl = null;

        if (image != null && !image.isEmpty()) {
            imageUrl = cloudinaryService.uploadImage(image);
            if (imageUrl == null) {
                throw new IOException("Image upload failed");
            }
        }

        Property property = new Property();
        property.setTitle(title);
        property.setDescription(description);
        property.setLocation(location);
        property.setPrice(price);
        property.setType(type);
        property.setArea(area);
        property.setImageUrl(imageUrl);

        return propertyService.saveProperty(property);
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }
}
