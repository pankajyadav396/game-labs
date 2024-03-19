import React, { useState } from 'react'
import logo from '../assets/images/png/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Commonbtn from './common/Commonbtn1';
const Navsection = () => {

    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("overflow-max-hidden")
        }
        else {
            document.body.classList.remove("overflow-max-hidden")
        }
    };
    return (
        <>
            <div className='h-90 bg-skyblue w-100 d-flex align-items-center'>
                <div className='h-100 container-lg max-w-1140 justify-content-between d-flex align-items-center'>
                    <img src={logo} alt="image" className='cursor-pointer logo d-inline' />
                    <div className='d-flex gap-4 align-items-center'>
                        <ul className={`${nav ? "open" : "not-open"
                            } d-flex justify-content-center align-items-center m-0 p-0 gap-4 mobileView`}>
                            <li><a onClick={show} href="#Team" className='home color-white fs-sm fw-normal ff-roboto lh-24 text-decoration-none list-unstyled'>Our Team</a></li>
                            <li><a onClick={show} href="#Aboutus" className='home color-white fs-sm fw-normal ff-roboto lh-24 text-decoration-none list-unstyled'>About Us</a></li>
                            <li><a onClick={show} href="#Roadmap" className='home color-white fs-sm fw-normal ff-roboto lh-24 text-decoration-none list-unstyled'>Roadmap</a></li>
                            <li onClick={show} className='ms-2 d-md-none'><Commonbtn text="Contact Us" /></li>
                        </ul>
                        <li className='ms-2 d-none d-sm-block'><Commonbtn text="Contact Us" /></li>
                        <label className='cursor-pointer' id='menu' onClick={show}>
                            {nav ? (
                                <div id='menu' className='relative z-40'>
                                    <span className=' span1'></span>
                                    <span className=' span2'></span>
                                    <span className=' span3'></span>
                                </div>
                            ) : (
                                <div className='relative z-40'>
                                    <span className=' span4'></span>
                                    <span className='span5'></span>
                                    <span className=' span6'></span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navsection
