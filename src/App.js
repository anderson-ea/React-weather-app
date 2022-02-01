import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function App() {

  const [weatherData, setWeatherData] = useState({})
  const [city, setCity] = useState('Denver')

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1e93e95acf4b38b2e02f111ba71c2ba&units=imperial`)
      .then(res => res.json())
      .then(data => setWeatherData(data))
  }, [city])

  function handleChange(event) {
    setCity(event.target.value)
  }

  return (
    <div className="app">
      <div className="search">
        <input
          type="text" 
          placeholder='Enter City...'
          onChange={handleChange}
          name="newCity" 
          value={city}
          >
        </input>
      </div>
      <div className='container'>
        <div className="top">
          <div className="location">
            <p>{weatherData.name}</p>
          </div>
          <div className='temp'>
            <h1>{weatherData.main && weatherData.main.temp}°F</h1>
          </div>
          <div className='description'>
            <p>{weatherData.weather && weatherData.weather.description}</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>{weatherData.main && weatherData.main.feels_like}°F</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>{weatherData.main && weatherData.main.humidity}</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>{weatherData.wind && weatherData.wind.speed}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;