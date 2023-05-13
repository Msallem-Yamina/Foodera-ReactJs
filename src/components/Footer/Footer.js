import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
class Footer extends React.Component {
    
    render(){
        return(
            <footer className="text-center py-5 text-white" style={{background:`#A82D49`}}>
                <Container >
                <Row>
                    <Col>
                    <a href="/" className="me-3 text-decoration-none fs-5 text-white">Register</a>
                    <a href="/" className="me-3 text-decoration-none fs-5 text-white">Forum</a>
                    <a href="/" className="me-3 text-decoration-none fs-5 text-white">Affiliate</a>
                    <a href="/" className="text-decoration-none fs-5 text-white">FAQ</a>
                    </Col>
                </Row>
                <Row className="align-items-center pb-3">
                    <Col >
                    <a href="/facebook" className="me-3 text-decoration-none fs-3 text-white"><BsFacebook /> </a>
                    <a href="/twitter" className="me-3 text-decoration-none fs-3 text-white"><BsTwitter /> </a>
                    <a href="/youtube" className="me-3 text-decoration-none fs-3 text-white"><BsYoutube /> </a>
                    <a href="/linkedin" className="me-3 text-decoration-none fs-3 text-white"><BsLinkedin /> </a>
                    <a href="/instagram" className="text-decoration-none fs-3 text-white"><BsInstagram /> </a>
                    </Col>
                </Row>                
                <p className="m-0">© {new Date().getFullYear()} All rights reserved. <em><b>Yamina Msallem</b></em></p>
                </Container>
            </footer>
        )
    }
}
export default Footer;