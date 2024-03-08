import React, { useState } from 'react';
import Header from './components/Header/Header';
import LocationInfo from './components/LocationInfo/LocationInfo';
import Indicators from './components/Indicators/Indicators';
import Days from './components/Days/Days';

const apiKey = 'e45154fc84c94e11bff93853242602'

const App = () => {
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState({})

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
  if (location) {
    fetch(url)
      .then(response => response.json())
      .then(data => setForecast(data))
      .catch(error => console.error('Error while retrieving weather data:', error))
  }

  return (
    <div className="app">
      <div>
        <Header data={{ setLocation, apiKey }} />
        <main>
          <LocationInfo location={location} />
          <Indicators />
          <Days />
        </main>
      </div>
    </div>
  );
}

export default App;