import { Col, Container, Row } from "react-bootstrap";
import React from "react";
class Info extends React.Component {
    render(){
        return (
            <Container fluid>
                <Row style={{background:`#A82D49`}} className="p-2 text-white justify-content-md-center">
                    <Col md="3">
                        <div className="p-4 text-center">
                            <h1 className="fs-1 fw-bold">1287+</h1>
                            <h6 className="text-uppercase" style={{ letterSpacing: '2px' }}>savings</h6>
                        </div>
                    </Col>
                    <Col md="2">
                       <div className="p-4 text-center">
                            <h1 className="fs-1 fw-bold">5786+</h1>
                            <h6 className="text-uppercase" style={{ letterSpacing: '2px' }}>photos</h6>
                        </div>
                    </Col>
                    <Col md="2">
                        <div className="p-4 text-center">
                            <h1 className="fs-1 fw-bold">1440+</h1>
                            <h6 className="text-uppercase" style={{ letterSpacing: '2px' }}>rockets</h6>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="p-4 text-center">
                            <h1 className="fs-1 fw-bold">7127+</h1>
                            <h6 className="text-uppercase" style={{ letterSpacing: '2px' }}>globes</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Info;