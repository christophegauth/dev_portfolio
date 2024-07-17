import React from 'react'
import About_header from '../About_header/About_header'
import img from '../../assets/about_img.png'
import './About_page.css';

const About_page = () => {
  return (
    <div>
      <About_header />
      <div className='img_boxx'>
        <img src={img} alt="" />
      </div>
      <div className='cbt'>
        <div>
          <h2>MY  CAPABILITIES</h2>
        </div>
        <div className='box1'>
          <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
          <div>
            <div className='first_span'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>JQUERY</span>
            </div>
            <div className='second_span'>
              <span>ACCESSIBILITY</span>
              <span>FIGMA</span>
              <span>TAILWIND CSS</span>
            </div>
          </div>
        </div>
      </div>
      <div className='exp'>
        <div>
          <h2>MY EXPERIENCE</h2>
        </div>
        <div className='box2'>
          <div>
            <div className='fd'>
              <h4>Freelance Developer</h4>
              <p>Nov 2023 — Present </p>
            </div>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <div className='fei'>
              <h4>Front-End Intern</h4>
              <p>Sep 2023 — Nov 2023</p>
            </div>
            <h5>Roos Tech</h5>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_page