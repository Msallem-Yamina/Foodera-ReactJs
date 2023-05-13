import { Col,Card,Button, Container, Row } from "react-bootstrap";
import React from "react";
import exp from "../assets/images/01.jpg";
import exp2 from "../assets/images/02.jpg";
import exp3 from "../assets/images/03.jpg";
class Explore extends React.Component {
    render(){
        return(
            <Container className="py-5" id="Explore">
                <Row className="text-center">
                    <h1 style={{color: '#43121D'}}>Explore Our Foods</h1>
                    <p style={{lineHeight: `1.7`, fontSize :`17px`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                </Row>
                <Row className="pt-5">
                    <Col md="6" lg="4">
                        <Card className="border-0 rounded-0">
                            <Card.Img src={exp} />
                            <Card.Body>
                                <Card.Title style={{color:`#A82D49`}}>Rainbow Vegetable Sandwich</Card.Title>
                                <Card.Subtitle  className="text-secondary">Time: 15 - 20 Minutes | Serves: 1</Card.Subtitle>
                                <Card.Text style={{color:`#A82D49`}} className="my-3 fs-3 fw-bold">
                                    $10.50 <s className="text-secondary">$11.70</s>
                                </Card.Text>
                                <hr />
                                <Button style={{background:`#A82D49`, borderColor:`#A82D49`}} className='px-5 fw-bold py-2 rounded-0'>Order Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6" lg="4">
                        <Card className="border-0 rounded-0">
                        <Card.Img src={exp2} />
                            <Card.Body>
                                <Card.Title style={{color:`#A82D49`}}>Rainbow Vegetable Sandwich</Card.Title>
                                <Card.Subtitle  className="text-secondary">Time: 15 - 20 Minutes | Serves: 1</Card.Subtitle>
                                <Card.Text style={{color:`#A82D49`}} className="my-3 fs-3 fw-bold">
                                    $10.50 <s className="text-secondary">$11.70</s>
                                </Card.Text>
                                <hr />
                                <Button style={{background:`#A82D49`, borderColor:`#A82D49`}} className='px-5 fw-bold py-2 rounded-0'>Order Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6" lg="4">
                        <Card className="border-0 rounded-0">
                            <Card.Img src={exp3} />
                            <Card.Body>
                                <Card.Title style={{color:`#A82D49`}}>Rainbow Vegetable Sandwich</Card.Title>
                                <Card.Subtitle  className="text-secondary">Time: 15 - 20 Minutes | Serves: 1</Card.Subtitle>
                                <Card.Text style={{color:`#A82D49`}} className="my-3 fs-3 fw-bold">
                                    $10.50 <s className="text-secondary">$11.70</s>
                                </Card.Text>
                                <hr />
                                <Button style={{background:`#A82D49`, borderColor:`#A82D49`}} className='px-5 fw-bold py-2 rounded-0'>Order Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Explore;