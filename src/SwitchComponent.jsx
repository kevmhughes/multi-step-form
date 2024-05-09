import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const SwitchComponent = () => {

const { billingType, setState, state } = useContext(AppContext);

useEffect(() => {
  // storing data
  localStorage.setItem("storedData", JSON.stringify(state));
}, [state]);

const handleSwitch = (e) => {
  const value = e.target.checked ? "yearly" : "monthly"
  setState({
    ...state,
    "billingType": value,
    "addOn1": "",
    "addOn2": "",
    "addOn3": "",
  }) 
}

  return (
    <div>
      <form>
      <label className="switch">
  <input type="checkbox" onChange={handleSwitch} id="switch" checked={state.billingType == "monthly" ? false : true}/>
  <span className="slider round"></span>
</label>
      </form>
    </div>
  );
};

export default SwitchComponent;
