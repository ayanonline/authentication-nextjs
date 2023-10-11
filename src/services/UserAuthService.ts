// UserAuthService.js
"use client";
const UserAuthService = {
  // Store user details in localStorage after successful login
  setUser: (user: Object) => {
    if (user && typeof user === "object") {
      localStorage.setItem("user", JSON.stringify(user));
    }
  },

  // Retrieve user details from localStorage
  getUser: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  },

  // Check if a user is currently logged in
  isLoggedIn: () => {
    return UserAuthService.getUser() !== null;
  },

  // Log out the user by removing their details from localStorage
  logout: () => {
    localStorage.removeItem("user");
  },
};

export default UserAuthService;
