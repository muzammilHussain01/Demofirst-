import React, { useState } from "react";
import ReduxTask from "./WebPage/ReduxTask";
import Reducer from "./WebPage/reducreHook/Reducer";
import Page1 from "./WebPage/useContax/Page1";
import Page5 from "./WebPage/useContax/Page5";
import Header from "./WebPage/FullPage/Header";
import Card from "./WebPage/FullPage/Card";
import Footer from "./WebPage/FullPage/Footer";

const App = () => {
  /* const [divVisible, setDivVisible] = useState(true);

  const toggleDiv = () => {
    setDivVisible(!divVisible);
    <WebPage toggleDiv={toggleDiv} />
      <Products divVisible={divVisible} />
  };*/
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
};

export default App;
