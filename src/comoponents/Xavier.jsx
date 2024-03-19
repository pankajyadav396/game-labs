import React from 'react'
import Commonbtn from './common/Commonbtn1'

const Xavier = () => {
    return (
        <>
            <div className='bg-gaming position-relative z-2 d-flex my-5'>
                <div className='container max-w-1140 flex-grow-1 d-flex justify-content-end align-items-center'>
                    <div className='blury-box'>
                        <p className='fw-bold mb-4 color-white fs-lg ff-roboto lh-62'>
                            Level up your gaming experience
                        </p>
                        <Commonbtn text="Play Unvilled" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Xavier