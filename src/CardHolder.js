import React, { useState } from 'react'

function CardHolder() {
    const [city, setCity] = useState('');
  const [data, setData] = useState({});

  const fetchWeather = (searchStr) => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchStr}&units=imperial&appid=223d121f0ed01b80147842b5c0a7ba5a`;
    console.log('city', city)

    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log('weather data', result)
            setData(result)
        })
        .catch(error => {
            // common error
            return null;
        });
 }

  const handleChange = (evt) => {
    evt.preventDefault();

    console.log (evt.target.value)
    setCity(evt.target.value)

  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchWeather(city)

  }


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>City</span>
                <input type="text" value={city} onChange={handleChange} />
            </label>
            <button type="submit">Search City</button>
        </form>
        </div>
    )
}

export default CardHolder
