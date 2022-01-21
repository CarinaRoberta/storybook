import styled, { css } from "styled-components";
import { Props } from ".";

const Container = styled.button<Props>`
  cursor: pointer;
  width: ${({ width }) => `${width}em` || `10em`};
  border-radius: 0.4em;
  border: none;
  padding: 1em;
  background-color: ${({ backgroundColor }) => backgroundColor || "#7159c1"};
  color: ${({ color }) => color || "#fff"};
  transition: all 0.2s ease;
  word-break: break-all;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: grey;
      color: white;
      border-color: grey;

      :hover {
        background-color: grey;
        color: white;
        cursor: not-allowed;
      }
    `}

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export { Container };
