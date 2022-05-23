import React, { FC } from "react";
import styled from "styled-components";

export const STextarea = styled.textarea`
  border-radius: 10px;
  padding: 10px;
  margin-top: 25px;
  background-color: #ffffff5e;
`;

interface IPropsTextArea {
  asignarValor: any;
  valor: string;
  rows?: number;
  cols?: number;
  identificador: string;
  placeholder?: string;
}

const TextArea: FC<IPropsTextArea> = ({
  asignarValor,
  valor,
  rows,
  cols,
  identificador,
  placeholder,
}) => {
  return (
    <STextarea
      value={valor}
      onChange={asignarValor}
      name={identificador}
      placeholder={placeholder && placeholder}
      rows={rows || 5}
      cols={cols || 50}
    />
  );
};

export default TextArea;
