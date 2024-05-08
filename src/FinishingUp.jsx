import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const FinishingUp = () => {
  const { handleGoBack, handleSubmit, state, setState } =
    useContext(AppContext);

  const planType = state.planType;
  const billType = state.billingType == "monthly";
  const addon1 = state.addon1;
  const addon2 = state.addon2;
  const addon3 = state.addon3;
  console.log(addon1.length)

  return (
    <div className="right-side-container">
      <div>
        <h1>Finishing up</h1>
        <div className="subtitle">
          Double-check everything looks OK before confirming
        </div>
        <div>
          <div>
            <div>
              <div>
                {planType}
                {billType ? <span> (Monthly)</span> : <span> (Yearly)</span>}
              </div>
              <div>Change</div>
            </div>
            {billType ? <div>$9/mo</div> : <div>$9/yr</div>}
          </div>
          {(addon1.length > 0) ? (
            <div>
              <div>Online service</div>
              {billType ? <div>$1/mo</div> : <div>$10/yr</div>}
            </div>
          ) : (
            <div></div>
          )}
          {(addon2.length > 0) ? (
            <div>
              <div>Larger storage</div>
              {billType ? <div>$2/mo</div> : <div>$20/yr</div>}
            </div>
          ) : (
            <div></div>
          )}
                    {(addon3.length > 0) ? (
            <div>
              <div>Customizable profile</div>
              {billType ? <div>$2/mo</div> : <div>$20/yr</div>}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="buttons-container">
        <div onClick={handleGoBack}>Go back</div>
        <button type="submit" className="next-step-button">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default FinishingUp;
