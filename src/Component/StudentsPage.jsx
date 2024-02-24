import React from "react";

const StudentsPage = (props) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{props.firstName}</td>
          <td>{props.middleName}</td>
          <td>{props.address}</td>
          <td>{props.email}</td>
          <td>{props.hobbise}</td>
          <td>{props.qualification}</td>
        </tr>
      </tbody>
    </>
  );
};

export default StudentsPage;
