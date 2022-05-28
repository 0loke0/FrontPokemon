import React, { FC } from "react";
import styled from "styled-components";

interface IPropsInputText {
  value: string | number;
  onChange: any;
  name: any;
  placeholder?: string;
  sizeH?: number;
  sizeW?: number;
  position?: "absolute" | "static" | "sticky" | "relative";
  fontSize?: number;
}

interface IProps {
  sizeH?: number;
  sizeW?: number;
  position?: string;
  fontSize?: number;
}

export const SInput = styled.input`
  position: ${(p: IProps) => (p.position ? p.position : "relative")};
  font-size: ${(p: IProps) => (p.fontSize ? p.fontSize + `px` : "18px")};
  width: ${(p: IProps) => (p.sizeW ? p.sizeW + `px` : "auto")};
  height: ${(p: IProps) => (p.sizeH ? p.sizeH + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #c9e7ff;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
  z-index: 1;
`;

const InputText: FC<IPropsInputText> = ({
  value,
  onChange,
  name,
  placeholder,
  sizeH,
  sizeW,
  position,
  fontSize,
}) => {
  return (
    <SInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      sizeH={sizeH}
      sizeW={sizeW}
      position={position}
      fontSize={fontSize}
    />
  );
};

export default InputText;
