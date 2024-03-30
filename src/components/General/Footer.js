import React from 'react'

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='Maal'>
                <div className='MaalOne'>
                    <img src="logofooter.png" className="logofooter" alt="" />
                    <div>
                        Get your business to the <br /> new heights.
                    </div>
                </div>
                <div className='MaalTwo'>
                    <h1>contact@zorway.in</h1>
                    <span>MON–FRI  9AM–6PM</span>
                </div>

                <div className='MaalThree'>
                    <div>
                        <h1>+91 8770741112</h1>
                        <span>WhatsApp or Call</span>
                    </div>
                    <div className="social">
                        <div><i class="fa-brands fa-twitter"></i></div>
                        <div><i class="fa-brands fa-instagram"></i></div>
                        <div><i class="fa-brands fa-linkedin"></i></div>
                    </div>
                </div>
            </div>
            <div className='footercloser'>
                <span className='copyright'>Copyright ©2023 Zorway. <br /> All rights reserved.</span>
                <div className='closerlist'>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/testimonial">Testimonial</Link></div>
                    <div><Link to="/blogs">Blog</Link></div>
                    <div><Link to="tel:+918770741112">Contact</Link></div>
                    <div><Link to="/service" >Pricing</Link></div>
                </div>
            </div>
        </div>

    )
}
