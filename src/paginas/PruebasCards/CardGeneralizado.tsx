import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SCardContenedor = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 5%;
  margin: 4%;
  border: 2px solid #8cd4f5;
  padding: 10px;
  box-shadow: 5px 5px 10px #a8a4a4;
`;

const SDivTitulo = styled.div`
  text-align: right;
  margin: 2%;
  font-family: monospace;
  font-size: x-large;
`;

const SContenedorGeneral = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff7f7;
`;

const SCol = styled(Col)`
  margin: 1% 4%;
  width: 20%;
  height: 40px;
  text-align: center;
  border: 1px solid #29c5f1;
  border-radius: 10%;
`;
const SContenedorImagen = styled.div`
  position: relative;
  top: 0%;
  left: 50%;
  width: 90%;
  height: 200px;
  background-color: #82d1d6;
  border-radius: 5%;
  border: 2px Solid black;
  transform: translate(-50%, 0%);
`;

const SContenedorTipo1 = styled.div`
  position: relative;
  width: 20%;
  height: 15%;
  background-color: #82d1d6;
  border-radius: 30%;
  border: 2px Solid black;
  transform: translate(-25%, -50%);
`;
const SContenedorTipo2 = styled.div`
  position: relative;
  width: 20%;
  height: 15%;
  background-color: #82d1d6;
  border-radius: 30%;
  border: 2px Solid black;
  transform: translate(80%, -150%);
`;

const CardGeneralizado = () => {
  return (
    <SContenedorGeneral>
      <SCardContenedor>
        <SDivTitulo>Titulo</SDivTitulo>
        <SContenedorImagen>
          <SContenedorTipo1></SContenedorTipo1>
          <SContenedorTipo2></SContenedorTipo2>
        </SContenedorImagen>
        <Row>
          <SCol>info</SCol>
          <SCol>info</SCol>
        </Row>
        <Row>
          <SCol>info</SCol>
          <SCol>info</SCol>
        </Row>
        <Row>
          <SCol>info</SCol>
          <SCol>info</SCol>
        </Row>
      </SCardContenedor>
    </SContenedorGeneral>
  );
};

export default CardGeneralizado;
