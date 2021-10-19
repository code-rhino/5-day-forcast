import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather_icons/css/weather-icons.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      country: null,
      weather_forecast: null,
    };
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=London,us&units=imperial&appid=03391c8ecd63478e020be2d29b18101e")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          city: data["city"]["name"],
          country: data["city"]["country"],
          weather_forecast: data["list"]
            .filter((val) => val["dt_txt"].includes("12:00:00"))
            .map((val) => {
              return {
                icon: "wi wi-owm-day-" + val["weather"][0]["id"],
                temp_fahrenheit: val["main"]["temp"],
                weather_desc: val["weather"][0]["description"],
                date: moment
                  .unix(val["dt"])
                  .tz("America/New_York")
                  .format("MMMM Do, h a"),
                day: moment
                  .unix(val["dt"])
                  .tz("America/New_York")
                  .format("dddd"),
              };
            }),
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="container-fluid text-sm-center p-5" style={{backgroundColor: "#C5C5C5", borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px'}}>
          <h1 className="display-2"> 5 Day Forecast. </h1>
        </div>
        <div
          className="d-flex justify-content-center text-muted"
          style={{ paddingTop: "30px", marginBottom: "-15px" }}
        >
          <p>
            {this.state.city}, {this.state.country}
          </p>
        </div>
        <div className="d-flex justify-content-center container">

          {this.state.weather_forecast
            ? this.state.weather_forecast.map((val, idx) => {
              return (
                <div
                key={idx}
                  className="col justify-content-center"
                  style={{
                    border: "1px solid #C5C5C5",
                    borderRadius: "4px",
                    margin: "10px",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "32.5px",
                      fontWeight: "bold",
                    }}
                  >
                    {val["day"]}
                  </p>
                  <p className="d-flex justify-content-center text-muted">
                    {val["date"]}
                  </p>
                  <i
                    className={val["icon"]}
                    style={{
                      fontSize: "80px",
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      paddingTop: "25px",
                      paddingBottom: "25px"
                    }}
                  >
                  </i>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(val["temp_fahrenheit"])} &deg; F
                  </p>
                  <p style={{ textAlign: "center" }}>
                    {val["weather_desc"]}
                  </p>
                </div>
              );
            })
            : null}
        </div>
      </div>
    );
  }
}

export default App;