import React from 'react'
import Navsection from './Navsection'
import img from '../assets/images/png/heroellipse.png'
const Header = () => {
    return (
        <>
            <div className='bg-header w-100 d-flex flex-column' id='home'>
                <Navsection />
                <div className='container-lg max-w-1140 flex-grow-1 d-flex justify-content-center flex-column align-items-center'>
                    <h1 className='color-white ff-roboto fs-xl lh-86 text-center mb-3 fw-bold'>Changing the way games <span className='d-lg-block'> are made</span></h1>
                    <p className='fs-md color-white fw-normal'>Redefining the future of play</p>
                </div>
                <div className='w-100 text-center pb-5'>
                    <img src={img} alt="image" className='' />
                </div>
            </div>
        </>
    )
}

export default Header