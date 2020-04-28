import React from "react";
import {connect} from "react-redux";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartQuantity} from "../../redux/cart/cart.selectors";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({cartQuantity, toggleCartHidden}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartQuantity}</span>
  </div>
)

const mapStateToProps = (state) => ({
  cartQuantity: selectCartQuantity(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
