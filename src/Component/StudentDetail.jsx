import React, { useContext, useEffect, useState } from "react";
import { Students } from "./StudentDataPage";
import StudentsPage from "./StudentsPage";
import searchIcon from "../WebPage/logo/searchIcon.png";
//ye chileren hai StudentDataPage page ka
const StudentDetail = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  // const [studentsName, setStudentsName] = useState([]);

  const studentsInfo = useContext(Students); // Students.Provider ki valuse ka data yaha mil raha hai array ki form me
  const responsiveData = studentsInfo.filter((stu) => {
    return stu.fname.toLowerCase().includes(searchKeyword.toLowerCase()); // yaha par studentsInfo se data filter karke stu par one by one le rahe hai. uske baad fname ko le rahe hai. uske baad includes ka use kar ke searchKeyword ko fname se match kar rahe hai. agar match ho raha hai to return kar de rahe hai.
  });

  return (
    <>
      <form>
        <input
          type="search"
          value={searchKeyword}
          placeholder="Search"
          onChange={(event) => {
            let x = event.target.value;
            setSearchKeyword(x);
          }}
        />
        <input
          type="image"
          src={searchIcon}
          style={{ width: "25px" }}
          alt="search-logo"
        />
      </form>
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

        {responsiveData.map((a) => {
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
