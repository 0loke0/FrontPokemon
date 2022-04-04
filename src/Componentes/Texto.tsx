import React, { FC } from "react";
import styled from "styled-components";

const STexto = styled.div<{ size: number }>`
  font-family: inherit;
  ${(size) => {
    return size && `font-size:${size}px`;
  }};
  font-weight: 400;
  position: absolute;
  width: 100%;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
`;

interface IPropText {
  size?: number;
  variant?: string;
  color?: string;
  texto: string;
}
export const Texto: FC<IPropText> = ({ size, variant, color, texto }) => {
  return <STexto size={size ? size : 500}>{texto}</STexto>;
};
