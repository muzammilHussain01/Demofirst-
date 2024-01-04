import React, { useState, useEffect } from "react";

const MyForm = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  // Load initial values from localStorage on component mount
  useEffect(() => {
    const storedInput1 = localStorage.getItem("input1");
    const storedInput2 = localStorage.getItem("input2");

    if (storedInput1) {
      setInput1(storedInput1);
    }

    if (storedInput2) {
      setInput2(storedInput2);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a unique key using a timestamp
    const key = `data_${Date.now()}`;

    // Store values in localStorage with the generated key
    localStorage.setItem(key, JSON.stringify({ input1, input2 }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input 1:
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Input 2:
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
