import React from "react";
import {connect} from "react-redux";

import {addItem, removeItem, clearItemFromCart} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem, addItem, removeItem, clearItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <div className="name">{name}</div>
    <div className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
    </div>
    <div className="price">{price}</div>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
)}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
