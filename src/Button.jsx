import React, { useContext } from "react";
import { AppContext } from "./App";

const Button = () => {
  const { pageChange, page, handleGoBack, handleSubmit } = useContext(AppContext);

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
  } else if (page == 1){
    return (
        <div className="buttons-container-page-one">
        <button onClick={handleSubmit} className="next-step-button-page-one">
          Next Step
        </button>
      </div>
    )
  }
};

export default Button;
