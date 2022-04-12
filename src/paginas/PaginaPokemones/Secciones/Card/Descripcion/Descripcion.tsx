import React, { FC, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import styled from "styled-components";

interface IPropDescription {
  detalle: string;
}

const SButton = styled(Button)`
  position: absolute;
  width: 50px;
  height: 40px;
  top: 2%;
  left: 90%;
  transform: translate(-100%);
`;

const SCollapse = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #f7f8f8;
  border-radius: 5px;
  margin-top: 5px;
  left: 50%;
  transform: translate(-50%);
  padding: 2px;
  text-align: center;
  font-family: Poiret One;
  font-weight: 800;
`;

export const Descripcion: FC<IPropDescription> = ({ detalle }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SButton
        onClick={() => setOpen(!open)}
        aria-controls='example-collapse-text'
        aria-expanded={open}></SButton>
      <Collapse in={open}>
        <SCollapse id='example-collapse-text'>{detalle}</SCollapse>
      </Collapse>
    </>
  );
};
