import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { DropList } from "../../../../Componentes/DropList";
import Acero from "../../../../Multimedia/Pokemon/Card/IconosTipo/Acero.png";
import Forest from "../../../../Multimedia/Pokemon/Agregar/Forest.jpg";

import FondoAgregado from "../../../../Multimedia/Pokemon/Agregar/FondoAgregado.jpg";
import { determinarColorSegunRareza } from "../../../../Utilidades/UtilidadesColores";
interface IProps {
  ubicacion?: string;
  seleccion?: boolean;
  sizeW?: number;
  sizeH?: number;
}

const simularFiltro = keyframes`
  0% {
    transform: translate(0%,0%);
  }
  50% {
    transform: translate(0%,50%);
  }
  100% {
    transform: translate(0%,0%);
  }
`;

export const SinputIdentificador = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 15px;
  display: block;
  width: ${(p: IProps) => (p.sizeW ? p.sizeW + `px` : "30px")};
  height: ${(p: IProps) => (p.sizeH ? p.sizeH + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #42a9fd;
  text-align: center;
  transform: translate(-50%, -50%);
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

export const SinputNombre = styled.input`
  position: absolute;
  top: 50%;
  left: 8%;
  font-size: 15px;
  display: block;
  width: 150px;
  height: ${(p: IProps) => (p.sizeH ? p.sizeH + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #42a9fd;
  text-align: center;
  transform: translate(-50%, -50%);
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

export const Sinput = styled.input`
  position: relative;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
  left: 50%;
  width: ${(p: IProps) => (p.sizeW ? p.sizeW + `px` : "30px")};
  height: ${(p: IProps) => (p.sizeH ? p.sizeH + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #42a9fd;
  text-align: center;
  transform: translate(-50%);
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

export const SDivFormLabel = styled.div`
  position: relative;
  text-align: center;
  width: 70%;
  left: 50%;
  transform: translate(-50%);
`;

export const SDivCentrador = styled.div`
  position: relative;
  right: 0%;
  text-align: ${(p: IProps) => (p.ubicacion == "Izquierda" ? "right" : "left")};
`;

export const SDivSolicitudImagen = styled.div`
  position: relative;
  text-align: center;
  width: 80%;
  left: 50%;
  transform: translate(-50%);
  margin-top: 10px;
`;

export const SImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  border-radius: 4%;
  transform: translate(-50%);
`;

export const SButtonGeneral = styled.button`
  background-color: transparent;
  position: relative;
  height: 60px;
  width: 60px;
  border: 1px solid transparent;
  margin-bottom: 1%;
  top: 95%;
  left: -23%;
  transform: translate(0%, -100%);
`;

export const SImgBoton = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  top: 0%;
  left: 0%;
`;

export const SImgPokebolas = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  top: 0%;
  left: 0%;
  animation: ${simularFiltro} ${(p: IProps) => p.seleccion && ` 0.5s linear `};
  &:hover {
    animation: 10s linear infinite;
  }
`;

export const STitulo = styled.p`
  position: relative;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  background-color: #18a05aa3;
  width: 30%;
  border-radius: 10px;
`;

export const SModalBody = styled(Modal.Body)`
  background-image: url(${FondoAgregado});
  background-size: cover;
  padding: 2%;
  border-radius: 20px;
  margin-top: 100px;
  border: 3px solid black;
  box-shadow: 0px 0px 20px #a0ff84;
`;

export const SModal = styled(Modal)`
  background-color: #54faa494;
`;
export const SContenedorModal = styled.div`
  background-color: transparent;
`;

export const SContenedorBotones = styled.div`
  position: relative;
  width: 300px;
  top: 10px;
  left: 100%;
  transform: translate(-85%);
  margin: 1% 0% 1% 0%;
`;

export const SButton = styled(Button)`
  margin: 2px;
`;

export const STextarea = styled.textarea`
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
`;

let fondoTipo = (idTipo: number) => {
  switch (idTipo) {
    case 1:
      return `${Acero}`;
    case 2:
      return `${Acero}`;
    case 3:
      return `${Acero}`;
    case 4:
      return `${Acero}`;
    case 5:
      return `${Acero}`;
    case 6:
      return `${Acero}`;
    case 7:
      return `${Acero}`;
    case 8:
      return `${Acero}`;
    case 9:
      return `${Acero}`;
    case 10:
      return `${Acero}`;
    case 11:
      return `${Acero}`;
    case 12:
      return `${Acero}`;
    case 13:
      return `${Acero}`;
    case 14:
      return `${Acero}`;
    case 15:
      return `${Acero}`;
    case 16:
      return `${Acero}`;
    case 17:
      return `${Acero}`;
    case 18:
      return `${Acero}`;
    default:
      return `${Acero}`;
  }
};

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
  height: 45px;
  width: 45px;
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

export const SRow = styled(Row)`
  position: relative;
  margin-top: 5px;
  margin: 1% 0% 0% 0%;
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

export const SPCarateristicas = styled.div`
  position: absolute;
  left: 50%;
  top: 23%;
  width: 300%;
  transform: translate(-50%, 0%);
  text-align: center;
  font-family: Righteous;
`;

export const SDivTipos = styled.div`
  position: absolute;
  width: 100%;
`;

export const SDivDescripcion = styled.div`
  width: 100%;
  height: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
