import React, { Component } from "react";
import {
  HomeContainer,
  HomeTopContainer,
  HomeTextContainer,
  HomeTextPri,
  HomeTextSec,
  ChangePicIconBox,
  ChangePicIcon,
  HomeImage,
  HomeMiddlePicBox,
  MiddlePicLeftBox,
  MiddlePicRightBox,
  HomeBottomPicBox,
  ItemNumberBox,
  ItemNumberText,
  HomeTextMinor,
  HomeButtonContainer,
  HomeButtonLink,
  HomeImageMiddleLeft,
  HomeImageMiddleRight,
  HomeImageBottom,
} from "../../styled-compomets/homeStyledComp";

import pic01 from "../../asset/pic01.webp";
import pic02 from "../../asset/pic02.webp";
import pic03 from "../../asset/pic03.jpg";
import pic04 from "../../asset/pic04.webp";
import pic05 from "../../asset/pic05.jpg";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export default class TopSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picCount: 0,
      picArray: [pic01, pic04, pic02],
    };
  }

  updatePicPos = () => {
    if (this.state.picCount === 2) {
      this.setState((state) => ({
        ...state,
        picCount: 0,
      }));
      return;
    }

    this.setState((state) => ({
      ...state,
      picCount: state.picCount + 1,
    }));
  };

  updatePicNeg = () => {
    if (this.state.picCount === 0) {
      this.setState((state) => ({
        ...state,
        picCount: 2,
      }));
      return;
    }

    this.setState((state) => ({
      ...state,
      picCount: state.picCount - 1,
    }));
  };

  componentDidMount() {
    setInterval(() => {
      this.updatePicPos();
    }, 10000);
  }

  render() {
    // console.log(this.state);
    let { picCount, picArray } = this.state;
    return (
      <>
        <HomeContainer>
          <HomeTopContainer>
            <HomeImage
              src={picArray[picCount]}
              // contain={`${picCount === 0 ? "true" : "false"}`}
            />
            <HomeTextContainer>
              <HomeTextPri>On sale 25% Discount</HomeTextPri>
              <HomeButtonContainer>
                <HomeButtonLink to={"/clothes"}>CLOTHES</HomeButtonLink>
                <HomeButtonLink to={"/tech"}>TECH</HomeButtonLink>
              </HomeButtonContainer>
            </HomeTextContainer>
            <ChangePicIconBox>
              <ChangePicIcon onClick={() => this.updatePicNeg()}>
                <HiOutlineArrowNarrowLeft />
              </ChangePicIcon>
              <ChangePicIcon onClick={() => this.updatePicPos()}>
                <HiOutlineArrowNarrowRight />
              </ChangePicIcon>
            </ChangePicIconBox>
            <ItemNumberBox>
              <ItemNumberText>{picCount + 1}</ItemNumberText>
              <ItemNumberText>/</ItemNumberText>
              <ItemNumberText>3</ItemNumberText>
            </ItemNumberBox>
          </HomeTopContainer>

          <HomeMiddlePicBox>
            <MiddlePicLeftBox>
              <HomeImageMiddleLeft src={pic04} />
              <HomeTextContainer>
                <HomeTextSec>Autum Vibes</HomeTextSec>
                <HomeTextMinor>
                  From editor’s choice with basic items, help you simple but
                  good at all
                </HomeTextMinor>
                <HomeButtonContainer>
                  <HomeButtonLink to={"/clothes"}>CLOTHES</HomeButtonLink>
                </HomeButtonContainer>
              </HomeTextContainer>
            </MiddlePicLeftBox>

            <MiddlePicRightBox>
              <HomeImageMiddleRight src={pic03} />
              <HomeTextContainer>
                <HomeTextSec>Accessories</HomeTextSec>
                <HomeTextMinor>
                  Gadgets, Shoes, Bags & Accesories, items essential for this
                  season
                </HomeTextMinor>
                <HomeButtonContainer>
                  <HomeButtonLink to={"/all"}>SHOP NOW</HomeButtonLink>
                </HomeButtonContainer>
              </HomeTextContainer>
            </MiddlePicRightBox>
          </HomeMiddlePicBox>

          <HomeBottomPicBox>
            <HomeImageBottom src={pic05} />
            <HomeTextContainer>
              <HomeTextPri>Limited Edition</HomeTextPri>
              <HomeTextMinor>
                Gadgets, Apparels, Shoes, Bags & Accesories, items essential for
                this season
              </HomeTextMinor>
              <HomeButtonContainer>
                <HomeButtonLink to={"/all"}>SEE ALL PRODUCTS</HomeButtonLink>
              </HomeButtonContainer>
            </HomeTextContainer>
          </HomeBottomPicBox>
        </HomeContainer>
      </>
    );
  }
}
