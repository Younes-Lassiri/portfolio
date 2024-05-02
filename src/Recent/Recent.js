import React, { useState } from 'react'
import frontGizlanding from './Images/frontGizLanding.PNG'
import m7kamaLanding from './Images/m7kamaLanding.PNG'
import './Recent.css'


export default function Recent() {
    const [clicked, setClicked] = useState('un')
  return (
    <div className='recent-section' id='works'>
        <div className='recent-title'><h1>My Recent Works</h1></div>
        <div className='recent-p'><p>We put your ideas and thus your wishes in the form of a unique web project that<br></br> inspires you and you customers.</p></div>


        <div className='recent-ul'>
                <div className={clicked === 'un'? `recent-one ${clicked}` : 'recent-one'} onClick={() => setClicked('un')}><li>All</li></div>
                <div className={clicked === 'deux'? `recent-two ${clicked}` : 'recent-two'} onClick={() => setClicked('deux')}><li>UX/UI</li></div>
                <div className={clicked === 'trois'? `recent-one ${clicked}` : 'recent-one'} onClick={() => setClicked('trois')}><li>Branding</li></div>
                <div className={clicked === 'quatre'? `recent-one ${clicked}` : 'recent-one'} onClick={() => setClicked('quatre')}><li>Apps</li></div>
        </div>
        
        <div className="project-section">

            <div className='project-section-one'>
                <div>
                    <img src={frontGizlanding}/>
                </div>

                <div className='showUp'>
                    <div className='showUp-one'>
                        <h3>Front Giz</h3>
                        The project is centered around an online store called "FrontGiz" that specializes in women's clothing.</div>
                    <div className='showUp-two'>↑</div>
                </div>
            </div>
            
            <div className='project-section-two'>
            <div>
                    <img src={m7kamaLanding}/>
                </div>

                <div className='showUpTwo'>
                    <div className='showUpTwo-one'>
                        <h3>Justice Window</h3>
                        The "Justice Window" project is an online website for the Laayoune Court of Appeal, serving as my final educational stage.</div>
                    <div className='showUpTwo-two'>↑</div>
                </div>


            </div>

        </div>

    </div>
  )
}
