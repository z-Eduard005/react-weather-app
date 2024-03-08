import styles from './LocationInfo.module.scss'

const LocationInfo = ({ location }) => {
  return (
    <section className={styles['location-info']}>
      <h1>{location}</h1>
    </section>
  );
}

export default LocationInfo;
