import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi repudiandae sint quae voluptatem totam perferendis corporis, labore consequatur, quis sapiente fugiat similique. Modi dolore inventore nobis voluptas commodi voluptatem!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2> COMPANY </h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
             <h2> GET IN TOUCH </h2>
             <ul>
                <li>+91 0896421645</li>
                <li> enquiry@ramanskitchen.com </li>
             </ul>
            </div>

        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024  © Raman'sKitchen.com - All Rights Reserved </p>

    </div>
  )
}

export default Footer