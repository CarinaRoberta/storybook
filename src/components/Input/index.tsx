import React, { InputHTMLAttributes } from "react";
import { Container } from "./style";

export interface InputProps {
  label: string;
  typeInput: string;
}

export const Input: React.FC<InputProps> = ({ label, typeInput, ...props }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={typeInput || "text"} {...props} />
    </Container>
  );
};
