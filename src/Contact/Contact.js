import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact-section' id='contact'>



        <form action="https://formsubmit.co/youneslassirifreelance@gmail.com" method="POST" >
        <div className='contact-left'>
            <div className='contact-title'>Let’s work together!</div>
            <div className='contact-p'>I design and code beautifully simple things and i love what i do. Just simple like that!</div>


            <div className='contact-name'><input type="text" name="name" placeholder='First name' required/></div>
            
            <div className='contact-lastName'><input type='text' name='lastName' placeholder='Last name'/></div>


            <div className='contact-address'><input type="email" name="email" placeholder='Email address' required/></div>
            
            <div className='contact-number'><input type='number' name='phone' placeholder='Phone number'/></div>

            <div className='contact-message'><textarea name='subject' placeholder='Message'/></div>
<input type="hidden" name="_captcha" value="false"/>
<input type="hidden" name="_next" value={window.location.origin}></input>


            <div className='contact-btn'><button type='submit'>Send Message</button></div>
        </div>
        </form>


        <div className='contact-right'>


            <div className='contact-phone'><box-icon name='phone-call' color='#ffffff' size='35px' style={{ background: 'linear-gradient(to right, #8750f7 0%, #2a1454 100%)', padding: '7px', borderRadius: '50px' }}></box-icon></div>

            <div className='phone-text'>
                <div className='phone-one tt'>Phone</div>
                <div className='phone-two yy'>+212 603927836</div>
            </div>


            <div className='contact-phone'><box-icon name='envelope' color='#ffffff' size='35px' style={{ background: 'linear-gradient(to right, #8750f7 0%, #2a1454 100%)', padding: '7px', borderRadius: '50px' }}></box-icon></div>

            <div className='email-text'>
                <div className='email-one tt'>Email</div>
                <div className='email-two yy'>youneslassirifreelance@gmail.com</div>
            </div>


            <div className='contact-phone'><box-icon name='map' color='#ffffff' size='35px' style={{ background: 'linear-gradient(to right, #8750f7 0%, #2a1454 100%)', padding: '7px', borderRadius: '50px' }}></box-icon></div>

            <div className='map-text'>
                <div className='map-one tt'>Address</div>
                <div className='map-two yy'>Warne Park Street Pine,<br></br>FL 33157, New York</div>
            </div>

            
        </div>
    </div>
  )
}
