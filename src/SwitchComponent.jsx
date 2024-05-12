import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const SwitchComponent = () => {

const { setFormData, formData } = useContext(AppContext);

useEffect(() => {
  // storing data
  localStorage.setItem("storedData", JSON.stringify(formData));
}, [formData]);

const handleSwitch = (e) => {
  const value = e.target.checked ? "yearly" : "monthly"
  let setAddOnType1 = ""
  if (formData.addOn1.length == 0) {
    setAddOnType1 = ""
  } else if (formData.addOn1.length > 0 && formData.billingType == "yearly") {
    setAddOnType1 = "online-service $1/mo"
  } else if (formData.addOn1.length > 0 && formData.billingType == "monthly") {
    setAddOnType1 = "online-service $10/yr"
  }

  let setAddOnType2 = ""
  if (formData.addOn2.length == 0) {
    setAddOnType2 = ""
  } else if (formData.addOn2.length > 0 && formData.billingType == "yearly") {
    setAddOnType2 = "larger-storage $2/mo"
  } else if (formData.addOn2.length > 0 && formData.billingType == "monthly") {
    setAddOnType2 = "larger-storage $20/yr"
  }

  let setAddOnType3 = ""
  if (formData.addOn3.length == 0) {
    setAddOnType3 = ""
  } else if (formData.addOn3.length > 0 && formData.billingType == "yearly") {
    setAddOnType3 = "customizable-profile $2/mo"
  } else if (formData.addOn3.length > 0 && formData.billingType == "monthly") {
    setAddOnType3 = "customizable-profile $20/yr"
  }

  let setPaymentPlanAmount = "";
  if (formData.planType == "arcade" && formData.billingType == "yearly" ) {
    setPaymentPlanAmount = "$9/mo"
  } else if (formData.planType == "arcade" && formData.billingType == "monthly" ) {
    setPaymentPlanAmount = "$90/mo"
  } else if (formData.planType == "advanced" && formData.billingType == "yearly" ) {
    setPaymentPlanAmount = "$12/mo"
  } else if (formData.planType == "advanced" && formData.billingType == "monthly" ) {
    setPaymentPlanAmount = "$120/mo"
  } else if (formData.planType == "pro" && formData.billingType == "yearly" ) {
    setPaymentPlanAmount = "$15/mo"
  } else if (formData.planType == "pro" && formData.billingType == "monthly" ) {
    setPaymentPlanAmount = "$150/mo"
  }

  setFormData({
    ...formData,
    "billingType": value,
    "addOn1": setAddOnType1,
    "addOn2": setAddOnType2,
    "addOn3": setAddOnType3,
    "paymentPlan": setPaymentPlanAmount
  }) 
}

  return (
    <div>
      <form>
      <label className="switch">
  <input type="checkbox" onChange={handleSwitch} id="switch" checked={formData.billingType == "monthly" ? false : true}/>
  <span className="slider round"></span>
</label>
      </form>
    </div>
  );
};

export default SwitchComponent;
