import React, { useContext } from "react";
import { Student } from "./StudentDataPage";
import StudentDetail from "./StudentDetail";

const StudentsPage = () => {
  const { studentRecords } = useContext(Student);

  return (
    <>
      <h1>Student Records</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Qualification</th>
            <th>Address</th>
            <th>Email</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {studentRecords.map((info) => (
            <tr>
              <StudentDetail
                fname={info.fname}
                mname={info.mname}
                Qualification={info.Qualification}
                address={info.address}
                email={info.email}
                hobbies={info.hobbies}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentsPage;
