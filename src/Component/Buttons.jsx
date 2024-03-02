import React from "react";
import Button from "@mui/material/Button";
const Buttons = (props) => {
  return (
    <>
      <Button
        variant={props.varients}
        ref={props.showMoreButton}
        style={props.styling}
        onClick={props.showMore}
        disabled={props.disabl}
      >
        {props.name}
      </Button>
    </>
  );
};

export default Buttons;
