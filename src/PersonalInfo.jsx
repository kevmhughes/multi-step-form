import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const PersonalInfo = () => {
  const { state, handleChange, handleSubmit } = useContext(AppContext);

  useEffect(() => {
    // storing data to local 
    localStorage.setItem("storedData", JSON.stringify(state));
  }, [state]);

  return (
    <div className="right-side-container">
      <h1>Personal Info</h1>
      <div className="subtitle">
        Please provide your name, email address, and phone number.
      </div>
      <form onSubmit={handleSubmit} className="personal-info-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          id="name"
          value={state.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          name="email"
          id="email"
          value={state.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          name="phone"
          id="phone"
          minLength="11"
          maxLength="15"
          value={state.phone}
          onChange={handleChange}
          required
        />
        <div className="personal-info-button-container">
          <button type="submit" className="next-step-button">Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
