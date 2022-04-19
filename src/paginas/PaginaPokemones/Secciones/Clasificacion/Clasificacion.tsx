import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styled from "styled-components";
import {
  determinarColorMateSegunRareza,
  determinarColorSegunRareza,
} from "../../../../Utilidades/UtilidadesColores";

const SDivComun = styled.div<{
  rareza: string;
}>`
  position: relative;
  margin-top: 2%;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 15px;
  border: 1px solid #303030;
  background: ${({ rareza }) => determinarColorSegunRareza(rareza)};
  left: 50%;

  transform: translate(-50%);
`;
const STitulo = styled.div`
  font-family: Righteous;
  text-align: center;
  font-size: 20px;
  width: 100%;
`;

const SContenedorClasificacion = styled.div`
  position: absolute;
  width: 500px;
  height: 90px;
  align-items: center;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%);
`;

const Clasificacion = () => {
  return (
    <SContenedorClasificacion>
      <Row>
        <STitulo>Tipos</STitulo>
      </Row>
      <Row>
        {["Común", "Poco Común", "Rara"].map((tipo) => {
          return (
            <Col key={tipo}>
              <SDivComun rareza={tipo}>{tipo}</SDivComun>
            </Col>
          );
        })}
      </Row>
      <Row>
        {["Épica", "Épica Singular", "Legendaria"].map((tipo) => {
          return (
            <Col key={tipo}>
              <SDivComun rareza={tipo}>{tipo}</SDivComun>
            </Col>
          );
        })}
      </Row>
    </SContenedorClasificacion>
  );
};

export default Clasificacion;
