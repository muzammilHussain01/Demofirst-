import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TableStyle.css";

let table = (dataValues) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{dataValues.id}</td>
          <td>{dataValues.userId}</td>
          <td>{dataValues.title}</td>
          <td>{dataValues.body}</td>
        </tr>
      </tbody>
    </>
  );
};
// function Component
const FetchData = () => {
  let [info, setInfo] = useState([]);
  let [err, isErr] = useState("");

  let data = async () => {
    try {
      const link = "https://jsonplaceholder.typicode.com/posts";
      let response = await axios.get(link);
      let information = await response.data;
      setInfo(information);
    } catch (error) {
      isErr(error.message);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <p>{err}</p>
      <table className="mainTable">
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        {info.map(table)}
      </table>
    </>
  );
};

export default FetchData;
