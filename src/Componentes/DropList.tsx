import React, { FC } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

interface IProrDropList {
  lista: any[];
  valorActual: string;
  recogerSeleccion: any;
  valorAListar: string;
}

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
      variant={valorActual ? "primary" : "outline-primary"}>
      {lista?.map((x) => (
        <Dropdown.Item
          onClick={() => {
            recogerSeleccion(x);
          }}>
          {x[valorAListar]}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
