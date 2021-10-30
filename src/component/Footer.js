import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-header'> 
                Subscribe To Our Newsletters
                </p>

                <p className='footer-subscription-text'>
                    You can unsubscribe at anytime
                </p>

                <div className='footer-input'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn-outline'>SUBSCRIBE</Button>
                    </form>

                </div>

            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us </h2>
                        {/* <Link to='/sign-up'>How it works</Link> */}
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        {/* <Link to='/'>Investors</Link> */}
                        <Link to='/'>Terms Of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Contact Us </h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Scholarships</Link>
                    </div>
            
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> Videos </h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Social Media </h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>YouTube</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
            
                </div> */}
                
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            ACUMEN 
                            {/* <i className='fab fa-typo3'/> */}
                        </Link>
                    </div>
                    <small className='website-rights'>Acumen Edu. Consult &copy; 2021 </small>
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
                        <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='YouTube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link className='social-icon-link linkedIn'
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