import React, { FC } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";

interface IProrDropList {
  lista: any[];
  valorActual: string;
  recogerSeleccion: any;
  valorAListar: string;
}
export const SDropdownButton = styled.div`
  overflow-y: scroll;
  overflow-x: auto;
  height: 142px;
`;
export const DropList: FC<IProrDropList> = ({
  lista,
  valorActual,
  recogerSeleccion,
  valorAListar,
}) => {
  return (
    <DropdownButton
      id='dropdown-basic-button'
      title={valorActual ? valorActual : "Tipo"}
      variant={valorActual ? "primary" : "outline-primary"}
      size='sm'>
      <SDropdownButton>
        {lista?.map((x) => (
          <Dropdown.Item
            onClick={() => {
              recogerSeleccion(x);
            }}>
            {x[valorAListar]}
          </Dropdown.Item>
        ))}
      </SDropdownButton>
    </DropdownButton>
  );
};
