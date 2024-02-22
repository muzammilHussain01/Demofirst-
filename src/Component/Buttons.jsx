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
      >
        {props.name}
        Show More
      </Button>
    </>
  );
};

export default Buttons;
