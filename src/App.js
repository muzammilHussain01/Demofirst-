import React from "react";
import Form from "./Component/Form";
import Search from "./Component/Search";
import Data from "./Component/Data";
import Dummy from "./Component/Dummy";
import WeatherAPI from "./Component/WeatherAPI";
import WebPage from "./WebPage/WebPage";
import Products from "./WebPage/Products";

const App = () => {
  return (
    <>
      <WebPage />
      <Products />
    </>
  );
};

export default App;
