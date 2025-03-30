import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    profession: "",
    targetRetirementAge: "",
    desiredMonthlyIncome: "",
    expectedDuration: "",
    currentSavings: "",
    currentMonthlySavings: "",
    monthlyIncome: "",
    monthlyExpenses: "",
    savingsContribution: "",
    otherIncome: "",
    investments: [],
    returnRate: "",
    targetSavings: "",
    estimatedRetirementSavings: "",
    additionalSavingsNeeded: "",
    increaseSavings: "",
    reminders: "",
    tips: "",
    emergencyFund: "",
    idealEmergencyFund: "",
    fundCoverage: "",
    hasDependents: "",
    numberOfDependents: "",
    dependentsExpense: "",
    hasDebt: "",
    debtType: [],
    remainingLoan: "",
    emi: "",
    postRetirementWork: "",
    relocation: "",
    travelBudget: "",
    healthInsurance: "",
    medicalExpenses: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
    <div className={styles.header}>
            <h2>Retire<i><span className={styles.welltext}>Well</span></i></h2>
    </div>
    <div className={styles.container}>
      <h2>Set Your Goals and get started!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Personal Information */}
        <fieldset>
          <legend>Personal Information</legend>
          <label>Full Name: <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required /></label>
          <label>Age: <input type="number" name="age" value={formData.age} onChange={handleChange} required /></label>
          <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
          <label>Phone Number: <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /></label>
          <label>Profession: 
            <select name="profession" value={formData.profession} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Salaried Employee">Salaried Employee</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </fieldset>

        {/* Retirement Goals */}
        <fieldset>
          <legend>Retirement Goals</legend>
          <label>Target Retirement Age: <input type="number" name="targetRetirementAge" value={formData.targetRetirementAge} onChange={handleChange} min="45" max="85" required /></label>
          <label>Desired Monthly Retirement Income: <input type="number" name="desiredMonthlyIncome" value={formData.desiredMonthlyIncome} onChange={handleChange} required /></label>
          <label>Expected Retirement Duration (Years): <input type="number" name="expectedDuration" value={formData.expectedDuration} onChange={handleChange} required /></label>
          <label>Current Savings: <input type="number" name="currentSavings" value={formData.currentSavings} onChange={handleChange} required /></label>
        </fieldset>

        {/* Financial Details */}
        <fieldset>
          <legend>Financial Details</legend>
          <label>Monthly Income: <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required /></label>
          <label>Monthly Expenses: <input type="number" name="monthlyExpenses" value={formData.monthlyExpenses} onChange={handleChange} required /></label>
          <label>Monthly Savings Contribution: <input type="number" name="savingsContribution" value={formData.savingsContribution} onChange={handleChange} required /></label>
        </fieldset>

        {/* Investment Plans */}
        <fieldset>
          <legend>Investment Plans</legend>
          <label>Current Investment Types:</label>
          <div className={styles.checkboxes}>
            {["Fixed Deposits", "Mutual Funds", "Stocks", "Bonds", "Real Estate", "Other"].map((option) => (
              <label key={option}>
                <input type="checkbox" name="investments" value={option} checked={formData.investments.includes(option)} onChange={handleChange} /> {option}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
        <legend>Projected Retirement Plan</legend>
        <label>Suggested Target Savings Amount:</label>
        <input type="number" name="suggestedTargetSavings" min="0" onChange={handleChange} />

        <label>Estimated Savings at Retirement:</label>
        <input type="number" name="estimatedSavingsAtRetirement" min="0" onChange={handleChange} />

        <label>Additional Savings Needed:</label>
        <input type="number" name="additionalSavingsNeeded" min="0" onChange={handleChange} />

        <label>Willing to Increase Monthly Savings?</label>
        <div className={styles.radiogroup}>
          <input  type="radio" name="willingToIncreaseSavings" value="Yes" onChange={handleChange} /> Yes
          <input type="radio"  name="willingToIncreaseSavings" value="No" onChange={handleChange} /> No
        </div>
      </fieldset>

      <fieldset>
        <legend>Tracking and Notifications</legend>
        <label>Would you like reminders for savings contributions?</label>
        <div className={styles.radiogroup}>
          <label>
            <input type="radio" name="reminders" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="reminders" value="Monthly" onChange={handleChange} /> Monthly
          </label>
          <label>
            <input type="radio" name="reminders" value="Quarterly" onChange={handleChange} /> Quarterly
          </label>
          <label>
            <input type="radio" name="reminders" value="No" onChange={handleChange} /> No
          </label>
        </div>

        <label>Would you like personalized tips on savings and investments?</label>
        <div className={styles.radiogroup}>
          <label>
            <input type="radio" name="personalizedTips" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="personalizedTips" value="No" onChange={handleChange} /> No
          </label>
        </div>

      </fieldset>

      <fieldset>
        <legend>Emergency Fund Details</legend>
        <label>Current Emergency Fund Savings:</label>
        <input type="number" name="emergencyFund" min="0" onChange={handleChange} />

        <label>Ideal Emergency Fund Goal:</label>
        <input type="number" name="emergencyGoal" min="0" onChange={handleChange} />

        <label>Duration the Fund Covers (in months):</label>
        <input type="number" name="durationFundCovers" min="0" onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend>Financial Dependencies</legend>
        <label>Do you have dependents?</label>
        <div className={styles.radiogroup}>
          <label>
            <input type="radio" name="dependents" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="dependents" value="No" onChange={handleChange} /> No
          </label>
        </div>

        <label>If yes, number of dependents:</label>
        <input type="number" name="numberOfDependents" min="0" onChange={handleChange} />

        <label>Expected monthly expense for dependents post-retirement:</label>
        <input type="number" name="expenseForDependents" min="0" onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend>Debt & Liabilities</legend>
        <label>Do you have any existing loans?</label>
        <div className={styles.radiogroup}>
          <label>
            <input type="radio" name="existingloans" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="existingloans" value="No" onChange={handleChange} /> No
          </label>
        </div>

        <label>If yes, type of debt:</label>
        <select name="debtType" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Car Loan">Car Loan</option>
          <option value="Personal Loan">Personal Loan</option>
          <option value="Credit Card Debt">Credit Card Debt</option>
          <option value="Other">Other</option>
        </select>

        <label>Remaining Loan Amount:</label>
        <input type="number" name="remainingLoanAmount" min="0" onChange={handleChange} />

        <label>Monthly EMI:</label>
        <input type="number" name="monthlyEMI" min="0" onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend>Lifestyle & Retirement Plans</legend>
        <label>Do you plan to work post-retirement?</label>
        <div className={styles.radiogroup}>
          <label>
            <input type="radio" name="postRetirementWork" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="postRetirementWork" value="No" onChange={handleChange} /> No
          </label>
        </div>
        <label>Do you plan to relocate post-retirement?</label>
        <div className={styles.radiogroup}>
          <label>
            <input type="radio" name="relocatePostRetirement" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="relocatePostRetirement" value="No" onChange={handleChange} /> No
          </label>
        </div>

        <label>Travel & Leisure Budget (per year post-retirement):</label>
        <input type="number" name="travelBudget" min="0" onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend>Long-Term Care & Medical Planning</legend>
        <label>Do you have health insurance?</label>
        <div className={styles.radiogroup}>
          <label>
            <input type="radio" name="HealthInsurance" value="Yes" onChange={handleChange} /> Yes
          </label>
          <label>
            <input type="radio" name="HealthInsurance" value="No" onChange={handleChange} /> No
          </label>
        </div>

        <label>Expected monthly medical expenses in retirement:</label>
        <input type="number" name="medicalExpenses" min="0" onChange={handleChange} />
      </fieldset>

      <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Form;
