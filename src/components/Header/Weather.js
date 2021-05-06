import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://api.weatherstack.com/current";

const params = {
  accessKey: process.env.REACT_APP_WEATHER_API_KEY,
  query: "London",
};

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API, { params })
      .then((res) => setWeather(res.data))
      .then((res) => setIsLoading(false));
  }, []);

  return (
    <div>
        <p>Weather Info</p>
        {/* <p>{weather.current.temperature}</p> */}
      {/* <p>Currently, in {weather.location.name} is {weather.current.temperature}{''} degrees. It feels like {weather.current.feelslike}</p> */}
    </div>
  );
};

export default Weather;
