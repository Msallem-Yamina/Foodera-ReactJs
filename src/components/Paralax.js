import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import bg from "../assets/images/qst.jpg"

class Paralax extends React.Component{
    render (){
        return(
            <section style={{
                background: `url(${bg}) no-repeat center fixed`,
                backgroundSize: 'cover',
                }}
                className="position-relative py-5">
                <div className="overlay position-absolute w-100 h-100" style={{background :`#000`, opacity:`0.4`, top: 0, left: 0,right:0, zIndex:0}}></div>
                <Container className="py-5 position-relative" style={{zIndex:1}}>
                    <Row className="align-items-center text-white">
                        <Col md="8">
                            <h4 className="ms-md-3 fs-2 fw-bold">Baked fresh daily by bakers with passion.</h4>
                        </Col>
                        <Col md="4">
                        <Button style={{background:`#A82D49`, borderColor:`#A82D49`}} className="rounded-0 shadow py-3 px-4 fw-bold">Learn More
                        </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        )
    }
}
export default Paralax;