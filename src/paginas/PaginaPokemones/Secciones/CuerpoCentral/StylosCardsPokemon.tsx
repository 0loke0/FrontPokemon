import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Row } from "react-bootstrap";

import Acero from "../../../../Multimedia/Pokemon/Card/IconosTipo/Acero.png";
import { determinarColorSegunRareza } from "../../../../Utilidades/UtilidadesColores";
// background-image: url(${Background});

let coloresTipos = (idTipo: number) => {
  switch (idTipo) {
    case 1:
      return `#9e9aa5 `;
    case 2:
      return `#309afc`;
    case 3:
      return `#a8b82c`;
    case 4:
      return `#7e6ad4`;
    case 5:
      return `#ffe199`;
    case 6:
      return `#7474ae`;
    case 7:
      return `#ed4c2f`;
    case 8:
      return `#feaaff`;
    case 9:
      return `#7adbfb`;
    case 10:
      return `#b85742`;
    case 11:
      return `#bcbbab`;
    case 12:
      return `#7ec958`;
    case 13:
      return `#de6590`;
    case 14:
      return `#bfab68`;
    case 15:
      return `#6a574c`;
    case 16:
      return `#dbbf55`;
    case 17:
      return `#a65e9a`;
    case 18:
      return `#7199e0`;
    default:
      return `#67a290`;
  }
};

export const SDivTitulo = styled.div`
  text-align: left;
  align-items: center;
  top: 50%;
  left: 10%;
  position: relative;
  height: 40px;
  font-weight: 500;
  font-size: 150%;
  transform: translate(0%, -25%);
`;

export const SDivIdentificador = styled.div`
  top: 10px;
  left: 3%;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  font-weight: 500;
  background: #6bacec;
  color: #ffffff;
`;

export const SCol = styled(Col)`
  height: 50px;
  margin: 2px 30px;
  border: 1px solid #0783ff;
  border-radius: 10px;
  background-color: transparent;
`;
export const SDivTipos = styled.div`
  position: absolute;
  width: 100%;
`;

export const SRow = styled(Row)`
  position: relative;
  margin: 2% 0% 0% 0%;
  transform: translate(0%, -10%);
  transition: 0.5s;
`;
export const SContenedorImagen = styled.div<{ colorFondo: string }>`
  margin-top: 5%;
  position: relative;
  top: 0%;
  left: 50%;
  width: 95%;
  height: 200px;
  background-color: ${({ colorFondo }) => {
    return colorFondo;
  }};
  border-radius: 5%;
  border: 3px Solid black;
  transform: translate(-50%, 0%);
`;

export const SContenedorImagenTipo = styled.img`
  width: 100%;
  height: 100%;
`;

export const SContenedorTipo = styled.div<{ tipo: number; posicion: string }>`
  position: relative;
  top: -102%;
  width: 30%;
  height: 15%;
  background-color: ${({ tipo }) => {
    return coloresTipos(tipo);
  }};

  border-radius: 50px;
  border: 1px Solid black;
  transform: ${({ posicion }) => {
    switch (posicion) {
      case "Primaria":
        return `translate(-25%, -50%)`;
      case "Secundaria":
        return `translate(80%, -150%)`;
      default:
        return `translate(0%, 0%)`;
    }
  }};
  text-align: center;
  color: #ffffff;
`;

export const StyledCard = styled(Card)<{
  rareza: string;
}>`
  padding: 5px;
  border-radius: 20px;
  border: 2px solid #628395;
  box-shadow: 5px 5px 10px #7d7d7d;
  background-color: #ffdee9;
  background-image: ${({ rareza }) => determinarColorSegunRareza(rareza)};
`;

export const SImg = styled.img`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 195px;
  border-radius: 5%;
  object-fit: contain;
`;

export const SDiv = styled.div`
  position: relative;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
`;

export const SImgCaracteristicas = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SPCarateristicas = styled.p`
  position: absolute;
  left: 50%;
  top: 23%;
  width: 100%;
  transform: translate(-50%, 0%);
  text-align: center;
  font-family: Righteous;
`;

export const SDivDescripcion = styled.div`
  width: 100%;
  height: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SDivMovimientos = styled.div`
  position: relative;
  left: 0%;
  text-align: center;
  width: 100%;
  transform: translate(0%, -50%);
  z-index: 1;
`;

export const SStats = styled.div`
  position: relative;
  top: -50%;
  height: 80%;
`;
