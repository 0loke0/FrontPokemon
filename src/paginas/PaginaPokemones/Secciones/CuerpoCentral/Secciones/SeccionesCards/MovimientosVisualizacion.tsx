import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { IMovimiento } from "../../../../../../Interface/Movimientos";
import { determinarColorMateSegunRareza } from "../../../../../../Utilidades/UtilidadesColores";

const SMovimiento = styled.div<{
  rareza: string;
}>`
  width: 100px;
  background-color: ${({ rareza }) =>
    determinarColorMateSegunRareza(rareza) + `;`};
  border: 2px solid #628395;
  border-radius: 10px;
  margin: 2px;
  transition: 2s;
  clip-path: inset(0 0 0 0);
  &:hover {
    height: 100%;
    transition: 1s;
  }
  padding: 2px;
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
        <Col>{movimiento.NombreMovimiento}</Col>
        <Col>{movimiento.IdMovimiento}</Col>
      </Row>
    </SMovimiento>
  );
};

export default MovimientosVisualizacion;
