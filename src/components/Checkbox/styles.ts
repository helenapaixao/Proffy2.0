
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    display: none;
    margin-right: 0.5rem;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: red;

    border-radius: 3px;
    transition: all 150ms;

    input :checked  + span {
        background-color:#04D361;
    }
  }
 label {
    font-family: Poppins;
    font-size: 14px;
    color: #9C98A6;
  }

`;