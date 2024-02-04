import './header-main.scss';
import Button from '../button/Button';

const HeaderMain = () => {
  return (
    <div className="header-main">
      <div className="header-main__block-title">
        <h1 className='header-main__titile'>Survival</h1>
      </div>
      <div className="header-main__description-block">
        <p className="header-main__description-text">What this means is that we exist to help protect our environment and do in numbers of ways. You can save the planet by donation.</p>
      </div>
      <div className="header-main__button-block">
        <Button text={'Donate'}/>
      </div>
    </div>
  )
}

export default HeaderMain;