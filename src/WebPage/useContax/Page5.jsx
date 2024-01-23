import React, { useContext, useRef } from "react";
import Page4 from "./Page4";
import { data, data1 } from "./Page1";

const Page5 = () => {
  const element = useRef("");
  console.log(element);
  element.current.style.color = "Red";
  element.current.style.backgroundColor = "blue";
  element.current.innerHTML = "Red";
  const name = useContext(data);
  const age = useContext(data1);
  return (
    <>
      <h1 ref={element}>
        My name is {name.firstname} {name.lastname} and my is {age} !
      </h1>
      <Page4 />
    </>
  );
};

export default Page5;
