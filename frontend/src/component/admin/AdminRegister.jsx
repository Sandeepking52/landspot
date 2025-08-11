import React, { useState } from "react";
import axios from "axios";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    role: "ADMIN",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4040/auth/register", formData);
      alert(res.data);
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Admin Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Admin Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter Mob"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm"
        />
        <input
          type="text"
          name="role"
          value="ADMIN"
          readOnly
          className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold shadow-lg transition-all duration-300"
        >
          Register Admin
        </button>
      </form>
    </div>
  );
};

export default AdminRegister;
