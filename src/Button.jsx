import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const Button = () => {
  const { pageChange, page, handleGoBack } = useContext(AppContext);

  console.log("page:", page);

  if (page == 2 || page == 3) {
    return (
      <div className="buttons-container">
        <div className="go-back" onClick={handleGoBack}>
          Go back
        </div>
        <button onClick={pageChange} className="next-step-button">
          Next Step
        </button>
      </div>
    );
  } else if (page == 4) {
    return (
        <div className="buttons-container">
          <div className="go-back" onClick={handleGoBack}>
            Go back
          </div>
          <button type="submit" className="confirm-button" onClick={pageChange}>
            Confirm
          </button>
        </div>
      );
  } else if (page == 1 || page == 5) {
    <></>
  }
};

export default Button;
