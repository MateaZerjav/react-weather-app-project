import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

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
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row mt-4">
              <div className="col-9 ">
                <input
                  type="search"
                  placeholder="Enter a city...."
                  className="form-control"
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
          <h2 className="mt-4">{weather.name}</h2>
          <ul className="mt-3 ">
            <li>
              <FormatDate date={weather.date} />
            </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>

          <div className="row">
            <div className="col-6">
              <div className="col-6 mt-4 mb-4 text-center">
                <img src={weather.icon} alt="" />
                <span className="temperature ">
                  {Math.round(weather.temperature)}
                </span>
                °C
              </div>
            </div>

            <div className="col-6 ">
              <ul className="properties">
                <li>Precipitation: {weather.precipitation}%</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    const apiKey = "017d56650cd168d68067850318775d43";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
