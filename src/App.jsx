import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import LocationInfo from './components/LocationInfo/LocationInfo';
import Forecast from './components/Forecast/Forecast';

const apiKey = process.env.REACT_APP_WHEATHER_API_KEY

const App = () => {
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState('')
  const [updateTime, setUpdateTime] = useState('')

  useEffect(() => {
    const fetchWeatherData = () => {
      if (location) {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`

        fetch(url)
          .then(response => response.json())
          .then(data => setForecast(data))
          .catch(error => {
            console.error('Error while retrieving weather data:', error)
            setForecast('error')
          })

        setUpdateTime(new Date().toLocaleTimeString('en-US'))
      }
    }

    fetchWeatherData()
    let intervalId = setInterval(fetchWeatherData, 1000 * 60 * 15);

    return () => clearInterval(intervalId);
  }, [location])

  return (
    <div className="app">
      <div>
        <Header data={{ setLocation, apiKey, updateTime }} />
        <main>
          {
            forecast === '' ?
              <h1 className='text-center'>Enter the city please</h1>
              :
              forecast === 'error' ?
                <h1 className='text-center'>Error while retrieving weather data. Try again later</h1>
                :
                <>
                  <LocationInfo currentWeather={forecast} />
                  <Forecast forecast={forecast.forecast.forecastday.slice(1)} />
                </>
          }
        </main>
      </div>
    </div>
  );
}

export default App;