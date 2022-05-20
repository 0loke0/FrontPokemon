import React, { FC } from "react";
import styled from "styled-components";

interface IPropsInputText {
  value: string;
  onChange: any;
  name: any;
  placeholder?: string;
  size?: number;
}

interface IProps {
  size?: number;
}

export const SInput = styled.input`
  position: relative;
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 10px;
  padding: 0px;
  display: block;
  left: 50%;
  width: 50%;
  height: ${(p: IProps) => (p.size ? p.size + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #c9e7ff;
  text-align: center;
  transform: translate(-50%);

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

const InputText: FC<IPropsInputText> = ({
  value,
  onChange,
  name,
  placeholder,
  size,
}) => {
  return (
    <SInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      size={size}
    />
  );
};

export default InputText;
