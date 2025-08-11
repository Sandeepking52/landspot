// import axios from "axios";

// export default class ApiService {
//     static BASE_URL = "http://localhost:4040";

//     static getHeader() {
//         const token = localStorage.getItem("token");
//         return {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//         };
//     }

//     /** AUTH **/

//     static async registerUser(registration) {
//         const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
//         return response.data;
//     }

//     static async loginUser(loginDetails) {
//         const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
//         return response.data;
//     }

//     /** USERS **/

//     static async getAllUsers() {
//         const response = await axios.get(`${this.BASE_URL}/users/all`, {
//             headers: this.getHeader(),
//         });
//         return response.data;
//     }

//     static async getUserProfile() {
//         const response = await axios.get(`${this.BASE_URL}/users/get-logged-in-profile-info`, {
//             headers: this.getHeader(),
//         });
//         return response.data;
//     }

//     static async getUser(userId) {
//         const response = await axios.get(`${this.BASE_URL}/users/get-by-id/${userId}`, {
//             headers: this.getHeader(),
//         });
//         return response.data;
//     }

//     static async getUserBookings(userId) {
//         const response = await axios.get(`${this.BASE_URL}/users/get-user-bookings/${userId}`, {
//             headers: this.getHeader(),
//         });
//         return response.data;
//     }

//     static async deleteUser(userId) {
//         const response = await axios.delete(`${this.BASE_URL}/users/delete/${userId}`, {
//             headers: this.getHeader(),
//         });
//         return response.data;
//     }

//     /** ROOM **/

//     static async addRoom(formData) {
//         const result = await axios.post(`${this.BASE_URL}/rooms/add`, formData, {
//             headers: {
//                 ...this.getHeader(),
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//         return result.data;
//     }

//     static async getAllAvailableRooms() {
//         const result = await axios.get(`${this.BASE_URL}/rooms/all-available-rooms`);
//         return result.data;
//     }

//     static async getAvailableRoomsByDateAndType(checkInDate, checkOutDate, roomType) {
//         const result = await axios.get(
//             `${this.BASE_URL}/rooms/available-rooms-by-date-and-type?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomType=${roomType}`
//         );
//         return result.data;
//     }

//     static async getRoomTypes() {
//         const response = await axios.get(`${this.BASE_URL}/rooms/types`);
//         return response.data;
//     }

//     static async getAllRooms() {
//         const result = await axios.get(`${this.BASE_URL}/rooms/all`);
//         return result.data;
//     }

//     static async getRoomById(roomId) {
//         const result = await axios.get(`${this.BASE_URL}/rooms/room-by-id/${roomId}`);
//         return result.data;
//     }

//     static async deleteRoom(roomId) {
//         const result = await axios.delete(`${this.BASE_URL}/rooms/delete/${roomId}`, {
//             headers: this.getHeader(),
//         });
//         return result.data;
//     }

//     static async updateRoom(roomId, formData) {
//         const result = await axios.put(`${this.BASE_URL}/rooms/update/${roomId}`, formData, {
//             headers: {
//                 ...this.getHeader(),
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//         return result.data;
//     }

//     /** BOOKING **/

//     static async bookRoom(roomId, userId, booking) {
//         console.log("USER ID IS: " + userId);
//         const response = await axios.post(`${this.BASE_URL}/bookings/book-room/${roomId}/${userId}`, booking, {
//             headers: this.getHeader(),
//         });
//         return response.data;
//     }

//     static async getAllBookings() {
//         const result = await axios.get(`${this.BASE_URL}/bookings/all`, {
//             headers: this.getHeader(),
//         });
//         return result.data;
//     }

//     static async getBookingByConfirmationCode(bookingCode) {
//         const result = await axios.get(`${this.BASE_URL}/bookings/get-by-confirmation-code/${bookingCode}`);
//         return result.data;
//     }

//     static async cancelBooking(bookingId) {
//         const result = await axios.delete(`${this.BASE_URL}/bookings/cancel/${bookingId}`, {
//             headers: this.getHeader(),
//         });
//         return result.data;
//     }

//     /** AUTHENTICATION CHECKERS **/

//     static logout() {
//         localStorage.removeItem("token");
//         localStorage.removeItem("role");
//     }

//     static isAuthenticated() {
//         const token = localStorage.getItem("token");
//         return !!token;
//     }

//     static getRole() {
//         return localStorage.getItem("role");
//     }

//     static isAdmin() {
//         return this.getRole() === "ADMIN";
//     }

//     static isUser() {
//         return this.getRole() === "USER";
//     }

//     static isAgent() {
//         return this.getRole() === "AGENT";
//     }
// }

import axios from "axios";

export default class ApiService {
    static BASE_URL = "http://localhost:4040";

    static getToken() {
        return localStorage.getItem("token");
    }

    static getHeader() {
        return {
            Authorization: `Bearer ${this.getToken()}`,
            "Content-Type": "application/json",
        };
    }

    /** 🔐 AUTH **/

    static async registerUser(registration) {
        const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
        return response.data;
    }

    static async loginUser(loginDetails) {
        const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
        if (response.data.token && response.data.role) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            this.notifyAuthChange(); // 🔔 Notify listeners
        }
        return response.data;
    }

    static logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        this.notifyAuthChange(); // 🔔 Notify listeners
    }

    static isAuthenticated() {
        return !!localStorage.getItem("token");
    }

    static getRole() {
        return localStorage.getItem("role");
    }

    static isAdmin() {
        return this.getRole() === "ADMIN";
    }

    static isUser() {
        return this.getRole() === "USER";
    }

    static isAgent() {
        return this.getRole() === "AGENT";
    }

    /** 🔔 Notify listeners (like Navbar) on auth change **/
    static notifyAuthChange() {
        window.dispatchEvent(new Event("authChanged"));
    }

    /** 🧑 USERS **/
    // Add getAllUsers, getUserById, deleteUser, etc. here

    /** 🏘️ PROPERTY **/

    static async listProperty(propertyFormData) {
        const response = await axios.post(`${this.BASE_URL}/api/properties`, propertyFormData, {
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
                "Content-Type": "multipart/form-data", // ⬅️ Needed for file upload
            },
        });
        return response.data;
    }

    static async getAllProperties() {
        const response = await axios.get(`${this.BASE_URL}/api/properties`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    /** 🛏️ ROOM **/
    // Add room-related API methods

    /** 📅 BOOKING **/
    // Add booking-related API methods
}
