import './About_header.css';

function About_header()  {
  return (
    <div className='hero'>
      <h2>ABOUT ME</h2>
      <div className='text_box'>
        <h3>I am a front-end developer based in Sydney. <br /> Has Mechanical Engineering background. </h3>
        <p>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
        <div className='action'>
          <div className='button'>
            <button>MY RESUME</button>
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
    </div>
  )
}

export default About_header