import styled, { keyframes } from "styled-components";
import { shade } from "polished";

import Login from "../../assets/Background.png";
import LogoImg from "../../assets/Logo.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: scretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /*  max-width: 700px; */

  h1 {
    margin-right: 130px;
    font-style: bold;
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
  }

  h4 {
    /*    margin-left:200px; */
    font-size: 14px;
    font-style: normal;
    line-height: 24px;
    text-align: right;

    color: #9c98a6;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
  > a {
    color: #8257e5;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    svg {
      margin-left: 16px;
    }
    &:hover {
      color: ${shade(0.2, "#8257E5")};
    }
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  width: 768px;
  /*    height: 820px; */
  background: url(${Login}) no-repeat center;
  background-size: contain;
  background-color: #8257e5;

  div {
    margin-left:100px
  }

  p {
    color: #D4C2FF;
    font-size: 18px;
    font-style: normal;
    max-width: 200px;
    
  }

  img {
    width: 250px;

  }
`;

export const Footer = styled.footer`
  h3 {
    font-size: 16px;
    color: #6a6180;
    margin-right: 200px;
  }

  h4 {
    font-size: 12px;
    color: #9C98A6;
    margin-right: -0.1px;
  }

  a {
    color:#8257E5;
    font-size:14px;
    text-decoration: none;
    font-family: Poppins;
  }

  img {
    color: #8257E5;
    margin-left: 400px;
    margin-top: -20px;

  }
`; 
