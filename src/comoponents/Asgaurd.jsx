import img2 from '../assets/images/webp/asgaurd-img.webp'
import play from '../assets/images/png/playbtn.png'
const Asgaurd = () => {
    return (
        <>
            <div className='py-md-5 position-relative z-1'>
                <div className='ellipse-3 position-absolute z-n1'></div>
                <div className='container max-w-1140'>
                    <h2 className='fs-lg lh-62 fw-700 text-center fw-bold ff-roboto pb-2 color-white mt-xl-5 mb-4'>A rich, inhabited, and licensable world.</h2>
                    <div className='position-relative'>
                        <img src={img2} alt="img" className='w-100' />
                        <img src={play} alt="playbtn" className='position-absolute cursor-pointer img-playbtn' />
                    </div>
                    <p className='color-white opacity-75 ff-roboto text-center mb-0 mt-3 pt-2'> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but <span className='d-lg-block'> also for film and television, events, merchandising, and partnerships.</span></p>
                </div>
            </div>
        </>
    )
}

export default Asgaurd