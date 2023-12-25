import React, { useState } from "react";

// css for fieldset
let fieldset = {
  width: "50%",
};

// css for Header
let Header = {
  fontWeight: "bolder",
  fontSize: "xx-large",
};
// css for InputForm
let InputForm = {
  backgroundColor: "bisque",
  fontSize: "small",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  fontWeight: "bold",
  paddingLeft: "20%",
};
// css for submit button
let Sbutton = {
  marginRight: "5%",
  backgroundColor: "green",
  borderRadius: "50px",
  git,
};
let Rbutton = {
  backgroundColor: "red",
  borderRadius: "50px",
};
let OnSubmit = () => {
  // js for first name
  let firstName = document.getElementById("firstName").value;
  document.getElementById("fName").innerHTML = firstName;

  // js for last name
  let lastName = document.getElementById("lastName").value;
  document.getElementById("lName").innerHTML = lastName;

  //js for email
  let eMail = document.getElementById("eMail").value;
  document.getElementById("mail").innerHTML = eMail;
  //js for Qualification
  let qualification = document.getElementById("qualification").value;
  document.getElementById("quali").innerHTML = qualification;
  // js for hobbies
  let hobbies = document.getElementById("hobbies").value;
  document.getElementById("hobb").innerHTML = hobbies;
  // js for address
  let address = document.getElementById("address").value;
  document.getElementById("add").innerHTML = address;
};
let OnReset = () => {
  // reset for first name
  document.getElementById("fName").innerHTML = "";
  // reset for last name
  document.getElementById("lName").innerHTML = "";
  // reset for eMail
  document.getElementById("mail").innerHTML = "";
  // reset for hobbies
  document.getElementById("hobb").innerHTML = "";
  // reset for address
  document.getElementById("add").innerHTML = "";
  // js for quali
  document.getElementById("quali").innerHTML = "";
};

const Form = () => {
  let [buttonDisabled, buttonEnabled] = useState(true);
  const enable = () => {
    buttonEnabled(false);
  };
  return (
    <>
      <fieldset style={fieldset}>
        <legend style={Header}>Query Form</legend>
        <form style={InputForm} autoComplete="off">
          First Name:
          <br />
          <input
            type="text"
            id="firstName"
            placeholder="Enter First Name"
            onClick={enable}
            required
          />
          <br />
          <br />
          Last name:
          <br />
          <input
            type="text"
            id="lastName"
            placeholder="Enter First Name"
            onClick={enable}
            required
          />
          <br />
          <br />
          Email: <br />
          <input
            type="text"
            id="eMail"
            placeholder="ex-:abc@email-address.com"
            onClick={enable}
            required
          />
          <br />
          <br />
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
            id="hobbies"
            placeholder="Enter your Hobbies"
            onClick={enable}
            required
          />
          <br />
          <br />
          Address: <br />
          <input
            type="text"
            id="address"
            placeholder="Enter your Address"
            onClick={enable}
            required
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={OnSubmit}
            disabled={buttonDisabled}
            style={Sbutton}
          />
          <input
            type="button"
            value="Reset"
            onClick={OnReset}
            disabled={buttonDisabled}
            style={Rbutton}
          />
        </form>
      </fieldset>
      <div>
        <p id="fName"></p>
        <p id="lName"></p>
        <p id="mail"></p>
        <p id="quali"></p>
        <p id="hobb"></p>
        <p id="add"></p>
      </div>
    </>
  );
};
export default Form;
