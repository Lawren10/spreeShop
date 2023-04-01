import React, { Component } from "react";
import {
  NavButton,
  CategoriesNavWrap,
  CategoriesNavLinkWrap,
  // GoToShopLink,
} from "../../styled-compomets/Navcomp-styles";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import GetParmas from "../HocComp";
import { Action } from "../../redux/storereducer";
import { connect } from "react-redux";
import { getCategory } from "../../redux/asyncQueries";
import { ShopLink } from "../../styled-compomets/Global-style-theme";

let { setActive } = Action;

export class CategoriesNav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  activate = (e) => {
    let id = e.target.id;

    this.props.setActive(id);
    this.props.getCategory(id);
  };

  render() {
    let { navCategories, Active, loc } = this.props;

    let check = loc === "/" || loc === "/cart";

    // console.log("props:", loc);
    return (
      <CategoriesNavWrap>
        <CategoriesNavLinkWrap home={check ? "true" : ""}>
          {navCategories.length &&
            navCategories.map((category, index) => {
              let { name } = category;

              return (
                <ShopLink to={`/${name}`} key={index}>
                  <NavButton
                    id={name}
                    active={`${Active === name ? Active : ""}`}
                    onClick={(e) => {
                      this.activate(e);
                    }}
                  >
                    {name}
                  </NavButton>
                </ShopLink>
              );
            })}
        </CategoriesNavLinkWrap>
        {/* <GoToShopLink
          to="/all"
          home={check ? "true" : ""}
          color={loc === "/cart" ? "true" : ""}
        >
          Shop <HiOutlineArrowNarrowRight />
        </GoToShopLink> */}
      </CategoriesNavWrap>
    );
  }
}

CategoriesNav = GetParmas(CategoriesNav);

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (name) => {
      dispatch(getCategory(name));
    },
    setActive: (name) => {
      dispatch(setActive(name));
    },
  };
};

const mapStateToProps = (state) => {
  let { navCategories, Active } = state.shop;
  return {
    navCategories,
    Active,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNav);
