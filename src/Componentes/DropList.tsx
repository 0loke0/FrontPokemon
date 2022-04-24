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
export const SDropdownButton = styled.div`
  overflow-y: scroll;
  overflow-x: auto;
  height: 142px;
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
    <Form.Select onChange={obtenerValor}>
      <SOption>{valorDefecto}</SOption>
      {lista.map((x) => (
        <SOption value={x[valorAIndicar]}>{x[valorAListar]}</SOption>
      ))}
    </Form.Select>
  );
};
