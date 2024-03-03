import React, { useState, useEffect, useRef } from "react";
import "./Form.css";
import Buttons from "./Buttons";
import StudentSingleInfo from "./StudentSingleInfo";

const FetchData = (props) => {
  const showAllUsersButtonHandle = useRef("");
  const tableDisplay = useRef();
  const [isButtonDeActive, setButtonActive] = useState(true);
  const [ShowAllUserButton, setShowAllUserButton] = useState(false);
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

  const [studentInformation, setStudentInformation] = useState([]);
  const [slicedStuInfo, setSlicedStuInfo] = useState([]);
  const [sliceLength, setSliceLength] = useState(4);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setInfo(storedData);
    }
  }, []);

  useEffect(() => {
    setSlicedStuInfo(studentInformation.slice(0, sliceLength));
  }, [studentInformation, sliceLength]);

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

    setShowAllUserButton(true);
    showAllUsersButtonHandle.current.style.display = "none";
    tableDisplay.current.style.display = "block";
    tableDisplay.current.style.width = "100%";
  };

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
    setInfo({ ...formData });
    const key = "userInformation" + Date.now();
    localStorage.setItem(key, JSON.stringify(formData));
    activeButton();
    showAllUsersButtonHandle.current.style.display = "block";
  };

  const onReset = () => {
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

    localStorage.removeItem("formData");
    activeButton();
  };

  return (
    <>
      <div className="formSection">
        <fieldset className="feildset">
          <h3>Registration Form</h3>
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
            <Buttons
              varients="outlined"
              name="Submit"
              showMore={onSubmit}
              disabl={isButtonDeActive}
              styling={{
                backgroundColor: "rgb(77, 123, 184)",
                color: "#fff",
                marginRight: "20px",
              }}
            />
            <Buttons
              varients="outlined"
              name="Reset"
              showMore={onReset}
              disabl={isButtonDeActive}
              styling={{
                backgroundColor: "rgb(230, 117, 117)",
                color: "#fff",
              }}
            />
          </form>
        </fieldset>

        <table className="tableStyling" ref={tableDisplay}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Email Address</th>
              <th>Qualification</th>
              <th>Hobbies</th>
              <th>Address</th>
            </tr>
          </thead>
          {slicedStuInfo.map((stuInfo, index) => (
            <tbody key={index}>
              <tr>
                <td>{stuInfo.fname}</td>
                <td>{stuInfo.mname}</td>
                <td>{stuInfo.email}</td>
                <td>{stuInfo.Qualification}</td>
                <td>{stuInfo.hobbies}</td>
                <td>{stuInfo.address}</td>
              </tr>
            </tbody>
          ))}
          <Buttons varients="outlined" name="Show More" showMore={showMore} />

          <Buttons varients="outlined" name="Show Less" showMore={showLess} />
        </table>
        <section className="btn">
          <Buttons
            className="showAllUserButton"
            varients="outlined"
            name="Show All User"
            disabl={ShowAllUserButton}
            showMore={showAllUserInfo}
            styling={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
              display: "block",
            }}
          />
        </section>

        <StudentSingleInfo
          cardClassName="singleInfoCard"
          refrence={showAllUsersButtonHandle}
          firstNmae={info.fname}
          middleName={info.mname}
          mail={info.email}
          qualific={info.Qualification}
          hobbs={info.hobbies}
          addres={info.address}
          style={{ display: "none" }}
        />
        <div className="singleInfoCard" ref={showAllUsersButtonHandle}>
          <p>
            Name: {info.fname} {info.mname}
          </p>
          <p>Email: {info.email}</p>
          <p>Qualification: {info.Qualification}</p>
          <p>Hobbies: {info.hobbies}</p>
          <p>Address: {info.address}</p>
        </div>
      </div>
    </>
  );
};

export default FetchData;
