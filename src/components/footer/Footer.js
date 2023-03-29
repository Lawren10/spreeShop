import React, { Component } from "react";

import {
  FooterContainer,
  FooterLinkContainer,
  FooterBodyContainer,
  FooterLinkText,
  FooterBodyText,
  FooterIconContainer,
  FooterIcon,
  FooterPaymentOptionContainer,
  CopyRightText,
  PaymentIcon,
} from "../../styled-compomets/footerStyledComp";
import { ShopLink } from "../../styled-compomets/Global-style-theme";
import {
  LogoContainer,
  LogoText,
  LogoImage,
} from "../../styled-compomets/Global-style-theme";

import { Link } from "react-router-dom";

import logo from "../../asset/a-logo.png";
import pay2 from "../../asset/payment-2-1.png";
import pay3 from "../../asset/payment-3-1.png";
import pay4 from "../../asset/payment-4-1.png";
import pay5 from "../../asset/payment-5-1.png";

import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export default class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer>
          <FooterLinkContainer>
            <ShopLink to={"/"}>
              <FooterLinkText>HOME</FooterLinkText>
            </ShopLink>
            <ShopLink to={"/all"}>
              <FooterLinkText>SHOP</FooterLinkText>
            </ShopLink>
            <ShopLink to={"/cart"}>
              <FooterLinkText>CART</FooterLinkText>
            </ShopLink>
          </FooterLinkContainer>

          <FooterBodyContainer>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <LogoContainer>
                <LogoText>SPREE SHOP</LogoText>
                <LogoImage src={logo} />
              </LogoContainer>
            </Link>

            <br />
            <FooterBodyText>
              no 5 spree shop avenue off logan road, lagos,Nigeria
            </FooterBodyText>
            <FooterBodyText>+234 000 000 000</FooterBodyText>
            <FooterBodyText>support@spreeshop.com</FooterBodyText>

            <FooterIconContainer>
              <FooterIcon>
                <MdOutlineFacebook />
              </FooterIcon>
              <FooterIcon>
                <AiOutlineInstagram />
              </FooterIcon>
              <FooterIcon>
                <AiOutlineTwitter />
              </FooterIcon>
            </FooterIconContainer>

            <FooterPaymentOptionContainer>
              <PaymentIcon src={pay2} />
              <PaymentIcon src={pay3} />
              <PaymentIcon src={pay4} />
              <PaymentIcon src={pay5} />
            </FooterPaymentOptionContainer>
            <CopyRightText>@spreeshop 2023</CopyRightText>
          </FooterBodyContainer>
        </FooterContainer>
      </>
    );
  }
}
