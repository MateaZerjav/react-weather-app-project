import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="sertch"
                placeholder="Enter a city...."
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h2>New York</h2>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
              alt=""
            />
            18°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 50%</li>
              <li>Humidity:50%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
