import Form from '../form/Form';
import Slider from '../slider/slider';
import './main.scss';

const Main = () => {
  return (
    <main className="main">
      <div className="main__body">
        <div className="main__title-block">
          <h2 className="main__title">Latest articles</h2>
          <p className="main__sub-title">Breaking news from the wild</p>
        </div>
        <Slider/>
        <Form/>
      </div>
    </main>
  )
}

export default Main;