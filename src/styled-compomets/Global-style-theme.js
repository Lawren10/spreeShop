import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}

body{
 width:100vw;
 overflow-x:hidden;
 font-family:'Raleway', sans-serif;
 color:#1d1f22;
 scroll-behavior:smooth;
}

::-webkit-scrollbar {
  width: 5px;
  /* background-color:black; */
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px rgba(0,0,0,0.5);
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 5px;
}
`;

export const ShopLink = styled(Link)`
  color: #1d1f22;
  text-decoration: none;
`;

export const IconWrap = styled.div`
  color: #1d1f22;
  text-decoration: none;
`;

export const LoaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: grid;
  place-content: center;
`;

const Animate = keyframes`
from {
    transform: scale(0.5);
  }

  to {
    transform:scale(1.5);
  }
`;

export const AnimateLoader = styled.div`
  animation: ${Animate} 0.5s linear alternate infinite;
`;

export const LoadingImage = styled.img`
  margin-left: "auto";
`;

export const LogoContainer = styled.div`
  position: relative;
  margin: auto;
  width: 20%;
  @media screen and (max-width: 920px) {
    width: 35%;
  }
  @media screen and (max-width: 550px) {
    width: 55%;
  }
  @media screen and (max-width: 420px) {
    width: 88%;
  }
`;

export const LogoText = styled.h1`
  font-family: "Marcellus", serif;
  letter-spacing: 2px;
  font-size: 1.8rem;
  font-weight: 600;
  color: black;
`;
export const LogoImage = styled.img`
  position: absolute;
  top: -0.5rem;
  right: -1.2rem;
  width: 2rem;
  /* filter: grayscale(); */
`;
