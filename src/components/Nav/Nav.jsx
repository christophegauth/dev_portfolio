import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='top_section'>
      <span>ROBERT GARCIA</span>
      <div className='nav_links'>
        <a href="#"><NavLink exact to="/">Work</NavLink></a>
        <a href="#"><NavLink to="/about_page">About</NavLink></a>
        <a href="#"><NavLink to="/contact">Contact</NavLink></a>
      </div>
      <a href="" className='berguer'><i class="fa-solid fa-bars-staggered fa-2xl" style={{color: "#c7c7c7"}}></i></a>
    </div>
  )
}

export default Nav