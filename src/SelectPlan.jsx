import React, {useContext, useEffect} from "react";
import { AppContext } from "./App";
import SwitchComponent from "./SwitchComponent";

const SelectPlan = () => {

  const { handleSubmit, handleGoBack, setFormData, formData } = useContext(AppContext);

  useEffect(() => {
    // storing data
    const planType = formData.planType
    formData.paymentPlan = document.querySelector(`#${planType}`).textContent 
    localStorage.setItem("storedData", JSON.stringify(formData));
  }, [formData]);
  
const handleSelectPlan = (e) => {
    const id = e.target.id

    setFormData({
      ...formData,
      "planType": id,
    }) 
  } 

  const billType = formData.billingType == "monthly"

  
  return (
    <div className="right-side-container">
      <h1>Select your plan</h1>
      <div className="subtitle">You have the option of monthly or yearly billing.</div>
      <div className="options-container">
        {(billType) ? 
        <div className="arcade plan-selector" onClick={handleSelectPlan} id="arcade">
         Arcade
        $9/mo 
        </div> : <div className="arcade plan-selector" onClick={handleSelectPlan} id="arcade">
         Arcade
        $90/yr 2 months free
        </div>
        }

        {(billType) ? <div className="arcade plan-selector" onClick={handleSelectPlan} id="advanced">
          Advanced
          $12/mo
        </div> : <div className="arcade plan-selector" onClick={handleSelectPlan} id="advanced">
          Advanced
          $120/yr 2 months free
        </div>}
        
        {(billType) ? <div className="arcade plan-selector" onClick={handleSelectPlan} id="pro">
          Pro
          $15/mo
        </div> : <div className="arcade plan-selector" onClick={handleSelectPlan} id="pro">
          Pro
          $150/yr 2 months free
        </div>}
        
      </div>
      <SwitchComponent/>
        <div className="buttons-container">
        <div onClick={handleGoBack}>Go back</div>
          <button onClick={handleSubmit} className="next-step-button">Next Step</button>
        </div>
    </div>
  );
};

export default SelectPlan;
