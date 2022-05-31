import React, { FC } from "react";
import styled from "styled-components";
import { IMovimiento } from "../../../../../../Interface/Movimientos";
import { determinarColorMateSegunRareza } from "../../../../../../Utilidades/UtilidadesColores";

const SMovimiento = styled.div<{
  rareza: string;
}>`
  width: 100px;
  height: 55px;
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
      <div>{movimiento.NombreMovimiento}</div>
      <div>{movimiento.IdMovimiento}</div>
    </SMovimiento>
  );
};

export default MovimientosVisualizacion;
