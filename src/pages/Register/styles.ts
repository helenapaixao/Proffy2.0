import styled, { keyframes } from "styled-components";
import { shade } from "polished";

import Login from "../../assets/Background.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.3fr 0.7fr;

  @media (min-width: 1100px) {
    grid-template-columns: 0.5fr 0.5fr;
    height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
 
    color: #6a6180;
    font-size: 16px;
    margin-bottom: 20px;
    font-style: normal;
    max-width: 213px;
    line-height: 26px;
    max-height: 52px;
  }

  h1 {
    margin-right: 120px;
    font-style: bold;
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
  }

  h4 {
    font-size: 16px;
    font-style: normal;
    line-height: 26px;
    margin-bottom: 20px;
    color: #9c98a6;
  }

  img {
    margin-bottom: 40px;
    margin-left: -320px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    height: 100%;
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
  background: url(${Login}) no-repeat center;
  background-size: contain;
  background-color: #8257e5;

  div {
    margin-left: 100px;
  }

  p {
    color: #d4c2ff;
    font-size: 18px;
    font-style: normal;
    max-width: 200px;
  }

  img {
    width: 250px;
  }
`;

