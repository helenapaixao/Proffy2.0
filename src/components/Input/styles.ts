import styled, { css } from "styled-components";
import Tooltip from "../../components/Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FAFAFC;
  border-radius: 10px;
  border: 1px solid #E6E6F0;
  padding: 16px;
  width: 100%;
  align-items: center;
  display: flex;
  color: #666360;
  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      font-size: 12px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #8257e5;
    `}

input {
    flex: 1;
    background: transparent;
    border: 0;
    color:#6A6180;
    &::placeholder {
      color:    #9C98A6;
    }

    svg {
      margin-right: 16px;
      ${(props) =>
        props.isFilled &&
        css`
          color: #8257e5;
        `}
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #6A6180;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
