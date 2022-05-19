import React, { FC } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

interface IPropDropList {
  lista: any[];
  valorDefecto: string;
  recogerSeleccion: any;
  valorAListar: string;
  valorAIndicar: string;
  index?: number;
}

const SFromSelec = styled(Form.Select)`
  width: 100%;
  background-color: #3a85a890;
  color: #000000;
  margin: 2px;
`;

const SOption = styled.option`
  text-align: center;
`;
export const DropList: FC<IPropDropList> = ({
  lista,
  valorDefecto,
  recogerSeleccion,
  valorAListar,
  index,
  valorAIndicar,
}) => {
  let obtenerValor = (event: any) => {
    recogerSeleccion(event.target.value, index);
  };

  return (
    <SFromSelec onChange={obtenerValor}>
      <SOption>{valorDefecto}</SOption>
      {lista.map((x) => (
        <SOption value={x[valorAIndicar]}>{x[valorAListar]}</SOption>
      ))}
    </SFromSelec>
  );
};
