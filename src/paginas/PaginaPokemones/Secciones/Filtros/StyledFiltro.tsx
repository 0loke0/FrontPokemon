import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

import Acero from "../../../../Multimedia/Pokemon/Card/IconosTipo/Acero.png";

import Tarde from "../../../../Multimedia/Pokemon/Filtro/Tarde.jpg";

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

export const SButton = styled(Button)`
  margin: 2px;
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

export const SImgFiltro = styled.img`
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

export const SModal = styled(Modal)`
  background-color: #54faa494;
  user-select: none;
`;

export const SModalBody = styled(Modal.Body)`
  background-image: url(${Tarde});
  background-size: cover;
  padding: 2%;
  border-radius: 20px;
  margin-top: 100px;
  border: 3px solid black;
  box-shadow: 0px 0px 20px #a0ff84;
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

export const SDivTitulo = styled.div`
  text-align: left;

  left: 15%;
  position: relative;
  width: 150px;
  font-weight: 500;
  font-size: 150%;
  transform: translate(-10%, 20%);
`;

export const SDivSeleccionTipos = styled.div``;
