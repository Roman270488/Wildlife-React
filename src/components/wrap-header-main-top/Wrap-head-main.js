import './wrap-head-main.scss';
import Header from "../header/Header";
import HeaderMain from '../header-main/Header-main';

const WrapHeadMain = () => {
  return (
    <div className="wrap-head-main">
      <Header/>
      <HeaderMain/>
    </div>
  )
}

export default WrapHeadMain;