import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="mt-4">{props.data.name}</h2>

      <ul className="mt-3 ">
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-3 ms-3 mt-3 me-0">
              {" "}
              <WeatherIcon code={props.data.icon} />
            </div>
            <WeatherUnit celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-6 ">
          <ul className="properties">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
