import React, { FC, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { DEFAULTSECCIONACONSULTAR } from "../../../../Constantes/Pokemones";
import {
  IFiltradoPaginacion,
  IFormularioConsulta,
} from "../../../../Interface/PaginaPokemones";
import { determinarColorMateSegunRareza } from "../../../../Utilidades/UtilidadesColores";
interface IPropsClasificacion {
  setseccionAConsultar: any;
  seccionAConsultar: IFormularioConsulta;
}

const SDivComun = styled.button<{
  rareza: string;
  seleccion: boolean;
}>`
  position: relative;
  margin-top: 2%;
  width: 105%;
  height: 45px;
  border-radius: 5px;  
  text-align: center;
  font-family: "Press Start 2P",  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 12px;
  border: 3px #000000;
  border-style: double dashed ;
  background: ${({ rareza }) => determinarColorMateSegunRareza(rareza) + `a1;`};
  left: 50%;
  box-shadow: ${({ seleccion, rareza }) =>
    seleccion && `0px 0px 5px ${determinarColorMateSegunRareza(rareza)}`};
  border: ${({ seleccion }) => seleccion && `none`};
  border-style: ${({ seleccion }) => seleccion && `none`};
  transform: translate(-50%);
`;

const STitulo = styled.button`
  font-family: "Press Start 2P";
  text-align: center;
  font-size: 20px;
  width: 100%;
  background-color: transparent;
  border: 0px solid transparent;
`;

const SContenedorClasificacion = styled.div`
  position: absolute;
  width: 500px;
  height: 90px;
  align-items: center;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0%);
`;

const Clasificacion: FC<IPropsClasificacion> = ({
  setseccionAConsultar,
  seccionAConsultar,
}) => {
  const [informacionFiltradoRarezas, setinformacionFiltradoRarezas] =
    useState<IFiltradoPaginacion>(seccionAConsultar.Filtros);

  useEffect(() => {
    let infoPaginacionTemp: IFormularioConsulta = { ...seccionAConsultar };
    infoPaginacionTemp.Filtros.Rareza = informacionFiltradoRarezas.Rareza;
    setseccionAConsultar(infoPaginacionTemp);
  }, [informacionFiltradoRarezas]);

  const asignarTipoAFiltro = (e: any) => {
    var rareza = e.target.value;
    if (informacionFiltradoRarezas.Rareza == rareza) {
      rareza = "";
    }
    setinformacionFiltradoRarezas({
      ...informacionFiltradoRarezas,
      Rareza: rareza,
    });
  };

  const restablecerFiltroRareza = () => {
    setinformacionFiltradoRarezas(DEFAULTSECCIONACONSULTAR.Filtros);
  };

  return (
    <SContenedorClasificacion>
      <Row>
        <STitulo onClick={restablecerFiltroRareza}>Rarezas</STitulo>
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
                seleccion={informacionFiltradoRarezas.Rareza == tipo}
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
