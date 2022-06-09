import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { IMovimiento } from "../../../../../../Interface/Movimientos";
import { determinarColorMateSegunRareza } from "../../../../../../Utilidades/UtilidadesColores";

const SMovimiento = styled.div<{
  rareza: string;
}>`
  width: 70%;
  background-color: ${({ rareza }) =>
    determinarColorMateSegunRareza(rareza) + `;`};
  border: 2px solid #0059ff;
  border-radius: 10px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 4px;
  height: 20px;
  clip-path: inset(0 0 0 0);
  transition: 0.5s;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${({ rareza }) => determinarColorMateSegunRareza(rareza) + `;`};
  &:hover {
    height: 70px;
    transition: 0.2s;
    align-items: center;
    color: black;
  }
`;

const SDiv = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
  font-family: "Poiret One", cursive;
  font-weight: 900;
`;

interface IProposMovimientosVisualizacion {
  movimiento: IMovimiento;
  rareza: string;
}

const MovimientosVisualizacion: FC<IProposMovimientosVisualizacion> = ({
  movimiento,
  rareza,
}) => {
  return (
    <SMovimiento rareza={rareza}>
      <Row>
        <Col>
          <SDiv>{movimiento.NombreMovimiento}</SDiv>
        </Col>
        <Col>
          <SDiv>{movimiento.IdMovimiento}</SDiv>
        </Col>
      </Row>
    </SMovimiento>
  );
};

export default MovimientosVisualizacion;
