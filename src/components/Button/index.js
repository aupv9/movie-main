import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonComponent(props) {
  let { text, ...others } = props;
  return (
    <div>
      <Button variant="contained" {...others} color="secondary">
        {text}
      </Button>
    </div>
  );
}
