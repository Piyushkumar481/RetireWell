// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    // <Router>
      <div style={{
        display: "flex",
        justifySelf: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        margin: "0px", 
        padding: "0px"
      }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
    // </Router>
  );
};

export default App;
