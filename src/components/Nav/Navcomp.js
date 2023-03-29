import React, { Component } from "react";
import {
  NavWrapper,
  CurrCartWrap,
  Nav,
  LogoContainer,
  LogoText,
  LogoImage,
} from "../../styled-compomets/Navcomp-styles";
import CategoriesNav from "./Categories-nav";
import CurrencyNav from "./Currency-nav";
import CartNav from "./CartNav";
import logo from "../../asset/a-logo.png";
import HocComp from "../HocComp";

export class Navcomp extends Component {
  render() {
    let { loc } = this.props;
    return (
      <Nav>
        <NavWrapper>
          <CategoriesNav />

          <LogoContainer to={"/"}>
            <LogoText home={loc === "/" ? "true" : ""}>SPREE SHOP</LogoText>
            <LogoImage src={logo} alt="logo" />
          </LogoContainer>

          <CurrCartWrap>
            <CurrencyNav />
            <CartNav />
          </CurrCartWrap>
        </NavWrapper>
      </Nav>
    );
  }
}

Navcomp = HocComp(Navcomp);

export default Navcomp;
