// src/pages/ListProperty.jsx
import React, { useState } from "react";
import ApiService from "../../service/ApiService";

function ListProperty() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    type: "",
    area: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent negative numbers for price and area
    if ((name === "price" || name === "area") && Number(value) < 0) {
      return; // ignore negative input
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate price and area not zero or negative before submit
    if (Number(form.price) <= 0) {
      alert("Price must be greater than zero");
      return;
    }
    if (Number(form.area) <= 0) {
      alert("Area must be greater than zero");
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });
      if (image) {
        formData.append("image", image);
      }

      await ApiService.listProperty(formData);
      alert("Property listed successfully!");

      setForm({
        title: "",
        description: "",
        location: "",
        price: "",
        type: "",
        area: "",
      });
      setImage(null);
    } catch (error) {
      alert("Error listing property!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-24 bg-white shadow-md rounded-lg p-6 mt-32 mb-20">
      <h2 className="text-3xl font-bold mb-4">List a Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        {["title", "location", "price", "type", "area"].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={
              field === "area"
                ? "Area (sq ft)"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            className="w-full border px-3 py-2 rounded"
            type={["price", "area"].includes(field) ? "number" : "text"}
            min={field === "price" || field === "area" ? "0" : undefined} // additional min attr for browsers
            required
          />
        ))}

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ListProperty;
