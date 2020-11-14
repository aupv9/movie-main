import React from "react";
import Card from "../Card/index";
import Button from "../../Button/index";
export default function Tab1(props) {
  const { children, value, index, ...other } = props;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          flex: 3,
        }}
      >
        <p
          style={{
            fontSize: "2em",
            color: "#fff",
            display: "flex",
            flex: 3,
            overflowWrap: "break-word",
          }}
        >
          If You Decide Netflex Is Not For You, No Problem. No Commitment.
          Cancel Online Anytime.
        </p>
        <Button text="Now"></Button>
      </div>
      <div
        style={{
          flex: 3,
        }}
      >
        <img
          alt="pic"
          style={{ flex: 1, display: "flex", height: 300, width: "100%" }}
          src="https://creativeitem.com/demo/neoflex/assets/frontend/flixer/images/asset_cancelanytime_withdevice.png"
        />
      </div>
    </div>
  );
}
