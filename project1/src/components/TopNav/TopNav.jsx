import React, { useContext } from "react";
import MyForm from "../Formik/Form";
import "./topnav.css";
const TopNav = () => {
  return (
    <>
      <div className="topnav-container">
        <h1 style={{ cursor: "pointer", color: "#e3a42c" }}>Axios...</h1>
        <MyForm />
      </div>
    </>
  );
};

export default TopNav;
