import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  let [info, setInfo] = useState([]);

  let data = async () => {
    const link = "https://jsonplaceholder.typicode.com/posts";
    let response = await axios.get(link);
    let information = await response.data;
    setInfo(information);
  };
  const search = () => {
    for (let i = 0; i < info.length; i++) {
      if (info[i].id === searchKey) {
        console.log("Founded", searchKey);
      } else if (info[i].userId === searchKey) {
        console.log("Founded", searchKey);
      } else if (info[i].title === searchKey) {
        console.log("Founded", searchKey);
      } else if (info[i].body === searchKey) {
        console.log("Founded", searchKey);
      } else {
        console.log("Not Founded !");
      }
    }
  };

  useEffect(() => {
    data();
  }, []);

  const searchKeyword = (event) => {
    let sKeyWord = event.target.value;
    setSearchKey(sKeyWord);
  };

  return (
    <div>
      <input
        type="search"
        value={searchKey}
        placeholder="Search Here"
        onChange={searchKeyword}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};
export default Search;
