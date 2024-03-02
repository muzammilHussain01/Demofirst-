import React from "react";

const StudentSingleInfo = (props) => {
  return (
    <>
      <div className={props.cardClassName} ref={props.refrence}>
        <p>
          Name: {props.firstNmae} {props.middleName}
        </p>
        <p>Email:{props.mail} </p>
        <p>Qualification:{props.qualific} </p>
        <p>Hobbies: {props.hobbs}</p>
        <p>Address: {props.addres}</p>
      </div>
    </>
  );
};

export default StudentSingleInfo;
