import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";
import Button from "./Button";

const FinishingUp = () => {
  const { handleGoBack, formData, pageChange, setFormData } =
    useContext(AppContext);

  useEffect(() => {
    // storing data
    localStorage.setItem("storedData", JSON.stringify(formData));
  }, [formData]);

  const handleSwitch = () => {
    let setBillingType = "";
    if (formData.billingType == "monthly") {
      setBillingType = "yearly";
    } else if (formData.billingType == "yearly") {
      setBillingType = "monthly";
    }
    let setAddOnType1 = "";
    if (formData.addOn1.length == 0) {
      setAddOnType1 = "";
    } else if (formData.addOn1.length > 0 && formData.billingType == "yearly") {
      setAddOnType1 = "online-service $1/mo";
    } else if (
      formData.addOn1.length > 0 &&
      formData.billingType == "monthly"
    ) {
      setAddOnType1 = "online-service $10/yr";
    }

    let setAddOnType2 = "";
    if (formData.addOn2.length == 0) {
      setAddOnType2 = "";
    } else if (formData.addOn2.length > 0 && formData.billingType == "yearly") {
      setAddOnType2 = "larger-storage $2/mo";
    } else if (
      formData.addOn2.length > 0 &&
      formData.billingType == "monthly"
    ) {
      setAddOnType2 = "larger-storage $20/yr";
    }

    let setAddOnType3 = "";
    if (formData.addOn3.length == 0) {
      setAddOnType3 = "";
    } else if (formData.addOn3.length > 0 && formData.billingType == "yearly") {
      setAddOnType3 = "customizable-profile $2/mo";
    } else if (
      formData.addOn3.length > 0 &&
      formData.billingType == "monthly"
    ) {
      setAddOnType3 = "customizable-profile $20/yr";
    }

    let setPaymentPlanAmount = "";
    if (formData.planType == "arcade" && formData.billingType == "yearly") {
      setPaymentPlanAmount = "$9/mo";
    } else if (
      formData.planType == "arcade" &&
      formData.billingType == "monthly"
    ) {
      setPaymentPlanAmount = "$90/mo";
    } else if (
      formData.planType == "advanced" &&
      formData.billingType == "yearly"
    ) {
      setPaymentPlanAmount = "$12/mo";
    } else if (
      formData.planType == "advanced" &&
      formData.billingType == "monthly"
    ) {
      setPaymentPlanAmount = "$120/mo";
    } else if (formData.planType == "pro" && formData.billingType == "yearly") {
      setPaymentPlanAmount = "$15/mo";
    } else if (
      formData.planType == "pro" &&
      formData.billingType == "monthly"
    ) {
      setPaymentPlanAmount = "$150/mo";
    }

    setFormData({
      ...formData,
      billingType: setBillingType,
      addOn1: setAddOnType1,
      addOn2: setAddOnType2,
      addOn3: setAddOnType3,
      paymentPlan: setPaymentPlanAmount,
    });
  };

  const planType = formData.planType;
  const billType = formData.billingType == "monthly";
  const addOn1 = formData.addOn1;
  const addOn2 = formData.addOn2;
  const addOn3 = formData.addOn3;
  const subTotal = formData.paymentPlan;
  const FirstLetterOfPlanToUppercase =
    planType[0].toUpperCase() + planType.slice(1);
  const areThereAddOns =
    addOn1.length > 0 || addOn2.length > 0 || addOn3.length > 0;

  const total =
    parseInt(subTotal.slice(1, subTotal.length - 3)) +
    (formData.addOn1.length > 0
      ? parseInt(formData.addOn1.split(" ")[1].split("/")[0].slice(1))
      : 0) +
    (formData.addOn2.length > 0
      ? parseInt(formData.addOn2.split(" ")[1].split("/")[0].slice(1))
      : 0) +
    (formData.addOn3.length > 0
      ? parseInt(formData.addOn3.split(" ")[1].split("/")[0].slice(1))
      : 0);

  return (
    <div className="right-side-container">
      <div>
        <h1>Finishing up</h1>
        <div className="subtitle">
          Double-check everything looks OK before confirming.
        </div>
        <div>
          <div
            className={
              areThereAddOns
                ? "main-selection"
                : "main-selection-without-add-ons"
            }
          >
            <div className="main-selection-breakdown">
              <div className="finishing-up-plan-selection">
                {FirstLetterOfPlanToUppercase} ({formData.billingType})
              </div>
              <div
                className="finishing-up-change-plan-selection-button"
                onClick={handleSwitch}
              >
                Change
              </div>
            </div>
            <div className="finishing-up-plan-selection">{subTotal}</div>
          </div>
          {areThereAddOns ? (
            <div className="line-break-container">
              <div className="line-break-start-and-end"></div>
              <div className="line-break"></div>
              <div className="line-break-start-and-end"></div>
            </div>
          ) : (
            <div></div>
          )}
          {addOn1.length > 0 ? (
            <div className="add-on-selection">
              <div>Online service</div>
              {billType ? (
                <div className="add-on-extra">+$1/mo</div>
              ) : (
                <div className="add-on-extra">+$10/yr</div>
              )}
            </div>
          ) : (
            <div></div>
          )}
          {addOn2.length > 0 ? (
            <div className="add-on-selection">
              <div>Larger storage</div>
              {billType ? (
                <div className="add-on-extra">+$2/mo</div>
              ) : (
                <div className="add-on-extra">+$20/yr</div>
              )}
            </div>
          ) : (
            <div></div>
          )}
          {addOn3.length > 0 ? (
            <div className="add-on-selection">
              <div>Customizable profile</div>
              {billType ? (
                <div className="add-on-extra">+$2/mo</div>
              ) : (
                <div className="add-on-extra">+$20/yr</div>
              )}
            </div>
          ) : (
            <div></div>
          )}
          {areThereAddOns ? (
            <div className="final-coloured-element"></div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="total-payment-plan">
          <div className="total-payment-description">
            Total ({billType ? <div>per month</div> : <div>per year</div>})
          </div>
          <div className="total-payment">
            {billType ? <div>${total}/mo</div> : <div>${total}/yr</div>}
          </div>
        </div>
      </div>
      <div className="button-desktop-view">
        <Button />
      </div>
    </div>
  );
};

export default FinishingUp;
