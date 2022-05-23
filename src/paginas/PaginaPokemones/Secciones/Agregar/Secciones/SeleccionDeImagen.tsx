import React, { FC } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { convertirDeImagenABase64 } from "../../../../../Utilidades/UtilidadesImagen";

interface IPropsSelecionImagen {
  asignarImagen: any;
  archivoImagen?: any;
}

export const SImg = styled.img`
  position: relative;
  left: 50%;
  margin-top: 10px;
  padding: 5px;
  border-radius: 4%;
  transform: translate(-50%);
  border: 2px solid #ffffff;
  background-color: #0a8037ab;
`;

export const SDivSolicitudImagen = styled.div`
  position: relative;
  text-align: center;
  width: 80%;
  left: 50%;
  transform: translate(-50%);
  margin-top: 10px;
`;
const SelecionDeImagen: FC<IPropsSelecionImagen> = ({
  asignarImagen,
  archivoImagen,
}) => {
  return (
    <>
      {archivoImagen ? (
        <SImg src={archivoImagen} height='200px' />
      ) : (
        <>{archivoImagen}</>
      )}
      <SDivSolicitudImagen>
        <Form.Control type='file' onChange={asignarImagen} />
      </SDivSolicitudImagen>
    </>
  );
};

export default SelecionDeImagen;
