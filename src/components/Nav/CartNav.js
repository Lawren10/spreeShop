import React, { Component } from "react";
import {
  CartBtn,
  CartList,
  CartCount,
  CartOverLay,
  MiniCartMessage,
  CartIcon,
} from "../../styled-compomets/Navcomp-styles";
import { IconWrap } from "../../styled-compomets/Global-style-theme";
import { connect } from "react-redux";
import { getCurrencies } from "../../redux/asyncQueries";
import MiniCart from "../shopcart/Minicart";
import { Action } from "../../redux/storereducer";
import HocComp from "../HocComp";
import { Link } from "react-router-dom";

let { setShowCartOverlay, setShowCurrencyList } = Action;

export class Cart extends Component {
  handleOnClick = (e) => {
    if (this.props.showCurrencyList === true) {
      this.props.setShowCurrencyList();
    }
    if (this.props.showCartOverlay === false) {
      this.props.setShowCartOverlay();
    }
  };
  render() {
    let { itemsInCart, cart, loc } = this.props;
    let val = Object.keys(cart).length;

    let mobile = window.screen.width;
    // console.log(mobile);

    return (
      <div>
        {mobile >= 550 ? (
          <CartBtn
            onClick={(e) => {
              this.handleOnClick(e);
            }}
          >
            <IconWrap>
              <i>
                <CartIcon home={loc === "/" ? "true" : ""} />
              </i>
              <CartCount>{itemsInCart}</CartCount>
            </IconWrap>
            <CartList show={this.props.showCartOverlay}>
              {val === 0 ? (
                <MiniCartMessage id="mini">
                  <h1>Sorry Your Cart Is Empty</h1>
                </MiniCartMessage>
              ) : (
                <MiniCart />
              )}
            </CartList>
          </CartBtn>
        ) : (
          <Link to={"/cart"}>
            <CartBtn>
              <IconWrap>
                <i>
                  <CartIcon home={loc === "/" ? "true" : ""} />
                </i>
                <CartCount>{itemsInCart}</CartCount>
              </IconWrap>
            </CartBtn>
          </Link>
        )}
        <CartOverLay show={this.props.showCartOverlay} />
      </div>
    );
  }
}

Cart = HocComp(Cart);

const mapStateToProps = (state) => {
  let {
    Currencies,
    itemsInCart,
    cart,
    showCartOverlay,
    showCurrencyList,
  } = state.shop;
  return {
    currencies: Currencies,
    itemsInCart,
    cart,
    showCartOverlay,
    showCurrencyList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => {
      dispatch(getCurrencies());
    },
    setShowCartOverlay: () => {
      dispatch(setShowCartOverlay());
    },
    setShowCurrencyList: () => {
      dispatch(setShowCurrencyList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
