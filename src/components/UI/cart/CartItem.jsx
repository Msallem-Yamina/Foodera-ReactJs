import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Reducers/cartSlice";

const CartItem = ( {item} ) => {
  const { id, title, price, image01, quantity, extraIngredients } = item,
  dispatch = useDispatch(),
  incrementItem = () => {
    dispatch(
        cartActions.addItem({
        id,
        title,
        price,
        image01,
        extraIngredients
      })
    );
  },
  decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  },
  deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
    // event.stopPropagation();
  };

  return (
      <div className="d-flex gap-4">
        <img src={image01} width={60} height={50} alt="product-img" />

        <div className="w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6>{title}</h6>
            <p className=" d-flex align-items-center gap-5">
              {quantity}x <span className="fw-bold text-danger">${price}</span>
            </p>
            <div className="d-flex flex-column">
            {
              extraIngredients !== undefined && (
                Array.from(extraIngredients).map(value => {
                  return(
                    <span key={value} className="m-0">
                      {value}
                    </span>
                  )
                })
                )
              }
              </div>
            <div style={{background:`rgb(251 227 227 / 83%)`}} className="d-flex align-items-center justify-content-between">
              <Button 
              variant="none" 
              className="border-0 py-0 border-transaprent fs-4 fw-bold"
              onClick={decreaseItem}
               >
                -
              </Button>
              <span className="quantity">{quantity}</span>
              <Button 
              variant="none" 
              className="border-0 border-transparent py-0 fs-4 fw-bold" 
              onClick={incrementItem}
              >
                +
              </Button>
            </div>
          </div>

          <Button
           className="text-danger fs-3 fw-bold p-0 border-white" 
           variant="none"
           onClick={deleteItem}
           >
            x
          </Button>
        </div>
      </div>
  );
};

export default CartItem;
