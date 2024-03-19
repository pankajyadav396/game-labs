import React from 'react'
import Commonbtn2 from './common/Commonbtn2'
import { Star } from './Icon'
import flag1 from '../assets/images/png/indiafleg.png'
import flag2 from '../assets/images/png/australiafleg.png'
import flag3 from '../assets/images/png/ukfleg.png'
import logo from '../assets/images/png/roadmap-img.png'

const Roadmap = () => {
    return (
        <>
            <div className='my-md-5 position-relative z-1 py-5' id='Roadmap'>
                <p className="fs-xxl text-center z-n1 position-sm-absolute animater ps-3 color-black2 fw-bold ff-roboto lh-224">Roadmap</p>
                <div className='container-lg max-w-1140'>
                    <div className='text-center mt-5 pt-3'>
                        <Commonbtn2 text="ROADMAP" />
                    </div>
                    <h2 className='fs-lg lh-62 fw-700 text-center fw-bold ff-roboto pb-2 color-white mt-3 mb-4 mb-md-5 pb-lg-3'>Milestones and markers</h2>
                    <div className='row justify-content-between position-relative pt-150'>
                        <div className=' d-none d-sm-block'><img src={logo} alt="logo" className='position-absolute max-w-100 top-0' />
                            <div className='roadmap-line position-absolute'></div>
                        </div>
                        <div className='col-sm-6 col-md-5 d-flex align-items-center justify-content-center flex-column gap-495'>
                            <div className='col-12 p-0'>
                                <div className='roadmap-card'>
                                    <div className='roadmapcard-1 d-flex z-1 align-items-center flex-column justify-content-center position-relative'>
                                        <div className='red-ellipse z-n1 position-absolute'></div>
                                        <p className=' color-gradient mb-1 text-center fs-md ff-roboto'>Nov 2014</p>
                                        <p className=' color-grey2 text-center fs-md ff-roboto'>Hired our first employee</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 p-0'>
                                <div className='roadmap-card'>
                                    <div className='roadmapcard-1 d-flex z-1 align-items-center flex-column justify-content-center position-relative'>
                                        <div className='red-ellipse z-n1 position-absolute'></div>
                                        <p className=' color-gradient mb-1 text-center fs-md ff-roboto'>Jan 2020</p>
                                        <p className=' color-grey2 text-center fs-md ff-roboto'>Hired our first employee</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6  col-md-5 mt-4 mt-sm-0 d-flex gap-495 flex-column align-items-center justify-content-center'>
                            <div className='col-12 p-0'>
                                <div className='roadmap-card'>
                                    <div className='roadmapcard-1 d-flex z-1 align-items-center flex-column justify-content-center position-relative'>
                                        <div className='red-ellipse z-n1 position-absolute'></div>
                                        <p className=' color-gradient mb-1 text-center fs-md ff-roboto'>Oct 2014</p>
                                        <p className=' color-grey2 text-center fs-md ff-roboto'>Hired our first employee</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 p-0'>
                                <div className='roadmap-card'>
                                    <div className='roadmapcard-1 d-flex z-1 align-items-center flex-column justify-content-center position-relative'>
                                        <div className='red-ellipse z-n1 position-absolute'></div>
                                        <p className=' color-gradient mb-1 text-center fs-md ff-roboto'>Oct 2015</p>
                                        <div className='d-flex gap-3 align-items-center ff-roboto justify-content-center'> <p className='m-0 color-grey2 text-center fs-md ff-roboto'>launch On </p>
                                            <img src={flag1} alt="flag" />
                                            <img src={flag2} alt="flag" />
                                            <img src={flag3} alt="flag" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 p-0'>
                                <div className='roadmap-card'>
                                    <div className='roadmapcard-1 d-flex z-1 align-items-center flex-column justify-content-center position-relative'>
                                        <div className='red-ellipse z-n1 position-absolute'></div>
                                        <p className=' color-gradient mb-1 text-center fs-md ff-roboto'>Oct 2014</p>
                                        <p className=' color-grey2 text-center fs-md ff-roboto'>Trusted by 10 Millions+ Users</p>
                                        <Star />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap