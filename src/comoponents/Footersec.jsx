import React from 'react'
import logo from '../assets/images/png/logo.png'
import { Facebook, Insta, Linkedin, Twitter } from './Icon'
const Footersec = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <div className='position-relative'>
                <div className='position-absolute ellipse-5 z-n1'></div>
                <div className='position-absolute ellipse-6 z-n1'></div>
                <div className='pt-5 mt-4 bb-1 pb-4'>
                    <div className='container max-w-1140 text-center'>
                        <img src={logo} alt="logo" className=' cursor-pointer' />
                        <div className='d-flex gap-3 mt-3 align-items-center justify-content-center'>
                            <a href="#home" className='color-white home list-unstyled text-decoration-none  opacity-75 ff-roboto fw-normal fs-sm'>Home</a>
                            <a href="#Roadmap" className='color-white home  list-unstyled text-decoration-none opacity-75 ff-roboto fw-normal fs-sm'>Roadmap</a>
                            <a href="#Team" className='color-white home list-unstyled text-decoration-none  opacity-75 ff-roboto fw-normal fs-sm'>Team</a>
                            <a href="#Aboutus" className='color-white home list-unstyled text-decoration-none  opacity-75 ff-roboto fw-normal fs-sm'>Aboutus</a>
                        </div>
                        <div className='d-flex gap-3 align-items-center justify-content-center mt-3 pt-2'>
                            <a href="https://twitter.com/?lang=en" target='_blank'><Twitter /></a>
                            <a href="https://facebook.com/?lang=en" target='_blank'><Facebook /></a>
                            <a href="https://insta.com/?lang=en" target='_blank'><Insta /></a>
                            <a href="https://Linkedin.com/?lang=en" target='_blank'><Linkedin /></a>
                        </div>
                    </div>
                </div>
                <p className='fs-sm text-center my-3 color-white opacity-75'>© <span>{date}</span> 248 Labs. All rights reserved</p>
            </div>
        </>
    )
}

export default Footersec