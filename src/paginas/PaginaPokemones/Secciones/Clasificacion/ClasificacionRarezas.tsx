import React, { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { IFormularioConsulta } from "../../../../Interface/PaginaPokemones";
import { determinarColorMateSegunRareza } from "../../../../Utilidades/UtilidadesColores";
interface IPropsClasificacion {
  setinfoPaginacion: any;
  infoPaginacion: IFormularioConsulta;
}

const SDivComun = styled.button<{
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
  border: 1px solid #090707;
  background: ${({ rareza }) => determinarColorMateSegunRareza(rareza) + `a1;`};
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

const Clasificacion: FC<IPropsClasificacion> = ({
  setinfoPaginacion,
  infoPaginacion,
}) => {
  const asignarTipoAFiltro = (e: any) => {
    let tempPaginacion = { ...infoPaginacion };
    tempPaginacion.Filtros.Rareza = e.target.value;
    setinfoPaginacion(tempPaginacion);
  };
  return (
    <SContenedorClasificacion>
      <Row>
        <STitulo>Tipos</STitulo>
      </Row>
      <Row md={3}>
        {[
          "Común",
          "Poco Común",
          "Rara",
          "Épica",
          "Épica Singular",
          "Legendaria",
        ].map((tipo) => {
          return (
            <Col key={tipo}>
              <SDivComun
                rareza={tipo}
                onClick={asignarTipoAFiltro}
                value={tipo}>
                {tipo}
              </SDivComun>
            </Col>
          );
        })}
      </Row>
    </SContenedorClasificacion>
  );
};

export default Clasificacion;
