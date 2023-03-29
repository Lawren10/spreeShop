import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  height: auto;
  background-color: #fafafa;
  padding: 3rem 0;
  /* filter: blur(0.5rem); #adbdbf*/
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  gap: 2rem;
`;
export const FooterBodyContainer = styled.div`
  width: 80%;
  margin: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 2rem;
  color: gray;
`;

export const FooterLinkText = styled.h6`
  font-weight: 500;
  color: gray;
  font-size: 1rem;
`;

export const FooterBodyText = styled.p`
  padding: 0.5rem;
`;

export const FooterIconContainer = styled.div`
  margin-inline: auto;
  margin-block: 1.5rem;
  width: 20%;
  /* border: 1px solid black; */
  padding: 1rem 0;
  @media screen and (max-width: 920px) {
    width: 80%;
  }
`;
export const FooterIcon = styled.i`
  padding: 0.5rem;
  margin-right: 0.5rem;
  color: gray;
  font-size: 2rem;
`;

export const FooterPaymentOptionContainer = styled.div`
  margin-inline: auto;
  margin-block: 1.5rem;
  width: 30%;
  /* border: 1px solid black; */
  padding: 1rem 0;
  @media screen and (max-width: 920px) {
    width: 80%;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const CopyRightText = styled.p`
  font-size: 0.8rem;
  color: gray;
`;

export const PaymentIcon = styled.img`
  width: 3rem;
  height: auto;
  overflow: clip;
  display: inline-block;
  margin-right: 1rem;
`;
