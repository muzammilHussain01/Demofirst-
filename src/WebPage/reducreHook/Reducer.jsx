import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "MULTIPLICATION") {
    return state * 5;
  }
  if (action.type === "RESET") {
    return (state = initialState);
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Hello I am reducer {state} !</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INC
      </button>
      <br /> <br />
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DEC
      </button>
      <br /> <br />
      <button
        onClick={() => {
          dispatch({ type: "MULTIPLICATION" });
        }}
      >
        Multi
      </button>
      <br /> <br />
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Reducer;
