import React, { createContext, useState, useEffect } from "react";
import StudentsPage from "./StudentsPage";

const Student = createContext();

const StudentDataPage = () => {
  const [studentRecords, setStudentRecords] = useState([]);

  useEffect(() => {
    const storedStudentRecords = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );

    //console.log(storedStudentRecords);
    setStudentRecords(storedStudentRecords);
  }, []);

  return (
    <Student.Provider value={{ studentRecords }}>
      <StudentsPage />
    </Student.Provider>
  );
};
//console.log(StudentContext);
export { Student, StudentDataPage };
