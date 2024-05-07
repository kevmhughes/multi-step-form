import React, {useContext, useEffect} from "react";
import { AppContext } from "./App";
import SwitchComponent from "./SwitchComponent";

const SelectPlan = () => {

  const { handleSubmit, handleGoBack, setState, state } = useContext(AppContext);

  useEffect(() => {
    // storing data
    const planId = state.planId 
    state.test = document.querySelector(`#${planId}`).textContent 
    localStorage.setItem("storedData", JSON.stringify(state));
  }, [state]);
  
const handleSelectPlan = (e) => {
    const id = e.target.id
    /* const value = document.querySelector(`#${id}`).textContent */
    setState({
      ...state,
      "planId": id
    }) 
  } 

  const billType = state.billingType == "monthly"

  
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
          $12/mo 2 
        </div> : <div className="arcade plan-selector" onClick={handleSelectPlan} id="advanced">
          Advanced
          $120/yr 2 months free
        </div>}
        
        {(billType) ? <div className="arcade plan-selector" onClick={handleSelectPlan} id="pro">
          Pro
          $15/mo 2 
        </div> : <div className="arcade plan-selector" onClick={handleSelectPlan} id="pro">
          Pro
          $150/yr 2 months free
        </div>}
        
      </div>
      <SwitchComponent/>
      <div>
        <div onClick={handleGoBack}>Go back</div>
        <div className="button-positioner-page-two">
          <button onClick={handleSubmit} className="next-step-button">Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
