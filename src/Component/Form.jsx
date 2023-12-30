import React, { useState } from "react";
import "./Form.css";

const FetchData = () => {
  const [isButtonDeActive, setButtonActive] = useState(true);
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    email: "",
    hobbies: "",
    address: "",
  });

  const [info, setInfo] = useState({
    fname: "",
    mname: "",
    email: "",
    hobbies: "",
    address: "",
  });
  // activate the button
  const activeButton = () => {
    setButtonActive(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    // Copy the data from formData to info
    setInfo({ ...formData });
  };

  const onReset = () => {
    // Reset both formData and info
    setFormData({
      fname: "",
      mname: "",
      email: "",
      hobbies: "",
      address: "",
    });

    setInfo({
      fname: "",
      mname: "",
      email: "",
      hobbies: "",
      address: "",
    });
  };

  return (
    <>
      <div className="formSection">
        <fieldset className="feildset">
          <legend>Input Form</legend>
          <form className="inputForm">
            First Name: <br />
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
              onClick={activeButton}
            />
            <br />
            <br />
            Last name: <br />
            <input
              type="text"
              name="mname"
              placeholder="Middle Name"
              value={formData.mname}
              onChange={handleChange}
              onClick={activeButton}
            />
            <br /> <br />
            Email: <br />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex-:abc@email-address.com"
              onClick={activeButton}
            />
            <br /> <br />
            Qualification: <br />
            <select id="qualification">
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="High School">High School</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <br />
            Hobbies: <br />
            <input
              type="text"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              placeholder="Enter your Hobbies"
              onClick={activeButton}
            />
            <br />
            <br />
            Address: <br />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your Address"
              onClick={activeButton}
            />
            <br /> <br />
            <input
              className="button"
              type="button"
              value="Submit"
              onClick={onSubmit}
              disabled={isButtonDeActive}
            />
            <input
              className="button"
              type="button"
              value="Reset"
              onClick={onReset}
              disabled={isButtonDeActive}
            />
          </form>
        </fieldset>
      </div>

      <p>First Name: {info.fname}</p>
      <p>Middle Name: {info.mname}</p>
      <p>Email: {info.email}</p>
      <p>Hobbies: {info.hobbies}</p>
      <p>Address: {info.address}</p>
    </>
  );
};

export default FetchData;
