import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const PersonalInfo = () => {
  const { formData, handleChange, handleSubmit, handleBlur } = useContext(AppContext);

 useEffect(() => {
    // storing data to local 
    localStorage.setItem("storedData", JSON.stringify(formData));
  }, [formData]);



  return (
  <div className="right-side-container-page-one">
      <div>
      <h1>Personal Info</h1>
      <div className="subtitle">
        Please provide your name, email address, and phone number.
      </div>
      </div>
      <form onSubmit={handleSubmit} className="personal-info-form">

        <div className="error-message-and-label-container">
        <label htmlFor="name" className="label-styling">Name</label>
        <div className="error-message-name">This field is required</div>
        </div>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="error-message-and-label-container">
        <label htmlFor="email" className="label-styling">Email Address</label>
        <div className="error-message-email">This field is required</div>
        </div>
        <input
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="error-message-and-label-container">
        <label htmlFor="phone" className="label-styling">Phone Number</label>
        <div className="error-message-phone">This field is required</div>
        </div>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="personal-info-button-container">
          <button type="submit" className="next-step-button">Next Step</button>
        </div>
      </form>
    </div> 
  );
};

export default PersonalInfo;
