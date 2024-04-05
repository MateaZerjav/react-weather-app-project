import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let min = props.date.getMinutes();
  if (hour < 10) {
    hour = `0${min}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  return (
    <div>
      {day} {hour}:{min}
    </div>
  );
}
