import React, { useContext } from "react";
import { Students } from "./StudentDataPage";
import StudentsPage from "./StudentsPage";
//ye chileren hai StudentDataPage page ka
const StudentDetail = () => {
  const studentsInfo = useContext(Students); // Students.Provider ki valuse ka data yaha mil raha hai array ki form me
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
        {/*studentsInfo ko map kar ke array ko iterate kiya har index par*/}
        {studentsInfo.map((a) => {
          // a me har index ka data one-by-one aaya
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
