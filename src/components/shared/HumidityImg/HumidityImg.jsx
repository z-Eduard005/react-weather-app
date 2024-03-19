import styles from './HumidityImg.module.scss';
import indicators from '../smallIndicatorsImg.module.scss'

const HumidityImg = () => {
  return (
    <div className={`${indicators['box-img']} ${styles['box-img']}`}>
      <img src="/assets/img/indicators/humidity.svg" alt='Humidity indicator' />
    </div>
  );
};

export default HumidityImg;