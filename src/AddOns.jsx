import React, {useContext, useEffect} from 'react'
import { AppContext } from "./App";

const AddOns = () => {

  const { handleGoBack, handleSubmit, state, setState } = useContext(AppContext);

  return (
    <div className="right-side-container">
      <h1>Pick add-ons </h1>
      <div>Add-ons help enhance your gaming experience</div>
      <div>
        <div>first checkbox</div>
        <div>second checkbox</div>
        <div>third checkbox</div>
      </div>
      <div>
        <div onClick={handleGoBack}>Go back</div>
        <button onClick={handleSubmit}>Next Step</button>
      </div>
    </div>
  )
}

export default AddOns