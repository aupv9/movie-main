import React from "react";
import Card from "../Card/index";
export default function Tab1(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </>
  );
}
