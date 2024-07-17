import './Contact.css';

function Contact() {
  return (
    <div className='contact_me'> 
      <div className='connect'>
        <h2>LET'S CONNECT</h2>
        <p>Say hello at <a href="">robertgarcia@gmail.com</a> </p>
        <p>For more info, here’s my <a href="">resume</a> </p>
        <div className='social_media'>
          <a href="">
            <i class="fa-brands fa-linkedin-in" style={{color: "#d3e97a"}}></i>
          </a>
          <a href="">
            <i class="fa-brands fa-github" style={{color: "#d3e97a"}}></i>
          </a>
          <a href="">
            <i class="fa-brands fa-x-twitter" style={{color: "#d3e97a"}}></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram" style={{color: "#d3e97a"}}></i>
          </a>
        </div>
        <span>&copy; 2024 Christophe SOKPOLY</span>
      </div>
      <div className="touch">
        <form action="">
          <div>
            <label for="name">Name</label> <br />
            <input type="text" name='name' id='name' placeholder='John Doe' />
          </div>

          <div>
            <label for="email">Email</label> <br />
            <input type="email" name='email' id='email'/>
          </div>

          <div>
            <label for="subject">Subject</label> <br />
            <input type="text" name='subject' id='subject'/>
          </div>

          <div>
            <label for="message">Message</label> <br />
            <textarea name="message" id="message"></textarea>
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
      <span className="last">&copy; 2024 Christophe SOKPOLY</span>
    </div>
  )
}

export default Contact