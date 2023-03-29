import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.section`
  width: 100%;
  height: auto;
`;
export const HomeTopContainer = styled.div`
  width: 100%;
  height: 140vh;
  position: relative;
  background-color: #fafafa;

  @media screen and (max-width: 920px) {
    height: 100vh;
  }

  @media screen and (max-width: 550px) {
    height: 120vh;
  }
`;

export const HomeTextContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  text-align: center;
  display: grid;
  place-items: center;
  /* pointer-events: none; */
  /* border: 1px solid red; */
`;

export const HomeTextPri = styled.h1`
  font-family: "Marcellus", serif;
  letter-spacing: 2px;
  font-size: 8rem;
  text-shadow: 0px 0px rgba(0, 0, 0);
  color: white;
  width: 80%;
  @media screen and (max-width: 920px) {
    font-size: 7rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 4rem;
  }
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const HomeButtonLink = styled(Link)`
  outline: white;
  border: 1px solid white;
  text-decoration: none;
  padding: 1.2rem 2.2rem;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  margin-top: 4rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
    transition: all 0.5s ease-in-out;
  }
`;

export const HomeButtonAltLink = styled(Link)`
  outline: black;
  border: 1px solid black;
  text-decoration: none;
  padding: 1.2rem 2.2rem;
  background: transparent;
  color: black;
  font-size: 1.1rem;
  margin-top: 4rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.5s ease-in-out;
  }
`;

export const HomeTextMinor = styled.p`
  font-size: 1.5rem;
  width: 80%;
  margin: 2rem auto 0 auto;
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 0px 0px rgba(0, 0, 0);
  color: white;
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const ItemNumberBox = styled.div`
  position: absolute;
  left: 5rem;
  top: 70%;
  /* border: 1px solid red; */
  padding: 1rem;
  @media screen and (max-width: 920px) {
    left: 5rem;
    top: 80%;
  }
  @media screen and (max-width: 550px) {
    left: 3rem;
    top: 80%;
  }
  @media screen and (max-width: 420px) {
    left: 1rem;
    top: 85%;
  }
`;

export const ItemNumberText = styled.h6`
  font-size: 2.5rem;
  font-family: "Marcellus", serif;
  /* letter-spacing: 2px; */
  text-shadow: 0px 0px rgba(0, 0, 0);
  color: white;
  @media screen and (max-width: 920px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
  /* @media screen and (max-width: 420px) {
    font-size: 1.8rem;
  } */
`;

export const HomeTextSec = styled.h2`
  font-size: 4rem;
  font-family: "Marcellus", serif;
  letter-spacing: 2px;
  text-shadow: 0px 0px rgba(0, 0, 0);
  color: white;
  @media screen and (max-width: 420px) {
    font-size: 3rem;
  }
`;

export const ChangePicIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  @media screen and (max-width: 550px) {
    width: 40%;
  }
  @media screen and (max-width: 420px) {
    width: 50%;
    right: 1.5rem;
  }
`;

export const ChangePicIcon = styled.div`
  color: white;
  font-size: 3rem;
  cursor: pointer;
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease-in;
`;

export const HomeMiddlePicBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120vh;
  @media screen and (max-width: 920px) {
    flex-direction: column;
    height: auto;
  }
`;

export const MiddlePicLeftBox = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 1s ease-in;
  @media screen and (max-width: 920px) {
    width: 100%;
    height: 100vh;
  }
`;
export const MiddlePicRightBox = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 1s ease-in;
  @media screen and (max-width: 920px) {
    width: 100%;
    height: 100vh;
  }
`;
export const HomeBottomPicBox = styled.div`
  width: 100%;
  height: 110vh;
  position: relative;
  overflow: hidden;
  transition: all 1s ease-in;
`;

export const HomeImageMiddleLeft = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in;
  ${MiddlePicLeftBox}:hover & {
    transform: scale(1.2);
    transition: all 1s ease-in;
  }
`;

export const HomeImageMiddleRight = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in;
  ${MiddlePicRightBox}:hover & {
    transform: scale(1.2);
    transition: all 1s ease-in;
  }
`;

export const HomeImageBottom = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in;
  ${HomeBottomPicBox}:hover & {
    transform: scale(1.2);
    transition: all 1s ease-in;
  }
`;
// Feature section styled component

export const FeatureSectionContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 5rem 0 10rem 0;
`;

export const FeatureSectionHeader = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 420px) {
    padding: 0 0.5rem;
    font-size: 1.8rem;
  }
`;
