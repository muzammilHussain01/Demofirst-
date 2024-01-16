import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReduxTask.css";
/*Display items in on page (In card). 
In desktop display 4 items in row and in mobile 2 items in a row
Each card will have an add to cart button
When we click on add to cart it should display the no. of items in cart (Create a simple header)*/

const ReduxTask = () => {
  const [data, setData] = useState([]);
  const [ifError, setIferror] = useState("");

  const Card = ({ item }) => {
    return (
      <div className="card">
        <h2>{item.albumId}</h2>
        <h2>{item.id}</h2>
        <h2>{item.thumbnailUrl}</h2>
        <h2>{item.title}</h2>
        <h2>{item.url}</h2> <br />
        <button className="btn">Add to cart</button>
      </div>
    );
  };

  const api = "https://jsonplaceholder.typicode.com/albums/1/photos";

  const asyncFun = async () => {
    try {
      let response = await axios.get(api);
      let res = await response.data;
      setData(res);
      console.log(res);
    } catch (error) {
      setIferror(error);
    }
  };

  useEffect(() => {
    asyncFun();
  }, []);

  return (
    <>
      <h1>{ifError}</h1>
      <div className="mainDiv">
        {data.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </>
  );
};

export default ReduxTask;
