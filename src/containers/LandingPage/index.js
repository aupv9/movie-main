import React from "react";
import Nav from "../../components/NavBar/index";
import "./index.css";
import Button from "../../components/Button/index";
import Tab from "../../components/Tab/index";
import Footer from "../../components/Footer/index";
export default function LandingPage() {
  return (
    <div className="wrapper">
      <div className="section1">
        <Nav></Nav>
        <div className="text">
          <h1>Dong title H1</h1>
          <p>Mang phim vào võng mạc bạn</p>
        </div>
        <div className="buttonJoin">
          <Button size={"large"} text={"Join for free month"}></Button>
        </div>
      </div>
      <div className="section2">
        <Tab></Tab>
      </div>
      <div className="section3">
        <Footer></Footer>
      </div>
    </div>
  );
}
