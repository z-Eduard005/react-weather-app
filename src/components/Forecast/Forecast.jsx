import { useState } from 'react';
import styles from './Forecast.module.scss'
import RainfallImg from '../shared/RainfallImg/RainfallImg'
import WindImg from '../shared/WindImg/WindImg'
import HumidityImg from '../shared/HumidityImg/HumidityImg'

const Forecast = ({ forecast }) => {
  const [dayActive, setDayActive] = useState(new Array(forecast.length).fill(false))

  const handleDayClick = index => setDayActive(prev => {
    const newDayActive = [...prev]
    newDayActive[index] = !newDayActive[index]
    return newDayActive
  })

  return (
    <section className={styles['forecast']}>
      <h2>Next {forecast.length} Days</h2>
      {forecast.map((day, index) => (
        <div
          key={index}
          className={`${styles.forecast__day} ${dayActive[index] ? styles.active : ''}`}
          onClick={() => handleDayClick(index)}
        >
          <div>
            <p>{index ? new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' }) : 'Tomorrow'}</p>
            <div className={styles.right}>
              <p>{Math.round(day.day.avgtemp_c)} °</p>
              <img
                src={`/assets/img/condition-icons/${day.day.condition.icon.split('/').slice(-2).join('/').slice(0, -4)}.svg`}
                alt={day.day.condition.text}
              />
            </div>
          </div>
          <div className={styles.additional}>
            <div>
              <div>
                <RainfallImg />
                <p>{day.day.totalprecip_mm} mm</p>
              </div>
              <div>
                <WindImg />
                <p>{day.day.maxwind_kph} km/h</p>
              </div>
              <div>
                <HumidityImg />
                <p>{day.day.avghumidity} %</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Forecast;
