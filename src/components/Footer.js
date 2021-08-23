import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to stay up to date on your applications
        </p>
        <p className='footer-subscription-text'>
          Unsubscribe at anytime
        </p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' type='email' name='email' placeholder='Your email'></input>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='signUp'>How it works</Link>
            <Link to='signUp'>Testimonials</Link>
            <Link to='signUp'>The Philosophy</Link>
            <Link to='signUp'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Join Us</h2>
            <Link to='signUp'>Become a mentor</Link>
            <Link to='signUp'>Join our network</Link>
            <Link to='signUp'>Become a partner</Link>
            <Link to='signUp'>Careers</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Clanary <i className='fab fa-typo3'/>
            </Link>
          </div>
          <small className='website-rights'>Clanary © 2021</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'/>
            </Link>
            <Link className='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
            >
              <i className='fab fa-instagram'/>
            </Link>
            <Link className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
            >
              <i className='fab fa-twitter'/>
            </Link>
            <Link className='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin'/>
            </Link>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Footer
