import React, { FC } from "react";
import styled from "styled-components";
import { IMovimiento } from "../../../../../../Interface/Movimientos";

const SMovimiento = styled.div``;

interface IProposMovimientosVisualizacion {
  movimiento: IMovimiento;
}

const MovimientosVisualizacion: FC<IProposMovimientosVisualizacion> = ({
  movimiento,
}) => {
  return (
    <SMovimiento>
      {movimiento.NombreMovimiento} {movimiento.IdMovimiento}
    </SMovimiento>
  );
};

export default MovimientosVisualizacion;
