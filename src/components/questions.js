import { Col, Container, Row, Card } from "react-bootstrap";
import React from "react";

class Questions extends React.Component{
    render (){
        return (
            <Container id="Fqa" className="py-5">
                <h2 className="fw-bold text-center" style={{color: '#43121D'}}>Frequently Asked Questions</h2>
                <Row className="my-5">
                    <Col md="6">
                        <Card className="border-0">
                            <Card.Body>
                                <Card.Title>~ Is Foodera Bread really baked fresh each day?</Card.Title>
                                <Card.Text className="text-secondary">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <Card.Body>
                                <Card.Title>~ Is Foodera Bread really baked fresh each day?</Card.Title>
                                <Card.Text className="text-secondary">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <Card.Body>
                                <Card.Title>~ Is Foodera Bread really baked fresh each day?</Card.Title>
                                <Card.Text className="text-secondary">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <Card.Body>
                                <Card.Title>~ Is Foodera Bread really baked fresh each day?</Card.Title>
                                <Card.Text className="text-secondary">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Questions;