import React, { useState } from 'react';
import Header from './components/Header/Header';
import LocationInfo from './components/LocationInfo/LocationInfo';
import Forecast from './components/Forecast/Forecast';

const apiKey = 'e45154fc84c94e11bff93853242602'

const App = () => {
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState('')

  if (location) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`

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
          {!forecast ?
            <h1 className='text-center'>Enter the city please</h1>
            :
            <>
              <LocationInfo currentWeather={forecast} />
              <Forecast forecast={forecast.forecast.forecastday.slice(1)} />
            </>}
        </main>
      </div>
    </div>
  );
}

export default App;