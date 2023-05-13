import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import bg from '../assets/images/banner-02.1d3252d3.jpg'
import { useParams } from "react-router-dom";

const Checkout = ()=>{
    const { Subtotal } = useParams();

    return (
      <section>
        <div className="w-100 position-relative" style={{
            background: `linear-gradient(rgba(33,34,69,.6980392156862745),rgba(33,34,69,.6980392156862745)),url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',}}>
            <Container className="py-5">
            <h1 className="py-3 fw-bold text-white fs-1">Checkout</h1>
            </Container>
        </div>
        <Container className="py-5">
            <Row>
                <Col md="8">
                    <h5 className="pb-2">Shipping Address</h5>
                    <Form>
                        <Form.Control className="py-3 shadow-none border-top-0 border-start-0 border-end-0 mb-3 rounded-0" type="text" placeholder="Enter your name" />
                        <Form.Control className="py-3 shadow-none border-top-0 border-start-0 border-end-0 mb-3 rounded-0" type="email" placeholder="Enter your email" />
                        <Form.Control className="py-3 shadow-none border-top-0 border-start-0 border-end-0 mb-3 rounded-0" type="number" placeholder="Phone number" />
                        <Form.Control className="py-3 shadow-none border-top-0 border-start-0 border-end-0 mb-3 rounded-0" type="text" placeholder="Country" />
                        <Form.Control className="py-3 shadow-none border-top-0 border-start-0 border-end-0 mb-3 rounded-0" type="text" placeholder="City" />
                        <Form.Control className="py-3 shadow-none border-top-0 border-start-0 border-end-0 mb-3 rounded-0" type="text" placeholder="Postal code" />
                        
                        <Button variant="danger" type="submit">
                            Payment
                        </Button>
                    </Form>
                </Col>
                <Col md="4">
                <ListGroup as="ul" className="py-3">
                    <ListGroup.Item
                        as="li"
                        style={{background:`rgb(251 227 227 / 83%)`}}
                        className="rounded-0 border-0 d-flex justify-content-between align-items-start"
                    >
                        <h5 className="m-0">
                         Subtotal:
                        </h5>
                        <h5>
                        ${Subtotal}
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        style={{background:`rgb(251 227 227 / 83%)`}}
                        className="rounded-0 border-0 d-flex justify-content-between align-items-start"
                    >
                        <h5 className="m-0">
                        Shipping:
                        </h5>
                        <h5>
                        $30
                        </h5>
                    </ListGroup.Item>
                    <hr />
                    <ListGroup.Item
                        as="li"
                        style={{background:`rgb(251 227 227 / 83%)`}}
                        className="rounded-0 border-0 d-flex justify-content-between align-items-start"
                    >
                        <h5 className="m-0">
                        Total:
                        </h5>
                        <h5>
                        $000.00
                        </h5>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </Container>
      </section>
        
    )
}
 
export default Checkout;