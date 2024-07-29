import { useRef } from 'react';
import './Nav.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Nav = () => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    <div className='top_section'>
      <span>ROBERT GARCIA</span>
      <div className='nav_links' id="nav-bar" ref={navRef}>
        <NavLink exact to="/">Work</NavLink>
        <NavLink to="/about_page">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </div>
      <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
    </div>
  )
}

export default Nav