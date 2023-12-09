import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function search() {
    const apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
