import React from "react";

import { useDispatch } from "react-redux";

import { Button, Card } from "react-bootstrap";
import { cartActions } from "../../../Reducers/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price, desc, prev_price, extraIngredients } = props.product;
  const dispatch = useDispatch(),
  addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        extraIngredients
      })
    );
  };
  return (
    <Card className="border-0 rounded-0">
      <Card.Img src={image01} height="300px"/>
        <Card.Body>
          <Card.Title style={{color:`#A82D49`}}>{title}</Card.Title>
            <Card.Subtitle  className="text-secondary">Time: 15 - 20 Minutes | Serves: 1</Card.Subtitle>
              <Card.Text style={{color:`#A82D49`}} className="my-2 fs-3 fw-bold">
                  ${price} <s className="text-secondary">${prev_price}</s>
              </Card.Text>
            <p className="text-truncate" style={{maxHeight: '4em'}}>{desc}</p>
            <hr />
          <Button 
            style={{background:`#A82D49`, borderColor:`#A82D49`}} 
            className='px-5 fw-bold py-2 rounded-0'
            onClick={addToCart}
            >Order Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
