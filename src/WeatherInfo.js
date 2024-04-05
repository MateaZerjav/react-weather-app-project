import React from "react";
import FormatDate from "./FormatDate";

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
          <div className="col-6 mt-4 mb-4 text-center">
            <img src={props.data.icon} alt="" />
            <span className="temperature ">
              {Math.round(props.data.temperature)}
            </span>
            °C
          </div>
        </div>

        <div className="col-6 ">
          <ul className="properties">
            <li>Precipitation: {props.data.precipitation}%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
