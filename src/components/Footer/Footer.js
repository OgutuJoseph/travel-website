import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time 
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='#'>Testimonials</Link>
                        <Link to='#'>Careers</Link>
                        <Link to='#'>Investors</Link>
                        <Link to='#'>Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='#'>Testimonials</Link>
                        <Link to='#'>Careers</Link>
                        <Link to='#'>Investors</Link>
                        <Link to='#'>Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='#'>Testimonials</Link>
                        <Link to='#'>Careers</Link>
                        <Link to='#'>Investors</Link>
                        <Link to='#'>Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='#'>Testimonials</Link>
                        <Link to='#'>Careers</Link>
                        <Link to='#'>Investors</Link>
                        <Link to='#'>Terms of Services</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-meida-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-blog'>
                            TRVL <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL © {(new Date().getFullYear())}</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank'>
                            <i className='fab fa-facebook-f' />                        
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank'>
                            <i className='fab fa-twitter' />                        
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank'>
                            <i className='fab fa-instagram' />                        
                        </Link>
                    </div>
                </div>
            </section>
        </div>    
    )
}

export default Footer