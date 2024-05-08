import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const AddOns = () => {
  const { handleGoBack, handleSubmit, state, setState } =
    useContext(AppContext);

  useEffect(() => {
    // storing data

/*    if (state.addon1.length > 0) {
      document.querySelector("#online-service").checked = true;
    } 
    if (state.addon2.length > 0) {
      document.querySelector("#larger-storage").checked = true;
    }
    if (state.addon3.length > 0) {
      document.querySelector("#customizable-profile").checked = true;
    }  */
    
    localStorage.setItem("storedData", JSON.stringify(state));
  }, [state]);

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        addon1: e.target.id,
      });
    } else if (e.target.checked == false) {
      setState({
        ...state,
        addon1: "",
      });
    }
  };

  const handleCheckBox2 = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        addon2: e.target.id,
      });
    } else if (e.target.checked == false) {
      setState({
        ...state,
        addon2: "",
      });
    }
  };

  const handleCheckBox3 = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        addon3: e.target.id,
      });
    } else if (e.target.checked == false) {
      setState({
        ...state,
        addon3: "",
      });
    }
  };

  const billType = state.billingType == "monthly";

  return (
    <div className="right-side-container">
      <div>
        <h1>Pick add-ons </h1>
        <div className="subtitle">
          Add-ons help enhance your gaming experience
        </div>
        <div>
          <div className="individual-add-ons-container">
            <div className="checkbox-add-on-type-container">
              <input
                type="checkbox"
                id="online-service"
                name="online-service"
                onChange={handleCheckBox}
              />
              <div>
                <div>Online service</div>
                <div>Access to multiplayer games</div>
              </div>
            </div>
            {billType ? <div>+$1/mo</div> : <div>+$10/yr</div>}
          </div>
          <div className="individual-add-ons-container">
            <div className="checkbox-add-on-type-container">
              <input
                type="checkbox"
                id="larger-storage"
                name="larger-storage"
                onChange={handleCheckBox2}
              />
              <div>
                <div>Larger storage</div>
                <div>Extra 1TB of vloud save</div>
              </div>
            </div>
            {billType ? <div>+$2/mo</div> : <div>+$20/yr</div>}
          </div>
          <div className="individual-add-ons-container">
            <div className="checkbox-add-on-type-container">
              <input
                type="checkbox"
                id="customizable-profile"
                name="customizable-profile"
                onChange={handleCheckBox3}
              />
              <div>
                <div>Customizable profile</div>
                <div>Custom theme on your profile</div>
              </div>
            </div>
            {billType ? <div>+$2/mo</div> : <div>+$20/yr</div>}
          </div>
        </div>
      </div>

      <div className="buttons-container">
        <div onClick={handleGoBack}>Go back</div>
        <button onClick={handleSubmit} className="next-step-button">Next Step</button>
      </div>
    </div>
  );
};

export default AddOns;
