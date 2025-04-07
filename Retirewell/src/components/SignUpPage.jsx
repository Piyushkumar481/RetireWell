import styles from "./SignUpPage.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
    showTerms: false,
  });

  const { signup } = useAuth();
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const result = signup(formData.email, formData.password, formData.fullName);

    if (result.error) {
      alert(result.error);
    } else {
      navigate("/form"); // move to form after sign up
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>🎉 Join RetireWell! Secure Your Future Today! 🎉</h2>
        <fieldset>
          <label>
            Full Name: <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
          <label>
            Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Password: <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          <label>
            Confirm Password: <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </label>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" name="termsAndConditions" checked={formData.termsAndConditions} onChange={handleChange} />
            <span>I agree to the Terms & Conditions</span>
          </div>
          <button
            type="button"
            className={styles.termsButton}
            onClick={() => setFormData((prev) => ({ ...prev, showTerms: !prev.showTerms }))}
          >
            {formData.showTerms ? "Hide Terms & Conditions" : "Read Terms & Conditions"}
          </button>
          {formData.showTerms && (
            <div className={styles.termsContent}>
              <h5>Terms & Conditions</h5>
              <p>1. RetireWell helps users set retirement goals but does not provide professional financial advice.</p>
              <p>2. Users must provide accurate and up-to-date information.</p>
              <p>3. RetireWell is not responsible for financial losses due to its recommendations.</p>
              <p>4. User data is stored securely; however, RetireWell is not liable for external data breaches.</p>
              <p>5. Users must not misuse financial tools for fraudulent activities.</p>
              <p>6. RetireWell may update these terms at any time, with notifications for major changes.</p>
              <p>7. Violating terms may result in restricted access or account suspension.</p>
              <p>8. Continuing to use RetireWell after modifications implies acceptance of the revised terms.</p>
            </div>
          )}
        </fieldset>
        <button type="submit" className={styles.submitButton}>Sign Up</button>
        <div className={styles.authLinks}>
          <span>Already have an account? </span>
          <a href="/login" className={styles.loginLink}>Log In</a>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
