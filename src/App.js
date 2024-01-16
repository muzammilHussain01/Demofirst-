import React, { useState } from "react";

import ReduxTask from "./WebPage/ReduxTask";

const App = () => {
  /* const [divVisible, setDivVisible] = useState(true);

  const toggleDiv = () => {
    setDivVisible(!divVisible);
    <WebPage toggleDiv={toggleDiv} />
      <Products divVisible={divVisible} />
  };*/
  return (
    <>
      <ReduxTask />
    </>
  );
};

export default App;
