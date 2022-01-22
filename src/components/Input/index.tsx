import React, { InputHTMLAttributes, useState } from "react";
import { Container } from "./style";

export interface InputProps {
  label?: string;
  typeInput: string;
  idInput: string;
  nameInput: string;
  valueInput: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  typeInput,
  idInput,
  nameInput,
  valueInput,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Container>
      {label ? <label htmlFor={idInput}>{label || "Label"}</label> : ""}
      <input
        placeholder={placeholder}
        type={typeInput || "text"}
        id={idInput}
        name={nameInput}
        value={valueInput}
        onChange={onChange}
        {...props}
      />
    </Container>
  );
};

export const InputWithoutLabel: React.FC<InputProps> = ({
  label,
  typeInput,
  idInput,
  nameInput,
  valueInput,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <Container>
      <input
        placeholder={placeholder}
        type={typeInput || "text"}
        id={idInput}
        name={nameInput}
        value={valueInput}
        onChange={onChange}
        {...props}
      />
    </Container>
  );
};
