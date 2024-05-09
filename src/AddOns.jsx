import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const AddOns = () => {
  const { handleGoBack, handleSubmit, state, setState } =
    useContext(AppContext);

  useEffect(() => {
    // storing data

    if (state.addOn1.length > 0) {
      document.querySelector("#online-service").checked = true;
    }
    if (state.addOn2.length > 0) {
      document.querySelector("#larger-storage").checked = true;
    }
    if (state.addOn3.length > 0) {
      document.querySelector("#customizable-profile").checked = true;
    }
    localStorage.setItem("storedData", JSON.stringify(state));
  }, [state]);


const billType = state.billingType == "monthly";

const handleCheckBox = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        "addOn1":
          e.target.id + " " + document.querySelector(".online-service-info").textContent.split("/")[0].slice(2)
      });
    } else if (e.target.checked == false) {
      setState({
        ...state,
        "addOn1": "",
      });
    }
  }; 

  const handleCheckBox2 = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        "addOn2":
        e.target.id + " " + document.querySelector(".larger-storage-info").textContent.split("/")[0].slice(2)
      });
    } else if (e.target.checked == false) {
      setState({
        ...state,
        addOn2: "",
      });
    }
  };

  const handleCheckBox3 = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        "addOn3": e.target.id + " " + document.querySelector(".customizable-profile-info").textContent.split("/")[0].slice(2)
      });
    } else if (e.target.checked == false) {
      setState({
        ...state,
        "addOn3": "",
      });
    }
  };

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
            <div className="online-service-info">
              {billType ? <div>+$1/mo</div> : <div>+$10/yr</div>}
            </div>
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
            <div className="larger-storage-info">
              {billType ? <div>+$2/mo</div> : <div>+$20/yr</div>}
            </div>
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
            <div className="customizable-profile-info">
            {billType ? <div>+$2/mo</div> : <div>+$20/yr</div>}
            </div>
          </div>


        </div>
      </div>

      <div className="buttons-container">
        <div onClick={handleGoBack}>Go back</div>
        <button onClick={handleSubmit} className="next-step-button">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;
