import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React from "react";
class Contact extends React.Component {
    render(){
        return (
            <Container className="py-5 text-center">
                <h2 style={{color: '#43121D'}}>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h2>
                <p className="text-secnodary my-3">Limited time offer for this month. No credit card required.</p>
                <Row className="justify-content-md-center">
                    <Col md="5">
                        <Form className="my-3">
                            <Form.Group controlId="formBasicEmail" className="d-flex">
                            <Form.Control className="w-md-75 w-100 py-2 me-2 shadow-none border-secondary fw-bold rounded-0" type="email" placeholder="Enter Email Address" />
                            <Button className="px-3 fw-bold rounded-0 border-danger" style={{background:`#A82D49`}} type="submit">
                                Subscribe
                            </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
} 
export default Contact;