import React from "react";
import apiKey from "../WeatherAPIKey";
import Day from "./Day";

class Week extends React.Component {
  state = {
    coords: {
      latitude: 45,
      longitude: 60,
    },
  };
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        this.setState({ coords: newCoords });
      });
    } else {
      console.log("not supported");
    }
  }

  state = {
    fullData: [],
    dailyData: [],
  };

  componentDidMount = () => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${apiKey}`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        this.setState(
          {
            fullData: data.list,
            dailyData: dailyData,
          },
          () => console.log(this.state)
        );
      });
  };

  formatDay = () => {
    return this.state.dailyData.map((reading, index) => (
      <Day reading={reading} key={index} />
    ));
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-1 jumbotron">5-Day Forecast</h1>
        <h5 className="display-5 text-muted">Milton, DE</h5>
        <div className="row justify-content-center">{this.formatDay()}</div>
      </div>
    );
  }
}

export default Week;
// class App extends React.Component {
//   state = {
//     coords: {
//       latitude: 45,
//       longitude: 60,
//     },
//   };
//   componentDidMount() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         let newCoords = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         };

//         this.setState({ coords: newCoords });
//       });
//     } else {
//       console.log("not supported");
//     }
//   }
