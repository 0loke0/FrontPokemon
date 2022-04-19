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
      <option>{valorDefecto}</option>
      {lista.map((x) => (
        <option value={x[valorAIndicar]}>{x[valorAListar]}</option>
      ))}
    </Form.Select>
  );
};
