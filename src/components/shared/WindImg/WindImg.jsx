import styles from './WindImg.module.scss';
import indicators from '../smallIndicatorsImg.module.scss'

const WindImg = () => {
  return (
    <div className={`${indicators['box-img']} ${styles['box-img']}`}>
      <img src="/assets/img/indicators/wind.svg" alt='Wind indicator' />
    </div>
  );
};

export default WindImg;