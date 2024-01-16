import axios from "axios";
import React, { useState, useEffect } from "react";

const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [ifError, setIfError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api =
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

      try {
        const response = await axios.get(api);
        const info = response.data;
        const arrInfo = Object.keys(info).map((key) => info[key]);

        const humid = arrInfo[10].relative_humidity_2m;
        const temp = arrInfo[10].temperature_2m;
        const time = arrInfo[10].time;
        const wind = arrInfo[10].wind_speed_10m;

        const formattedData = humid.map((value, index) => ({
          a: humid[index],
          b: temp[index],
          c: time[index],
          d: wind[index],
        }));

        setWeatherData(formattedData);
      } catch (error) {
        setIfError("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="heading">Weather Details</h1>;
      <div className="layout">
        {ifError}
        {weatherData.map((data, index) => (
          <div className="card" key={index}>
            <ul>
              <li>{`Humidity: ${data.a}`}</li>
              <li>{`Temprature: ${data.b}`}</li>
              <li>{`Time: ${data.c}`}</li>
              <li>{`Wind: ${data.d}`}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherAPI;
