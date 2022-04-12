import React from "react";
import { OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import styled from "styled-components";

const SDivComun = styled.div<{ rareza: string }>`
  width: ${100 / 6}%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #98a1b9;
  background-color: #ffdee9;
  background-image: ${({ rareza }) => {
    switch (rareza) {
      case "Comun":
        return `linear-gradient(0deg, #AAAAAA 0%, #ffffff 100%);`;
      case "Poco comun":
        return `linear-gradient(0deg, #A2D2FF 0%, #D1E8E4 100%);`;
      case "Rara":
        return `linear-gradient(0deg, #b5a3db 0%, #e0e0e0 100%);`;
      case "Epica":
        return `linear-gradient(0deg, #ddb2e2 0%, #ecdcec 100%);`;
      case "Epica Singular":
        return `linear-gradient(0deg, #FFB4B4 0%, #FFE8E8 100%);`;
      case "Legendaria":
        return `linear-gradient(0deg, #e6e99d 0%, #F8EFD4 100%);`;
      default:
        return `linear-gradient(0deg, #d3fcff 0%, #feffff 100%);`;
    }
  }};
`;
const STitulo = styled.div`
  font-family: Righteous;
  text-align: center;
  width: 100%;
`;

const SContenedorClasificacion = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
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
        {[
          "Comun",
          "Poco comun",
          "Rara",
          "Epica",
          "Epica Singular",
          "Legendaria",
        ].map((tipo) => {
          return (
            <OverlayTrigger
              key={tipo}
              placement={"bottom"}
              overlay={<Tooltip id={`tooltip-${tipo}`}>{tipo}</Tooltip>}>
              <SDivComun rareza={tipo}></SDivComun>
            </OverlayTrigger>
          );
        })}
      </Row>
    </SContenedorClasificacion>
  );
};

export default Clasificacion;
