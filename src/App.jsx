/* eslint-disable no-useless-escape */
import "./App.css";
import SideBar from "./SideBar";
import SideBarMobile from "./SideBarMobile";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import { useState, createContext } from "react";
import Confirmation from "./Confirmation";

export const AppContext = createContext();

function App() {
  const [formData, setFormData] = useState(
    // get local storage/set the state
    JSON.parse(localStorage.getItem("storedData")) || {
      name: "",
      email: "",
      phone: "",
      billingType: "monthly",
      planType: "arcade",
      paymentPlan: "$9/mo",
      addOn1: "",
      addOn2: "",
      addOn3: "",
    }
  );

  console.log(formData);

  const [page, setPage] = useState(1);

  // handle personal info form (onChange)
  const handleChange = (e) => {
    e.preventDefault();

    // validate name field on change
    if (formData.name.length > 1) {
      document.querySelector("#name").style.borderColor = "lightgrey";
      document.querySelector(".error-message-name").style = "display: none";
    }

    // validate email field on change
    const regexEmail =
      /^[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/g;
    if (formData.email.length > 1 && regexEmail.test(formData.email)) {
      document.querySelector("#email").style.borderColor = "lightgrey";
      document.querySelector(".error-message-email").style = "display: none";
    }

    // validate phone field on change
    const removeSpaces = formData.phone.slice(1).split(" ").join("").length;
    const convertStringToNumber = Number(
      formData.phone.slice(1).split(" ").join("")
    );
    if (
      removeSpaces >= 6 &&
      removeSpaces <= 12 &&
      !isNaN(convertStringToNumber)
    ) {
      document.querySelector("#phone").style.borderColor = "lightgrey";
      document.querySelector(".error-message-phone").style = "display: none";
      console.log("length", formData.phone.length);
    }

    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleBlur = () => {
    // validate name field on blur
    if (formData.name.length > 1) {
      document.querySelector("#name").style.borderColor = "lightgrey";
      document.querySelector(".error-message-name").style = "display: none";
    }

    // validate email field on blur
    const regexEmail =
      /^[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/g;
    if (formData.email.length > 1 && regexEmail.test(formData.email)) {
      document.querySelector("#email").style.borderColor = "lightgrey";
      document.querySelector(".error-message-email").style = "display: none";
    }

    // validate phone field on blur
    const removeSpaces = formData.phone.slice(1).split(" ").join("").length;
    const convertStringToNumber = Number(
      formData.phone.slice(1).split(" ").join("")
    );
    if (
      removeSpaces >= 6 &&
      removeSpaces <= 12 &&
      !isNaN(convertStringToNumber)
    ) {
      document.querySelector("#phone").style.borderColor = "lightgrey";
      document.querySelector(".error-message-phone").style = "display: none";
    }
  };

  // handle going back one page (onSubmit)
  const handleGoBack = () => {
    setPage(page - 1);
  };

  // handle personal info form/change to page 2 (onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate name field with 2 different error messages
    if (formData.name.length == 0) {
      document.querySelector("#name").style.borderColor = "red";
      document.querySelector(".error-message-name").style = "display: inline";
      return;
    } else if (formData.name.length < 3) {
      document.querySelector("#name").style.borderColor = "red";
      document.querySelector(".error-message-name").style = "display: inline";
      document.querySelector(".error-message-name").textContent =
        "Field must contain at least 3 letters";
      return;
    }

    // validate email field with 2 different messages
    const regexEmail =
      /^[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/g;
    if (formData.email.length == 0) {
      document.querySelector("#email").style.borderColor = "red";
      document.querySelector(".error-message-email").style = "display: inline";
      return;
    } else if (regexEmail.test(formData.email) === false) {
      document.querySelector("#email").style.borderColor = "red";
      document.querySelector(".error-message-email").style = "display: inline";
      document.querySelector(".error-message-email").textContent =
        "Field must be a valid email address";
      return;
    }

    // validate phone field
    const removeSpaces = formData.phone.slice(1).split(" ").join("").length;
    const convertStringToNumber = Number(
      formData.phone.slice(1).split(" ").join("")
    );
    if (formData.phone.length == 0) {
      document.querySelector("#phone").style.borderColor = "red";
      document.querySelector(".error-message-phone").style = "display: inline";
      return;
    } else if (
      removeSpaces < 6 ||
      removeSpaces > 12 ||
      isNaN(convertStringToNumber)
    ) {
      document.querySelector("#phone").style.borderColor = "red";
      document.querySelector(".error-message-phone").style = "display: inline";
      document.querySelector(".error-message-phone").textContent =
        "Field must be a valid phone number";
      return;
    }

    // set form data to state
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    // go to next page
    setPage(page + 1);
  };

  const pageChange = () => {
    setPage(page + 1);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          page,
          setPage,
          formData,
          setFormData,
          handleChange,
          handleGoBack,
          handleSubmit,
          pageChange,
          handleBlur,
        }}
      >
        <div className="outer-container-for-mobile-view">
          <SideBarMobile />
          <div className="main-container">
            <SideBar />
            {page == 1 && <PersonalInfo />}
            {page == 2 && <SelectPlan />}
            {page == 3 && <AddOns />}
            {page == 4 && <FinishingUp />}
            {page == 5 && <Confirmation />}
          </div>
          {/* <div>Hey</div> */}
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
