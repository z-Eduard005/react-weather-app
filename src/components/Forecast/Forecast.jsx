import styles from './Forecast.module.scss'

const Forecast = ({ forecast }) => {
  return (
    <section className={styles['forecast']}>
      <h2>Forecast for 3 days</h2>
    </section>
  );
}

export default Forecast;
