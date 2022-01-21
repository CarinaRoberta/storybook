import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./style";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Background color
   */
  backgroundColor: string;
  /**
   * Text color
   */
  color: string;
  /**
   * Disabled button
   */
  disabled?: boolean;
  /**
   * Text button
   */
  label: string;
  /**
   * Button size in em
   */
  width: number;
}

export const Button: React.FC<Props> = ({
  label,
  backgroundColor = "#7159c1",
  color = "#fff",
  width = 10,
  ...props
}) => {
  return (
    <Container
      label={label}
      {...props}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
    >
      {label || "Button"}
    </Container>
  );
};
