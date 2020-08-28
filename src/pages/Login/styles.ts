import styled, {keyframes} from 'styled-components';
import {shade} from 'polished';

import Login from '../../assets/Background.png'
import LogoImg from '../../assets/Logo.svg'

export const Container = styled.div`
height: 100vh;
display:flex;
align-items: scretch;


`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;

  h1 {
      margin-right:130px;
      font-style:bold;
      font-size:36px;
      font-weight: 600;
      line-height: 36px;
  }

  h4 {
   /*    margin-left:200px; */
      font-size: 14px;
      font-style: normal;
      line-height: 24px;
      text-align: right;
      margin-bottom: 24px;
      color: #9C98A6;
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
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
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
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${Login}) no-repeat center;
  background-size: cover;
  background-color:#8257E5;

  img {
      display:flex;
      margin-left: 100px;
      margin-top:300px;
  }

  

`;

