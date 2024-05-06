import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const PersonalInfo = () => {

  const { state, handleChange, handleSubmit } = useContext(AppContext);

  useEffect(() => {
    // storing data
    localStorage.setItem("storedData", JSON.stringify(state));
  }, [state]);
 
  return (
    <div className="right-side-container">
      <h1>Personal Info</h1>
      <div>Please provide your name, email address, and phone number.</div>
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

        <button type="submit">Next Step</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
