import React from "react";
import bg from "../../assets/images/land.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsChevronRight, BsFillBasketFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

class Landing extends React.Component {
    render(){
        return (
            <div className="intro" 
                style={{
                height : `100vh`,
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                }}
            >
                <Container className="h-75">
                    <Row className="align-items-end h-100">
                        <Col lg="6">
                            <h1 className="fw-bold text-start" style={{fontSize: `55px`, color: '#43121D'}}>Good food choices are good investments.</h1>
                            <p className="text-secondary text-start my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                            <div className="order d-flex align-items-center">
                            <Button style={{background:`#A82D49`, borderColor:`#A82D49`}} className=" fw-bold rounded-0 me-3 py-3 px-4">
                                Order Now
                                <BsFillBasketFill className="ms-3 fs-5 position-relative"style={{bottom: `4px`}}/>
                            </Button> 
                            <Button as={NavLink} to={'/Foods'} variant="white" className="rounded-0 shadow py-3 px-4 fw-bold" style={{color: '#43121D'}}>See All Foods
                               <BsChevronRight className="ms-2"  />
                            </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}
export default Landing;