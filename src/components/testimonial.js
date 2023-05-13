import { Container, Carousel, Row, Image } from "react-bootstrap";
import React from "react";
import img1 from "../assets/images/1rev.jpg";

class Testimonial extends React.Component {
  render() {
    return (
      <section id="Reviews" style={{background:`#A82D49`}} className="text-center py-5">
        <h2 className="text-white fw-bold">Testimonials</h2>
        <Container className="py-5">
          <Row>
            <Carousel>
              <Carousel.Item>
                <div
                  className="d-flex justify-content-center align-items-start flex-row"
                  style={{ height: "200px" }}
                >
                  <Image
                    className="d-block"
                    width={80}
                    height={80}
                    src={img1}
                    alt="First slide"
                    roundedCircle
                  />
                  <Carousel.Caption>
                    <blockquote className="blockquote mb-0">
                      <p>
                        "I love this product! It's changed my life and I recommend it to everyone."
                      </p>
                      <footer className="blockquote-footer">
                        <cite>John Smith</cite>
                      </footer>
                    </blockquote>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-flex justify-content-center align-items-start flex-row"
                  style={{ minHeight: "200px" }}
                >
                  <Image
                    className="d-block"
                    width={80}
                    height={80}
                    src={img1}
                    alt="First slide"
                    roundedCircle
                  />
                  <Carousel.Caption>
                    <blockquote className="blockquote mb-0 mt-2">
                      <p>
                        "I love this product! It's changed my life and I recommend it to everyone."
                      </p>
                      <footer className="blockquote-footer">
                        <cite>John Smith</cite>
                      </footer>
                    </blockquote>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-flex justify-content-center align-items-start flex-row"
                  style={{ height: "200px" }}
                >
                  <Image
                    className="d-block"
                    width={80}
                    height={80}
                    src={img1}
                    alt="First slide"
                    roundedCircle
                  />
                  <Carousel.Caption>
                    <blockquote className="blockquote mb-0">
                      <p>
                        "I love this product! It's changed my life and I recommend it to everyone."
                      </p>
                      <footer className="blockquote-footer">
                        <cite>John Smith</cite>
                      </footer>
                    </blockquote>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Testimonial;