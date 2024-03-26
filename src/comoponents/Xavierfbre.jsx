import { Row, Col } from 'react-bootstrap'
import img1 from '../assets/images/webp/Xavierfabre.webp'
const Xavierfbre = () => {
    return (
        <>
            <div className='pt-md-5 pb-5 position-relative'>
                <div className='container z-1 mt-5 max-w-1140 position-relative'>
                    <div className='ellipse-2 position-absolute z-n1 opacity-75'></div>
                    <img src={img1} alt="image" className='w-100' />
                    <Row className=' justify-content-between mt-4'>
                        <Col lg={3} className="d-sm-flex gap-3 text-center text-sm-start d-block d-lg-block">
                            <div className='mb-4'>
                                <button className='domain-btn btn-shake ff-roboto color-white fs-sm1 fw-bold'>name@domain.com</button>
                            </div>
                            <div className='mb-4'>
                                <button className='btn-move btn-shake ff-roboto color-white text-nowrap fs-sm1 fw-bold'>Make Your Move</button>
                            </div>
                        </Col>
                        <Col lg={8} className='text-center text-sm-start'>
                            <p className='ff-roboto mb-2 fw-normal color-white fs-sm'> <span className='opacity-75'> Unveiled is a unique</span> collectible card game <span className='opacity-75'> in which you gain fervour for your ventures, spending it on <span className='d-lg-block'> mercenaries, spies, automata, and influence.</span></span> </p>
                            <p className='ff-roboto mb-2 fw-normal color-white fs-sm'> <span className='opacity-75'>You play a </span> rogue merchant trader <span className='opacity-75'>allied to a noble house, alongside your</span> cryptid-humanoid companions <span className=' opacity-75'>  in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers.</span> </p>
                            <p className='ff-roboto fw-normal color-white m-0 fs-sm'> What's your next move?</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Xavierfbre