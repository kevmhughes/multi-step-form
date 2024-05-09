import "./App.css";
import SideBar from "./SideBar";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [state, setState] = useState(
    // get local storage/set the state
    JSON.parse(localStorage.getItem("storedData")) || {
      name: "",
      email: "",
      phone: "",
      billingType: "monthly",
      planType: "arcade",
      paymentPlan: "",
      addOn1: "",
      addOn2: "",
      addOn3: "",
    }
  );
  /* console.log(state) */
  const [page, setPage] = useState(1);

  // handle personal info form (onChange)
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  // handle personal info form/change to page 2 (onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    setPage(page + 1);
  };

  // handle going back one page (onSubmit)
  const handleGoBack = () => {
    setPage(page - 1)
  }


  return (
    <>
      <AppContext.Provider
        value={{ page, setPage, state, setState, handleChange, handleSubmit, handleGoBack}}
      >
          <div className="main-container">
            <SideBar />
            {page == 1 && <PersonalInfo />}
            {page == 2 && <SelectPlan />}
            {page == 3 && <AddOns />}
            {page == 4 && <FinishingUp />}
          </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
