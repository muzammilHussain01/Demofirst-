import React, { useContext } from "react";
import { Students } from "./StudentDataPage";
import StudentsPage from "./StudentsPage";

const StudentDetail = () => {
  const studentsInfo = useContext(Students);
  console.log(studentsInfo);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Fname</th>
            <th>Mname</th>
            <th>Address</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Qualification</th>
          </tr>
        </thead>

        {studentsInfo.map((a) => {
          return (
            <>
              <StudentsPage
                firstName={a.fname}
                middleName={a.mname}
                address={a.address}
                email={a.email}
                hobbise={a.hobbies}
                qualification={a.Qualification}
              />
            </>
          );
        })}
      </table>
    </>
  );
};

export default StudentDetail;
