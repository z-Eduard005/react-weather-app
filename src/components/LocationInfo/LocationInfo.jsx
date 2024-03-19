import styles from './LocationInfo.module.scss'
import RainfallImg from '../shared/RainfallImg/RainfallImg'
import WindImg from '../shared/WindImg/WindImg'
import HumidityImg from '../shared/HumidityImg/HumidityImg'

const LocationInfo = ({ currentWeather }) => {
  return (
    <section className={styles['location-info']}>
      <h1>Stockholm, Sweden</h1>
      <p className={styles.day}>Tue, Jun 30</p>
      <div className={styles['big-indicators']}>
        <img src={`/assets/img/condition-icons/day/185.svg`} alt={`alt!`} />
        <div>
          <p>19<sup>°c</sup></p>
          <p>Rainy</p>
        </div>
      </div>
      <div className={styles['small-indicators']}>
        <div>
          <div className={styles.left}>
            <div>
              <RainfallImg />
              <p>RainFall</p>
            </div>
          </div>
          <p>3cm</p>
        </div>
        <div>
          <div className={styles.left}>
            <div>
              <WindImg />
              <p>Wind</p>
            </div>
          </div>
          <p>19km/h</p>
        </div>
        <div>
          <div className={styles.left}>
            <div>
              <HumidityImg />
              <p>Humidity</p>
            </div>
          </div>
          <p>64%</p>
        </div>
      </div>
      {/* {Math.round(currentWeather.temp_c)} */}
    </section>
  );
}

export default LocationInfo;
