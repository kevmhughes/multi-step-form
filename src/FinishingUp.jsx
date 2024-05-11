import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const FinishingUp = () => {
  const { handleGoBack, formData, handleSubmit} =
    useContext(AppContext);

  const planType = formData.planType;
  const billType = formData.billingType == "monthly";
  const addOn1 = formData.addOn1;
  const addOn2 = formData.addOn2;
  const addOn3 = formData.addOn3;
  const subTotal = formData.paymentPlan.split(" ")[1]
  console.log(subTotal.slice(1,subTotal.length-3))


  const total = parseInt(subTotal.slice(1,subTotal.length-3)) + (formData.addOn1.length > 0 ? parseInt(formData.addOn1.split(" ")[1]): 0 ) + (formData.addOn2.length > 0 ? parseInt(formData.addOn2.split(" ")[1]): 0 ) + (formData.addOn3.length > 0 ? parseInt(formData.addOn3.split(" ")[1]): 0 )
  
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
            <div>{subTotal}</div>
          </div>
          {(addOn1.length > 0) ? (
            <div>
              <div>Online service</div>
              {billType ? <div className="online-service-payment">$1/mo</div> : <div className="online-service-payment">$10/yr</div>}
            </div>
          ) : (
            <div></div>
          )}
          {(addOn2.length > 0) ? (
            <div>
              <div>Larger storage</div>
              {billType ? <div>$2/mo</div> : <div>$20/yr</div>}
            </div>
          ) : (
            <div></div>
          )}
                    {(addOn3.length > 0) ? (
            <div>
              <div>Customizable profile</div>
              {billType ? <div>$2/mo</div> : <div>$20/yr</div>}
            </div>
          ) : (
            <div></div>
          )} 
        </div>
            Total ({(billType) ? <div>(per month)</div> : <div>(per year)</div>})
            <div>${total}/yr</div>
        </div>
      <div className="buttons-container">
        <div className="go-back" onClick={handleGoBack}>Go back</div>
        <button type="submit" className="next-step-button" onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FinishingUp;
