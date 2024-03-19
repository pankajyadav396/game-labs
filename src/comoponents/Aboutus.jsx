import { Col, Row } from "react-bootstrap"
import Commonbtn2 from "./common/Commonbtn2"

export const Aboutus = () => {
    return (
        <>
            <div className="pt-lg-5" id="Aboutus">
                <div className="py-md-5 mt-5 pb-5 bg-black position-relative z-1">
                    <p className="fs-xxl text-center z-n1 animater ps-3 color-black2 fw-bold ff-roboto mt-3 lh-224">About Us</p>
                    <div className="container max-w-1140 py-md-5">
                        <Row className="py-md-5 py-3 align-items-center justify-content-between">
                            <Col md={4} className="d-flex justify-content-center flex-column align-items-center d-md-block">
                                <Commonbtn2 text="DOERS OVER TALKERS" />
                                <p className="fs-lg ff-roboto lh-62 fw-bold mt-3 color-white">Game <span className="d-md-block"> First.Always.</span></p>
                            </Col>

                            <Col md={5} className="pt-xl-5">
                                <p className="fs-sm1 color-white text-center text-md-start fw-medium mb-2 ff-roboto ">This is difficult</p>
                                <p className="opacity-75 lh-21 text-center text-md-start color-white ff-roboto fw-normal fs-sm">Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className="fw-semibold"> world-class storytelling </span>, world-building, game design, art and sound. And fun.</p>
                            </Col>

                        </Row>
                        <Row className="mt-4 pt-2">
                            <Col lg={4} md={6}>
                                <div className="h-100 bg-gradient-card h-100">
                                    <div className="card-1 h-100 pt-5">
                                        <div className="red-ellipse"></div>
                                        <p className="fs-md3 fw-bold color-white ff-roboto text-center text-lg-start">World Building</p>
                                        <p className="fw-normal ff-roboto lh-21 color-white opacity-75 text-center text-lg-start">Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mt-4 mt-md-0">
                                <div className="h-100 bg-gradient-card h-100">
                                    <div className="card-1 h-100 pt-5">
                                        <div className="red-ellipse"></div>
                                        <p className="fs-md3 fw-bold color-white ff-roboto text-center text-lg-start">Game Design</p>
                                        <p className="fw-normal ff-roboto lh-21 color-white opacity-75 text-center text-lg-start">Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mt-4 mt-lg-0">
                                <div className="h-100 bg-gradient-card h-100">
                                    <div className="card-1 h-100 pt-5">
                                        <div className="red-ellipse"></div>
                                        <p className="fs-md3 fw-bold color-white ff-roboto text-center text-lg-start">Art and Sound</p>
                                        <p className="fw-normal ff-roboto lh-21 color-white opacity-75 text-center text-lg-start">In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        </>
    )
}