import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReduxTask.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./action/action";

const ReduxTask = () => {
  //useSelector
  const myState = useSelector((state) => state.changeTheNumber);
  //useDispatch
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [ifError, setIferror] = useState("");
  // useState for search
  const [searchKey, setSearchKey] = useState("");
  // logic for search button
  const search = () => {
    for (let i = 0; i < data.length; i++) {
      if (parseInt(searchKey) === data[i].id) {
        console.log("Item Founded !");
      } else if (parseInt(searchKey) !== data[i].id) {
        console.log("Item not Founded !");
      } else {
        console.log("Please Enter Item !");
      }
    }
  };
  // card component
  const Card = ({ item }) => {
    return (
      <div className="card">
        <h2>{item.albumId}</h2>
        <h2>{item.thumbnailUrl}</h2>
        <h2>{item.title}</h2>
        <h2>{item.url}</h2> <br />
        <button
          className="add-btn"
          onClick={() => {
            dispatch(incNumber());
          }}
        >
          Add to cart
        </button>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(decNumber());
          }}
        >
          Remove from cart
        </button>
      </div>
    );
  };

  const api = "https://jsonplaceholder.typicode.com/albums/1/photos";

  const asyncFun = async () => {
    try {
      let response = await axios.get(api);
      let res = await response.data;
      setData(res);
    } catch (error) {
      setIferror(error);
    }
  };

  useEffect(() => {
    asyncFun();
  }, []);
  console.log();

  return (
    <>
      <h2>{ifError}</h2>

      <div className="container">
        <ul>
          <li className="search-box">
            <input
              type="text"
              className="search"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            :<button onClick={search}> Search</button>
          </li>
          <li className="cart-container">
            <h2>Cart</h2>
            <h4>Add items:{myState}</h4>
          </li>
        </ul>
      </div>
      <div className="mainDiv">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};
export default ReduxTask;
