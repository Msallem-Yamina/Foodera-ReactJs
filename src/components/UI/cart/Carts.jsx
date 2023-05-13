import React from "react";

import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button, ListGroup, Offcanvas } from "react-bootstrap";

const Carts = (props) => {
  const cartProducts = useSelector((state) => state.cart.cartItems),
   totalAmount = useSelector((state) => state.cart.totalAmount);

   return (
      <ListGroup onClick={(event) => event.stopPropagation()} className="cart">
        <Offcanvas show={props.Show} placement={'end'} onHide={props.Close}>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup as="ul">
                  {cartProducts.length === 0 ? (
                          <h6 className="text-center">No item added to the cart</h6>
                        ) : (
                    cartProducts.map((item, index) => (
                      <ListGroup.Item item={item} key={index} as="li" className='border-0 ps-0'>
                          <CartItem item={item} key={index} />
                      </ListGroup.Item>
                        ))
                      )}
                </ListGroup>
            </Offcanvas.Body>
            <div className="p-3 d-flex align-items-center justify-content-between bg-danger text-white">
              <h6>
                Subtotal : <span className="fw-bold fs-4">${totalAmount}</span>
              </h6>
              <Button className="bg-white text-white border-white">
                <NavLink to={`/checkout/${totalAmount}`}
              className="text-black" style={{textDecoration: 'none'}}>
                  Checkout
                </NavLink>
              </Button>
            </div>
        </Offcanvas>
      </ListGroup>
  );
};

export default Carts;
