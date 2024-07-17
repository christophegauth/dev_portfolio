import './Hero.css';
import img from '../../assets/potrait.png'

function Hero()  {
  return (
   <div className='hero_box'>
      <div className='text_box'>
        <h1>Hi, I AM <br /> ROBERT GARCIA. </h1>
        <p className='separared'>A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
        <div className='action'>
          <div className='button'>
            <button>CONTACT ME</button>
            <span></span>
          </div>
          <a href="#">
            <i className="fa-brands fa-linkedin-in" style= {{color: "#d3e97a"}}></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github" style={{color: "#d3e97a"}}></i>
          </a>
        </div>
      </div>
      <div className='img_box'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Hero