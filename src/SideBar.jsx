import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";

const SideBar = () => {

  const { page, setPage } = useContext(AppContext);

  const handleGoToPage = (e) => {
    console.log("page", page)
    setPage(e.target.textContent)
  }

  return (
    <div>
      <div className="left-side-image">
        <div className="left-side-image-info">
          <div className="left-side-image-step-number-container" >
            <div className={(page == 1) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner" onClick={handleGoToPage}>1</span></div>
            <div>
            <div>STEP 1</div>
            <div>YOUR INFO</div>
            </div>
          </div>

          <div className="left-side-image-step-number-container" onClick={handleGoToPage}>
          <div className={(page == 2) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner" onClick={handleGoToPage}>2</span></div>
            <div>
            <div>STEP 2</div>
            <div>SELECT PLAN</div>
            </div>
          </div>

          <div className="left-side-image-step-number-container">
          <div className={(page == 3) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner" onClick={handleGoToPage}>3</span></div>
            <div>
            <div>STEP 3</div>
            <div>ADD-ONS</div>
            </div>
          </div>

          <div className="left-side-image-step-number-container">
          <div className={(page == 4 || page == 5) ? "selected-page-number" : "left-side-image-step-number"}><span className="left-side-image-number-positioner" onClick={handleGoToPage}>4</span></div>
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
