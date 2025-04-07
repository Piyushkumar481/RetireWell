import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage on refresh
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Sign up function
  const signup = (email, password, fullName) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      return { error: "User already exists" };
    }

    const newUser = { email, password, fullName };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  // Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find((u) => u.email === email && u.password === password);
    if (!matchedUser) {
      return { error: "Invalid credentials" };
    }
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    setUser(matchedUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
