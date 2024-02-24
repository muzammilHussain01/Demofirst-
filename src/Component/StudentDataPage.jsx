import React, { useEffect, useState, createContext } from "react";
import StudentDetail from "./StudentDetail";

const Students = createContext();
console.log(Students);
const StudentDataPage = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  useEffect(() => {
    //Get keys from localstorage
    let keys = Object.keys(localStorage);
    // console.log(keys);
    //maping data to corrosponding keys
    let info = keys.map((data) => {
      let stringData = localStorage.getItem(data); //getting values from local storage in string form
      return JSON.parse(stringData); // converting string into array form
    });
    setStudentInfo(info);
  }, []);
  // console.log(studentInfo);

  return (
    <>
      <Students.Provider value={studentInfo}>
        <StudentDetail />
      </Students.Provider>
    </>
  );
};

export default StudentDataPage;
export { Students };
