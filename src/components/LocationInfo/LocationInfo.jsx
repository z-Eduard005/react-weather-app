import styles from './LocationInfo.module.scss'

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
              <div className={styles['box-img']}>
                <img src="/assets/img/indicators/rain-fall.svg" alt='Rain fall indicator' className={styles['rain-fall-img']} />
              </div>
              <p>RainFall</p>
            </div>
          </div>
          <p>3cm</p>
        </div>
        <div>
          <div className={styles.left}>
            <div>
              <div className={styles['box-img']}>
                <img src="/assets/img/indicators/wind.svg" alt='Wind indicator' className={styles['wind-img']} />
              </div>
              <p>Wind</p>
            </div>
          </div>
          <p>19km/h</p>
        </div>
        <div>
          <div className={styles.left}>
            <div>
              <div className={styles['box-img']}>
                <img src="/assets/img/indicators/humidity.svg" alt='Humidity indicator' className={styles['humidity-img']} />
              </div>
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
