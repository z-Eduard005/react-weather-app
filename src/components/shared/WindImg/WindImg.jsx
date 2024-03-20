import styles from './WindImg.module.scss';
import indicators from '../smallIndicatorsImg.module.scss'

const WindImg = ({ className }) => {
  return (
    <div className={`${indicators['box-img']} ${styles['box-img']} ${className}`}>
      <img src="/assets/img/indicators/wind.svg" alt='Wind indicator' />
    </div>
  );
};

export default WindImg;