import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

export const Nav = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const NavWrapper = styled.nav`
  width: 100%;
  padding: 1.5rem 4rem 0 4rem;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background-color: transparent;
  /* box-shadow: 0 0.5rem 1rem 0 #f0f0f0; */
  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1.3rem;
  }
`;

export const LogoWrap = styled.div`
  margin-left: auto;
  @media screen and (max-width: 550px) {
    align-self: center;
    margin-left: 0;
  }
`;
export const CategoriesNavWrap = styled.section`
  @media screen and (max-width: 550px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const CategoriesNavLinkWrap = styled.div`
  display: ${({ home }) => (home ? "none" : "block")};
  @media screen and (max-width: 550px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* gap: 1rem; */
    margin-bottom: 1rem;
  }
`;

export const NavButton = styled.button`
  padding: 1.5rem;
  outline: none;
  border: none;
  border-bottom: ${({ active }) => (active ? "2px solid #5ece7b;" : "none")};
  font-family: inherit;
  color: ${({ active }) => (active ? "#5ece7b;" : "none")};
  background: transparent;
  text-transform: capitalize;
  cursor: pointer;
`;

export const NavCurrencyBtn = styled.div`
  padding: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  /* color: white; */
  font-size: 1rem;
`;

const Animate = keyframes`
0% {
    transform: translateY(-14.3rem);
    opacity:0;
  }

  90% {
    transform:translateY(5);
    opacity:0;
  }

  100%{
    transform:translateY(0);
    opacity:1;
  }
`;

const ReAnimate = keyframes`
from {
    transform: translateY(0);
    opacity:0;
  }

  to {
    transform:translateY(-22.3rem);
    opacity:0;
  }
`;

export const NavCurrencyList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: white;
  box-shadow: 0 0.1rem 1rem 0 #f0f0f0;
  list-style-type: none;
  z-index: -1;
  transform: translateY(-22.3rem);
  ${({ show }) =>
    show
      ? css`
          animation: ${Animate} 0.3s linear forwards;
        `
      : css`
          animation: ${ReAnimate} 0.5s linear forwards;
        `};
  @media screen and (max-width: 550px) {
    left: 0;
    width: 8rem;
  }
`;

export const NavCurrencyItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  text-align: center;
  color: black;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const NavCurrSelectBtn = styled.div`
  display: flex;
  font-size: 1.1rem;
  gap: 0.5rem;
  align-items: flex-end;
  color: ${({ home }) => (home ? "white" : "black")};
`;

export const CartBtn = styled(NavCurrencyBtn)``;

export const CartList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  padding: 0.2rem;
  width: 25rem;
  height: 32rem;
  background-color: white;
  border: 1px solid #f0f0f0;
  list-style-type: none;
  z-index: 5;
  display: ${({ show }) => (show === true ? "block" : "none")};
  transition: all 0.5s ease-in;
  /* @media screen and (max-width: 420px) {
    right: -1rem;
    ${CartBtn}:hover & {
      display: none;
      transition: all 0.5s ease-in;
    }
  } */
`;

export const CartOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(57, 55, 72, 0.22);
  z-index: 3;
  display: ${({ show }) => (show === true ? "block" : "none")};
  transition: all 0.5s ease-in;
  /* @media screen and (max-width: 420px) {
    ${CartBtn}:hover & {
      display: none;
      transition: all 0.5s ease-in;
    }
  } */
`;

export const CurrCartWrap = styled.section`
  display: flex;
  margin-left: auto;
  @media screen and (max-width: 550px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const CartCount = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: black;
  color: white;
  right: 0.3rem;
  top: 0.8rem;
  text-align: center;
  display: grid;
  place-content: center;
`;

export const CurrencyItem = styled.span`
  pointer-events: none;
`;

export const MiniCartMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: grid;
  place-content: center;
`;

export const CartIcon = styled(BsCart2)`
  font-size: 1.1rem;
  color: ${({ home }) => (home ? "white" : "black")};
`;

export const GoToShopLink = styled(Link)`
  outline: none;
  text-decoration: none;
  font-size: 1.6rem;
  /* font-weight: 600; */
  font-family: "Marcellus", serif;
  color: ${({ color }) => (color ? "black" : "white")};
  display: ${({ home }) => (home ? "block" : "none")};
  font-style: italic;
`;

export const LogoContainer = styled.div`
  position: relative;
  margin-left: auto;
  @media screen and (max-width: 550px) {
    align-self: center;
    margin-left: 0;
  }
`;

export const LogoText = styled.h1`
  font-size: 1.8rem;
  font-family: "Marcellus", serif;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${({ home }) => (home ? "white" : "black")};
`;
export const LogoImage = styled.img`
  position: absolute;
  top: -0.5rem;
  right: -2rem;
  width: 2rem;
  /* filter: grayscale(); */
`;
