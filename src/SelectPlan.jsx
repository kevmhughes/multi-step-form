import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";
import SwitchComponent from "./SwitchComponent";
import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";
import Button from "./Button";

const SelectPlan = () => {
  const { pageChange, handleGoBack, setFormData, formData } =
    useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(formData));
  }, [formData]);

  const billType = formData.billingType == "monthly";
  const arcadeOption = formData.planType == "arcade";
  const advancedOption = formData.planType == "advanced";
  const proOption = formData.planType == "pro";

  const handleSelectPlan = (e) => {
    const id = e.target.id;
    if (id == "arcade" && formData.billingType == "monthly") {
      setFormData({
        ...formData,

        planType: "arcade",
        paymentPlan: "$9/mo",
      });
    }
    if (id == "arcade" && formData.billingType == "yearly") {
      setFormData({
        ...formData,
        planType: "arcade",
        paymentPlan: "$90/yr",
      });
    }
    if (id == "advanced" && formData.billingType == "monthly") {
      setFormData({
        ...formData,
        planType: "advanced",
        paymentPlan: "$12/mo",
      });
    }
    if (id == "advanced" && formData.billingType == "yearly") {
      setFormData({
        ...formData,
        planType: "advanced",
        paymentPlan: "$120/mo",
      });
    }
    if (id == "pro" && formData.billingType == "monthly") {
      setFormData({
        ...formData,
        planType: "pro",
        paymentPlan: "$15/mo",
      });
    }
    if (id == "pro" && formData.billingType == "yearly") {
      setFormData({
        ...formData,
        planType: "pro",
        paymentPlan: "$150/mo",
      });
    }
  };

  return (
    <div className="right-side-container">
      <div>
        <h1>Select your plan</h1>
        <div className="subtitle">
          You have the option of monthly or yearly billing.
        </div>

        <div>
          <div className="options-container">
            <div className="arcade-container">
              {billType ? (
                <div
                  className={arcadeOption ? "plan-selected" : "plan-selector"}
                  onClick={handleSelectPlan}
                  id="arcade"
                >
                  <img src={arcadeImg} alt="arcade option icon" id="arcade" />
                  <div className="options-text" id="arcade">
                    <div className="options-type" id="arcade">
                      Arcade
                    </div>
                    <div className="options-price" id="arcade">
                      {" "}
                      $9/mo
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={arcadeOption ? "plan-selected" : "plan-selector"}
                  onClick={handleSelectPlan}
                  id="arcade"
                >
                  <img src={arcadeImg} alt="arcade option icon" id="arcade" />
                  <div className="options-text">
                    <div className="options-type" id="arcade">
                      Arcade
                    </div>
                    <div className="options-price" id="arcade">
                      {" "}
                      $90/yr
                    </div>
                    <div className="options-free-months" id="arcade">
                      {" "}
                      2 months free
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="advanced-container">
              {billType ? (
                <div
                  className={advancedOption ? "plan-selected" : "plan-selector"}
                  onClick={handleSelectPlan}
                  id="advanced"
                >
                  <img
                    src={advancedImg}
                    alt="advanced option icon"
                    id="advanced"
                  />
                  <div className="options-text" id="advanced">
                    <div className="options-type" id="advanced">
                      Advanced
                    </div>
                    <div className="options-price" id="advanced">
                      {" "}
                      $12/mo
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={advancedOption ? "plan-selected" : "plan-selector"}
                  onClick={handleSelectPlan}
                  id="advanced"
                >
                  <img
                    src={advancedImg}
                    alt="advanced option icon"
                    id="advanced"
                  />
                  <div className="options-text">
                    <div className="options-type" id="advanced">
                      Advanced
                    </div>
                    <div className="options-price" id="advanced">
                      {" "}
                      $120/yr
                    </div>
                    <div className="options-free-months" id="advanced">
                      {" "}
                      2 months free
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pro-container">
              {billType ? (
                <div
                  className={proOption ? "plan-selected" : "plan-selector"}
                  onClick={handleSelectPlan}
                  id="pro"
                >
                  <img src={proImg} alt="pro option icon" id="pro" />
                  <div className="options-text" id="pro">
                    <div className="options-type" id="pro">
                      Pro
                    </div>
                    <div className="options-price" id="pro">
                      {" "}
                      $15/mo
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={proOption ? "plan-selected" : "plan-selector"}
                  onClick={handleSelectPlan}
                  id="pro"
                >
                  <img src={proImg} alt="pro option icon" id="pro" />
                  <div className="options-text">
                    <div className="options-type" id="pro">
                      Pro
                    </div>
                    <div className="options-price" id="pro">
                      {" "}
                      $150/yr
                    </div>
                    <div className="options-free-months" id="pro">
                      {" "}
                      2 months free
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="switch-container">
          <div
            className={
              billType
                ? "monthly-yearly-selected"
                : "monthly-yearly-not-selected"
            }
          >
            Monthly
          </div>
          <SwitchComponent />
          <div
            className={
              billType
                ? "monthly-yearly-not-selected"
                : "monthly-yearly-selected"
            }
          >
            Yearly
          </div>
        </div>
      </div>
      <div className="button-desktop-view">
        <Button />
      </div>
    </div>
  );
};

export default SelectPlan;
