import React, { Children, createContext } from "react";
import Page5 from "./Page5";

const data = createContext();
const data1 = createContext();
const Page1 = ({ children }) => {
  const name = {
    firstname: "Muzammil",
    lastname: "Hussain",
  };
  const age = 31;
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>{children}</data1.Provider>
      </data.Provider>
      <h1>I am page1 !</h1>
    </>
  );
};

export default Page1;
export { data, data1 };
