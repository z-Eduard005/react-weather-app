import styles from './LocationInfo.module.scss'
import RainfallImg from '../shared/RainfallImg/RainfallImg'
import WindImg from '../shared/WindImg/WindImg'
import HumidityImg from '../shared/HumidityImg/HumidityImg'

const LocationInfo = ({ currentWeather }) => {
  return (
    <section className={styles['location-info']}>
      <h1>{`${currentWeather.location.name}, ${currentWeather.location.country}`}</h1>
      <p className={styles.day}>{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
      <div className={styles['big-indicators']}>
        <img
          src={`/assets/img/condition-icons/${currentWeather.current.condition.icon.split('/').slice(-2).join('/').slice(0, -4)}.svg`}
          alt={currentWeather.current.condition.text}
        />
        <div className='text-center'>
          <p>{Math.round(currentWeather.current.temp_c)}<sup>°c</sup></p>
          <p>{currentWeather.current.condition.text}</p>
        </div>
      </div>
      <div className={styles['small-indicators']}>
        <div>
          <div className={styles.left}>
            <div>
              <RainfallImg className={styles["box-img"]} />
              <p>RainFall</p>
            </div>
          </div>
          <p>{currentWeather.current.precip_mm}mm</p>
        </div>
        <div>
          <div className={styles.left}>
            <div>
              <WindImg className={styles["box-img"]} />
              <p>Wind</p>
            </div>
          </div>
          <p>{currentWeather.current.wind_kph}km/h</p>
        </div>
        <div>
          <div className={styles.left}>
            <div>
              <HumidityImg className={styles["box-img"]} />
              <p>Humidity</p>
            </div>
          </div>
          <p>{currentWeather.current.humidity}%</p>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;
