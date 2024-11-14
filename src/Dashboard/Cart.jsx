
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteItem, increaseQuantity, decreaseQuantity, selectTotalAmount} from '../reducer/addItem'; 

const Cart = () => {
  const cartItems = useSelector((state) => state.data?.cart || []); 
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();
  
  const handleClose = (itemId) => {
    dispatch(deleteItem(itemId)); // Dispatch action to remove item from cart
  };

  // Increase quantity handler
  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId)); // Dispatch action to increase quantity
  };

  // Decrease quantity handler
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId)); // Dispatch action to decrease quantity
  };

  const renderCartItems = (cartItem, index) => (
    <div className="px-4 my-5 bg-light rounded-3" key={index}>
      <div className="container py-4">
        <button
          onClick={() => handleClose(cartItem.id)} // Handle item removal
          className="btn-close float-end"
          aria-label="Close"
        ></button>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img
              src={cartItem.image}
              alt={cartItem.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{cartItem.title}</h3>
            <p className="lead fw-bold">
              ${cartItem.price} x {cartItem.quantity} = $
              {cartItem.price * cartItem.quantity}
            </p>

            {/* Quantity control */}
            <div>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleDecreaseQuantity(cartItem.id)}
              >
                -
              </button>
              <span className="mx-2">{cartItem.quantity}</span>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleIncreaseQuantity(cartItem.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const emptyCart = () => (
    <div className="px-4 my-5 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  );

  const proceedToCheckoutButton = () => (
    <div className="container">
      <div className="row">
        <NavLink
          to="/login"
          className="btn btn-outline-primary mb-5 w-25 mx-auto"
        >
          Proceed To Checkout
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
    {cartItems.length !== 0 && (
        <div className="container">
          <h4>Total Amount: ${totalAmount}</h4> {/* Display total amount */}
        </div>
      )}

      {cartItems.length === 0 && emptyCart()}
      {cartItems.length !== 0 && cartItems.map(renderCartItems)}
      {cartItems.length !== 0 && proceedToCheckoutButton()}
      
    </>
  );
};

export default Cart;
