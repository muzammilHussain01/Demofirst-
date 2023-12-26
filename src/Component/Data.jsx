import React, { useState, useEffect } from "react";
import "./TableStyle.css";
import { Search } from "./Search";

let newArray = (dataValues) => {
  return (
    <>
      <tr>
        <td>{dataValues.id}</td>
        <td>{dataValues.userId}</td>
        <td>{dataValues.title}</td>
        <td>{dataValues.body}</td>
      </tr>
    </>
  );
};
const Data = () => {
  //useState hook for updating info
  let [info, updatedInfo] = useState([]);
  let fun = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    var info = await data.json();

    updatedInfo(info);
  };
  // useEffect hook to call fun() at the time of page loading
  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <Search />
      <table className="mainTable">
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>{info.map(newArray)}</tbody>
      </table>
    </>
  );
};
export default Data;
