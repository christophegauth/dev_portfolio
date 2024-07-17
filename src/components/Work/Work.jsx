import './Work.css';
import img1 from '../../assets/arrow.svg'
import img2 from '../../assets/gtl.svg'
import img3 from '../../assets/work1.png'
import img4 from '../../assets/work2.png'
import img5 from '../../assets/work3.png'

const Work = () => {
  return (
    <div className='work-box'>
      <div>
        <h2>FEATURED PROJECTS</h2>
        <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
      </div>
      <div className='main'>
        <div className='row'>
          <div className='img-col'>
            <img src={img3} alt="" />
          </div>
          <div className='text-col'>
            <h3>Promotional landing page for our <br /> favorite show</h3>
            <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            <h4>PROJECT INFO</h4>
              <div className='info'>
                <h5>Year</h5>
                <span>2025</span>
              </div>
              <div className='info'>
                <h5>Role</h5>
                <span>Front-end Developer</span>
              </div>
            <div className='demo'>
              <a href="#">LIVE DEMO
                <img src={img1} alt="" />
              </a>
              <a href="#">SEE ON GITHUB
                <img src={img2} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='img-col'>
            <img src={img4} alt="" />
          </div>
          <div className='text-col'>
            <h3>Blog site for World News</h3>
            <p>Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.</p>
            <h4>PROJECT INFO</h4>
              <div className='info'>
                <h5>Client</h5>
                <span>World News</span>
              </div>
              <div className='info'>
                <h5>Year</h5>
                <span>2022</span>
              </div>
              <div className='info'>
                <h5>Role</h5>
                <span>Front-end Developer</span>
              </div>
            <div className='demo'>
              <a href="#">LIVE DEMO
                <img src={img1} alt="" />
              </a>
              <a href="#">SEE ON GITHUB
                <img src={img2} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='img-col'>
            <img src={img5} alt="" />
          </div>
          <div className='text-col'>
            <h3>E-commerce product page</h3>
            <p>Successfully crafted an engaging product page featuring a dynamic lighbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.</p>
            <h4>PROJECT INFO</h4>
              <div className='info'>
                <h5>Year</h5>
                <span>2022</span>
              </div>
              <div className='info'>
                <h5>Role</h5>
                <span>Front-end Developer</span>
              </div>
            <div className='demo'>
              <a href="#">LIVE DEMO
                <img src={img1} alt="" />
              </a>
              <a href="#">SEE ON GITHUB
                <img src={img2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work