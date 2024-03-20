import styles from './HumidityImg.module.scss';
import indicators from '../smallIndicatorsImg.module.scss'

const HumidityImg = ({ className }) => {
  return (
    <div className={`${indicators['box-img']} ${styles['box-img']} ${className}`}>
      <img src="/assets/img/indicators/humidity.svg" alt='Humidity indicator' />
    </div>
  );
};

export default HumidityImg;