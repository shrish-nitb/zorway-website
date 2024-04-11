import React from 'react'

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='Maal'>
                <div className='MaalOne'>
                    <img src="logofooter.png" className="logofooter" alt="" />
                    <div className="footerDesc">
                        Take your business to new heights with our innovative solutions and strategic approaches.
                    </div>
                </div>
                <div className='footerItemList'>
                    <div className="footerHead">
                        Quick link
                    </div>
                    <div className="footerItem">
                        <div>Home</div>
                        <div>Testimonial</div>
                        <div>Blog</div>
                        <div>About Us</div>
                        <div>Sitemap</div>
                    </div>
                </div>
                <div className='footerItemList'>
                    <div className="footerHead">
                        Information
                    </div>
                    <div className="footerItem">
                        <div>FAQ</div>
                        <div>Privacy Policy</div>
                        <div>Terms & Condition</div>
                    </div>
                </div>
                <div className='footerItemList'>
                    <div className="footerHead">
                        Contact
                    </div>
                    <div className="footerItem contactItem">
                        <div>MANIT, Bhopal</div>
                        <div>contact@zorway.in</div>
                        <div>+91 8770741112</div>
                    </div>
                    <div class="social"><div><i class="fa-brands fa-twitter" aria-hidden="true"></i></div><div><i class="fa-brands fa-instagram" aria-hidden="true"></i></div><div><i class="fa-brands fa-linkedin" aria-hidden="true"></i></div></div>
                </div>

            </div>
            <div className='footercloser'>
                <span className='copyright'>© 2024 All rights reserved | Zorway Technologies LLP.</span>

            </div>
        </div>

    )
}
