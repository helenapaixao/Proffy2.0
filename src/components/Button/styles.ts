import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  from {
    transform: rotate(0deg);
  }
`;


export const Container = styled.button`
  background: #DCDCE6;
  height: 56px;
  border-radius: 8px;
  border: 0;
  padding: 16px;
  color:#9C98A6;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#04D361')};
    color:#FFFFFF;
  }
  svg {
    animation: ${spin} 2s linear infinite;
  }
`;
