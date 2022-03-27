import React, { HTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement & ButtonProps> {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <ButtonStyled> {children} </ButtonStyled>;
}
