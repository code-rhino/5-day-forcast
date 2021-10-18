import React from "react";
import "./Cards.module.css";

var moment = require("moment");

const Day = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  const imgURL = `wi-owm${reading.weather[0].id}`;

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">
          {moment(newDate).format("MMMM Do, h:mm a")}
        </p>
        {reading.weather[0].id}
        <i className={imgURL}></i>
        <h2>{Math.round(reading.main.temp)} °F</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};
export default Day;
