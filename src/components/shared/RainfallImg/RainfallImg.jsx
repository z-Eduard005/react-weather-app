import styles from './RainfallImg.module.scss';
import indicators from '../smallIndicatorsImg.module.scss'

const RainfallImg = ({ className }) => {
  return (
    <div className={`${indicators['box-img']} ${styles['box-img']} ${className}`}>
      <img src="/assets/img/indicators/rain-fall.svg" alt='Rain fall indicator' />
    </div>
  );
};

export default RainfallImg;