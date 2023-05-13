import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import imgAbout from "../../assets/images/about.png";
import img1About from "../../assets/images/1-about.png";
import { BsCheckLg } from "react-icons/bs";
import bg from "../../assets/images/abt.jpg";

class About extends React.Component {
    render(){
        return (
            <Container fluid id="About">
                <Container className="py-5">
                    <Row className="py-5 align-items-center">
                        <Col md="7">
                            <img
                                src={imgAbout}
                                className="d-block rounded"
                                alt="img About"
                                width={"100%"}
                            />
                        </Col>
                        <Col md="5">
                        <div className="about">
                            <h2 style={{lineHeight:"1.5", color: '#43121D'}}>We pride ourselves on making real food from the best ingredients.</h2>
                            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <Button style={{background:`#A82D49`, borderColor:`#A82D49`}} className="rounded-0 shadow py-2 px-5 fw-bold">Learn More</Button>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="5">
                            <div className="about">
                                <h2 style={{lineHeight:"1.5",color: '#43121D'}}>We make everything by hand with the best possible ingredients.</h2>
                                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="m-0 p-0" style={{ listStyleType: 'none' }}>
                                    <li className="d-flex align-items-center"><BsCheckLg className="text-danger fs-2 me-2" /> Etiam sed dolor ac diam volutpat.</li>
                                    <li className="d-flex align-items-center"><BsCheckLg className="text-danger fs-2 me-2" />Erat volutpat aliquet imperdiet.</li>
                                    <li className="d-flex align-items-center"><BsCheckLg className="text-danger fs-2 me-2" /> purus a odio finibus bibendum.</li>
                                </ul>
                                <Button style={{background:`#A82D49`, borderColor:`#A82D49`}} className="rounded-0 shadow py-2 px-5 mt-4 fw-bold">Learn More</Button>
                            </div>
                        </Col>
                        <Col lg="7">
                            <img
                                src={img1About}
                                className="d-block rounded"
                                alt="img About"
                                width={"100%"}
                            />
                        </Col>
                    </Row>
                </Container>
                <Row className="py-4 text-center" style={{
                height : `450px`,
                backgroundImage: `url(${bg})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                }}>
                   <Col className="pt-5" style={{color: '#43121D'}} >
                    <h1 className="pt-4">When a man's stomach is full it makes no <br />difference whether he is rich or poor.</h1>
                    <p style={{lineHeight: `1.9`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br /> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                   </Col>
                </Row>
            </Container>
        )
    }
}
export default About;