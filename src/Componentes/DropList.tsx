import React, { FC } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { Form } from "react-bootstrap";

interface IProrDropList {
  lista: any[];
  valorActual: string;
  recogerSeleccion: any;
  valorAListar: string;
  index?: number;
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
  index,
}) => {
  let obtenerValor = (event: any) => {
    console.log("infromacion Xd ", event.target.value, index);
    recogerSeleccion(event.target.value, index);
  };

  return (
    <>
      <Form.Select aria-label={valorActual} onChange={obtenerValor}>
        {lista?.map((x) => (
          <option value='1'>One</option>
        ))}
       
      </Form.Select>
      {/* <DropdownButton
        id='dropdown-basic-button'
        title={valorActual || valorActual}
        variant={valorActual ? "primary" : "link"}
        
        size='sm'>
        <SDropdownButton>
          {lista?.map((x) => (
            <Dropdown.Item
              onClick={() => {
                recogerSeleccion(x, index);
              }}>
              {x[valorAListar]}
            </Dropdown.Item>
          ))}
        </SDropdownButton> 
      </DropdownButton>*/}
    </>
  );
};
