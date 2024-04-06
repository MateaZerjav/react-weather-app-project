import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("New York");

  function handleResponse(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      name: response.data.name,
      description: response.data.weather[0].description,
      precipitation: 50,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-9 ">
                <input
                  type="search"
                  placeholder="Enter a city...."
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weather} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
