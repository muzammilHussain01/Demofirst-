import React, { useState } from "react";
import Form from "./Component/Form";
import Search from "./Component/Search";
import Data from "./Component/Data";
import Dummy from "./Component/Dummy";
import WeatherAPI from "./Component/WeatherAPI";
import WebPage from "./WebPage/WebPage";
import Products from "./WebPage/Products";

const App = () => {
  const [divVisible, setDivVisible] = useState(true);

  const toggleDiv = () => {
    setDivVisible(!divVisible);
  };
  return (
    <>
      <WebPage toggleDiv={toggleDiv} />
      <Products divVisible={divVisible} />
    </>
  );
};

export default App;
