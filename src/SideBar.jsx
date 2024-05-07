import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const SideBar = () => {

  const { page } = useContext(AppContext);

  return (
    <div>
      <div className="left-side-image">
        <div className="left-side-image-info">
          <div className="left-side-image-step-number-container">
            <div className={(page == 1) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner">1</span></div>
            <div>
            <div>STEP 1</div>
            <div>YOUR INFO</div>
            </div>
          </div>

          <div className="left-side-image-step-number-container">
          <div className={(page == 2) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner">2</span></div>
            <div>
            <div>STEP 2</div>
            <div>SELECT PLAN</div>
            </div>
          </div>

          <div className="left-side-image-step-number-container">
          <div className={(page == 3) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner">3</span></div>
            <div>
            <div>STEP 3</div>
            <div>ADD-ONS</div>
            </div>
          </div>

          <div className="left-side-image-step-number-container">
          <div className={(page == 4) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner">4</span></div>
            <div>
            <div>STEP 4</div>
            <div>SUMMARY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
