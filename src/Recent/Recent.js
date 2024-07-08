import React, { useState, useEffect } from 'react'
import front from './Images/front.png';
import cour from './Images/cour.png';
import weather from './Images/weather.png'
import './Recent.css'
import { Link } from 'react-router-dom'
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(navigator.userAgent);
  }

export default function Recent() {
    const [clicked, setClicked] = useState('un')
    const [isMobile, setIsMobile] = useState(0);
    const [hovered, setHovered] = useState('one')
    useEffect(() => {
      setIsMobile(isMobileDevice() ? 1 : 0);
    }, []);
    function app(){
      return(
        <div className='project-section-one'>
                <div>
                    <img src={weather}/>
                </div>
                <Link to='/portfolios/2/weather_app'>
                <div className='showUp'>
                    <div className='showUp-one'>
                        <h3>Weather App</h3>
                        The weather application is a web-based tool designed to provide users with up-to-date weather information for locations worldwide.</div>
                    <div className='showUp-two'>↑</div>
                </div>
                </Link>
            </div>
      )
    }
  return (
    <div className='recent-section' id='works'>
        <div className='recent-title'><h1>My Recent Works</h1></div>
        <div className='recent-p'>
        {isMobile === 0 ? (
            <p>We put your ideas and thus your wishes in the form of a unique web project that<br></br> inspires you and you customers.</p>
          ) : <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p> }
        </div>

        <div className='recent-ul'>
                <div className={clicked === 'un'? `recent-one ${clicked}` : 'recent-one'} onClick={() => setClicked('un')}><li>All</li></div>
                <div className={clicked === 'deux'? `recent-two ${clicked}` : 'recent-two'} onClick={() => setClicked('deux')}><li>UX/UI</li></div>
                <div className={clicked === 'trois'? `recent-one ${clicked}` : 'recent-one'} onClick={() => setClicked('trois')}><li>Branding</li></div>
                <div className={clicked === 'quatre'? `recent-one ${clicked}` : 'recent-one'} onClick={() => setClicked('quatre')}><li>Apps</li></div>
        </div>
        
        <div className="project-section">

            {clicked === 'quatre'? app() : (
              <>
                <div className='project-section-one'>
                <div>
                    <img src={front}/>
                </div>
                <Link to='/portfolios/0/y&m-Royal-Chic'>
                <div className='showUp'>
                    <div className='showUp-one'>
                        <h3>Y&M ROYAL CHIC</h3>
                        The project is centered around an online store called Y&M ROYAL CHIC that specializes in women's clothing.</div>
                    <div className='showUp-two'>↑</div>
                </div>

                </Link>
            </div>
            
            <div className='project-section-two'>
            <div>
                    <img src={cour}/>
                </div>
                <Link to='/portfolios/1/cour-appel-laayoune'>
                <div className='showUpTwo'>
                    <div className='showUpTwo-one'>
                        <h3>نافذة الحق</h3>
                        
مشروع "نافذة الحق" هو منصة إلكترونية خاصة بالموضفين التابعين لمحكمة الاستئناف بالعيون.</div>
                    <div className='showUpTwo-two'>↑</div>
                </div>
                </Link>


            </div>
            <div className='project-section-one'>
                <div>
                    <img src={weather}/>
                </div>
                <Link to='/portfolios/2/weather_app'>
                <div className='showUp'>
                    <div className='showUp-one'>
                        <h3>Weather App</h3>
                        The weather application is a web-based tool designed to provide users with up-to-date weather information for locations worldwide.</div>
                    <div className='showUp-two'>↑</div>
                </div>
                </Link>
            </div>
              </>
            )}

        </div>

    </div>
  )
}
