import React from "react";

const StudentDetail = (props) => {
  return (
    <>
      <td>{props.fname}</td>
      <td>{props.mname}</td>
      <td>{props.Qualification}</td>
      <td>{props.address}</td>
      <td>{props.email}</td>
      <td>{props.hobbies}</td>
    </>
  );
};

export default StudentDetail;
