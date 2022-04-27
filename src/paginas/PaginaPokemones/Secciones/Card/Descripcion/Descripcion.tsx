import React, { FC, useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import styled from "styled-components";
// import from "../src/Multimedia/Pokemon/Card/IconoDescripcion.png"
import IconoDescripcion from "../../../../../Multimedia/Pokemon/Card/IconoDescripcion.png";
interface IPropDescription {
  detalle: string;
  referencia: number;
}

const SButton = styled.button`
  background-color: transparent;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 3%;
  transform: translate(-100%);
  border: 1px solid transparent;
  border-radius: 0%;
`;

const SImg = styled.img`
  position: relative;
  height: 30px;
  width: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  font-size: 20px;
  font-family: Poiret One;
  font-weight: 700;
  transition: 0.1s;
`;

export const Descripcion: FC<IPropDescription> = ({ detalle, referencia }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [referencia]);

  return (
    <>
      <SButton onClick={() => setOpen(!open)}>
        <SImg src={IconoDescripcion} alt='IconoDescripcion' />
      </SButton>
      <Collapse in={open}>
        <SCollapse id='example-collapse-text'>{detalle}</SCollapse>
      </Collapse>
    </>
  );
};
