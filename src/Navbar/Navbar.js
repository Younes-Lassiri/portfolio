import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css'
export default function Navbar() {
    const [mobile, setMobile] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false);
  const [visited, setVisited] = useState('a')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  return (
    <div>
        <div className={`navbar-section ${isScrolling ? 'isScrolling' : ''}`}>
        <div className='logo'>
            <img src='https://i.ibb.co/5B8b7Jx/20240323-032456.png'/>
        </div>

        <div className='email'>
            <span>youneslassirifreelance@gmail.com</span>
        </div>

        <div className='ul'>
            <ul className='navbar-ul'>
            <li>
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'a'? 'active' : ''} onClick={() => setVisited('a')}>
                Services
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}}  className={visited === 'b'? 'active' : ''} onClick={() => setVisited('b')}>
                Works
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}}  className={visited === 'c'? 'active' : ''} onClick={() => setVisited('c')}>
                Resume
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'd'? 'active' : ''} onClick={() => setVisited('d')}>
                Skills
            </Link>
            </li>

            <li>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'f'? 'active' : ''} onClick={() => setVisited('f')}>
                Contact
            </Link>
            </li>
            </ul>
        </div>


        <div className='button'>
            <button type="">Hire Me!</button>
            
        </div>


        <div className="hamburger-toggle humb" onClick={() => setMobile(!mobile)}>
                <span className="line top"></span>
                <span className="line middle"></span>
                <span className="line bottom"></span>
            </div>
    </div>


    <div className={mobile? 'ul-mobilet' : 'ul-mobile'}>
    <div>
            <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'a'? 'active' : ''} onClick={() => setVisited('a')}>
                Services
            </Link>
            </div>


            <div>
            <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}}  className={visited === 'b'? 'active' : ''} onClick={() => setVisited('b')}>
                Works
            </Link>
            </div>

            <div>
            <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}}  className={visited === 'c'? 'active' : ''} onClick={() => setVisited('c')}>
                Resume
            </Link>
            </div>

            <div>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'd'? 'active' : ''} onClick={() => setVisited('d')}>
                Skills
            </Link>
            </div>

            <div>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
             style={{color: '#fff', cursor: 'pointer'}} className={visited === 'f'? 'active' : ''} onClick={() => setVisited('f')}>
                Contact
            </Link>
            </div>
    </div>
    </div>
    
  )
}

