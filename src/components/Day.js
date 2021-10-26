import React from "react";
// import "./Cards.module.css";
import "../style/App.css";

import "../style/weather-icons.css";
import "../style/weather-icons.min.css";
import "../style/weather-icons-wind.css";
import "../style/weather-icons-wind.min.css";

import "../font/weathericons-regular-webfont.eot";
import "../font/weathericons-regular-webfont.svg";
import "../font/weathericons-regular-webfont.ttf";
import "../font/weathericons-regular-webfont.woff";
import "../font/weathericons-regular-webfont.woff2";

var moment = require("moment");

const Day = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  const imgURL = `wi wi-owm-${reading.weather[0].id} wi-5x`;

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">
          {moment(newDate).format("MMMM Do, h:mm a")}
        </p>
        <i className={imgURL} size="5x"></i>
        <h2>{Math.round(reading.main.temp)} °F</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};
export default Day;
