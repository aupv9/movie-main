import React from "react";
import "./index.css";
import Button from "../Button/index";

export default function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        {/* <img   src="https://creativeitem.com/demo/neoflex//assets/global/logo.png"></img> */}
      </div>
      <div className="button">
        <Button text={"Login"}></Button>
      </div>
    </div>
  );
}
