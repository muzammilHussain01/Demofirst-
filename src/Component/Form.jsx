import React, { useState, useEffect, useRef } from "react";
import "./Form.css";
import Buttons from "./Buttons";
import Button from "@mui/material/Button";

const FetchData = (props) => {
  const [isButtonDeActive, setButtonActive] = useState(true); // Changed default state to true
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    email: "",
    Qualification: "",
    hobbies: "",
    address: "",
  });

  const [info, setInfo] = useState({
    fname: "",
    mname: "",
    email: "",
    Qualification: "",
    hobbies: "",
    address: "",
  });

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setInfo(storedData);
    }
  }, []);

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
    const key = "userInformation" + Date.now();
    // Storing form data into the local storage
    localStorage.setItem(key, JSON.stringify(formData));
    activeButton(); // Activate the button after submission
  };

  const onReset = () => {
    // Reset both formData and info
    setFormData({
      fname: "",
      mname: "",
      email: "",
      Qualification: "",
      hobbies: "",
      address: "",
    });

    setInfo({
      fname: "",
      mname: "",
      email: "",
      Qualification: "",
      hobbies: "",
      address: "",
    });

    // Clear data from local storage
    localStorage.removeItem("formData");
    activeButton(); // Activate the button after reset
  };

  const [studentInformation, setStudentInformation] = useState([]);
  const [slicedStuInfo, setSlicedStuInfo] = useState([]);
  const [sliceLength, setSliceLength] = useState(4);

  useEffect(() => {
    setSlicedStuInfo(studentInformation.slice(0, sliceLength));
  }, [studentInformation, sliceLength]);

  const showMoreButton = useRef(null);
  const showLessButton = useRef(null);

  const showMore = () => {
    setSliceLength(sliceLength + 4);
  };

  const showLess = () => {
    setSliceLength(sliceLength - 4);
  };

  const showAllUserInfo = () => {
    const keys = Object.keys(localStorage);
    const arr = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    setStudentInformation(arr);
    if (arr.length >= 4 && showMoreButton.current && showLessButton.current) {
      showMoreButton.current.style.display = "inline-block";
      showLessButton.current.style.display = "inline-block";
    }
  };

  return (
    <>
      {slicedStuInfo.map((stuInfo, index) => {
        return (
          <div key={index}>
            <table>
              <tbody>
                <tr>
                  <td>{stuInfo.fname}</td>
                  <td>{stuInfo.mname}</td>
                  <td>{stuInfo.email}</td>
                  <td>{stuInfo.Qualification}</td>
                  <td>{stuInfo.hobbies}</td>
                  <td>{stuInfo.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <Buttons
        varients="outlined"
        name="Show More"
        showMoreButton={showMoreButton}
        showMore={showMore}
        styling={{ display: "none" }}
      />
      <Buttons
        name="Show Less"
        showMoreButton={showLessButton}
        showMore={showLess}
        styling={{ display: "none" }}
      />

      <span style={{ float: "right" }}></span>
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
              placeholder="Last Name"
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
            <select
              id="qualification"
              name="Qualification"
              value={formData.Qualification}
              onChange={handleChange}
            >
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
            <input
              type="button"
              value="Show All User"
              onClick={showAllUserInfo}
            />
          </form>
        </fieldset>
      </div>
      {props.UserInfo}

      <p>First Name: {info.fname}</p>
      <p>Middle Name: {info.mname}</p>
      <p>Email: {info.email}</p>
      <p>Qualification: {info.Qualification}</p>
      <p>Hobbies: {info.hobbies}</p>
      <p>Address: {info.address}</p>
    </>
  );
};

export default FetchData;
