import './slider.scss';
import arrowLeftImg from './../../assets/arrow-left.svg';
import arrowRightImg from './../../assets/arrow-right.svg';

const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__arrow-left-block">
        <div className="slider__arrow-left">
          <img className="slider__arrow-left-image" 
            src={arrowLeftImg} 
            alt="button left"/>
        </div>
      </div>
      <div className="slider__slider-window"></div>
      <div className="slider__arrow-right-block">
        <div className="slider__arrow-right">
          <img className="slider__arrow-right-image" 
            src={arrowRightImg} 
            alt="button right"/>
        </div>
      </div>
    </section>
  )
}

export default Slider;