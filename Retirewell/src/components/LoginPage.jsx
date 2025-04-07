import styles from "./LoginPage.module.css";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    termsAndConditions: false,
    showTerms: false,
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.termsAndConditions) {
      alert("You must agree to the Terms & Conditions to proceed.");
      return;
    }
  
    const result = login(formData.email, formData.password);
  
    if (result.error) {
      alert(result.error); // show error to user
      return;
    }
  
    // Check if user has already filled out the form
    const storedData = JSON.parse(localStorage.getItem("retireFormData")) || {};
    const userForm = storedData[formData.email];
  
    if (userForm) {
      navigate("/dashboard");
    } else {
      navigate("/form");
    }
  };
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>🎉 Welcome to RetireWell! Plan your dream retirement today! 🎉</h2>
        <fieldset>
          <label>
            Email: 
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Password: 
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </label>
          <div className={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              name="termsAndConditions" 
              checked={formData.termsAndConditions} 
              onChange={handleChange} 
            />
            <span>I agree to the Terms & Conditions</span>
          </div>
          <button
            type="button"
            className={styles.termsButton}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                showTerms: !prev.showTerms,
              }))
            }
          >
            {formData.showTerms ? "Hide Terms & Conditions" : "Read Terms & Conditions"}
          </button>
          {formData.showTerms && (
            <div className={styles.termsContent}>
              <h5>Terms & Conditions</h5>
              <p>1. RetireWell is a retirement goal-setting tool designed to assist users in planning their financial future. It does not provide professional financial advice.</p>
              <p>2. Users must provide accurate and up-to-date information for the best planning experience.</p>
              <p>3. RetireWell is not responsible for any financial losses incurred due to decisions made based on its recommendations.</p>
              <p>4. Users' data will be stored securely, but RetireWell is not liable for any data breaches beyond its control.</p>
              <p>5. By using this platform, you agree not to misuse or manipulate financial tools and calculators for fraudulent activities.</p>
              <p>6. RetireWell reserves the right to update these terms at any time. Users will be notified of significant changes.</p>
              <p>7. Violation of these terms may result in restricted access or account suspension.</p>
              <p>8. Continued use of RetireWell after modifications to the terms implies acceptance of the revised terms.</p>
            </div>
          )}
        </fieldset>
        <button type="submit" className={styles.submitButton}>Log In</button>
        <div className={styles.authLinks}>
          <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
          <span> | </span>
          <a href="/signup" className={styles.signUp}>Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
