import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row mt-4">
            <div className="col-9 ">
              <input
                type="sertch"
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

        <h2 className="mt-4">New York</h2>
        <ul className="mt-3 ">
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="col-6 mt-4 mb-4 text-center">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
                alt=""
              />
              <span className="temperature ">18</span>°C
            </div>
          </div>

          <div className="col-6 ">
            <ul className="properties">
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
