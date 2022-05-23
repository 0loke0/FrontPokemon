import { Button, Col, Form, Modal } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { DropList } from "../../../../Componentes/DropList";

import Forest from "../../../../Multimedia/Pokemon/Agregar/Forest.jpg";

import FondoAgregado from "../../../../Multimedia/Pokemon/Agregar/FondoAgregado.jpg";
import FondoAgregadoModal from "../../../../Multimedia/Pokemon/Agregar/FondoAgregadoModal.png";
import Dia from "../../../../Multimedia/Pokemon/Agregar/Dia.jpg";

interface IProps {
  ubicacion?: string;
  seleccion?: boolean;
  size?: number;
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(60deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const SDivFormLabel = styled.div`
  position: relative;
  text-align: center;
  width: 70%;
  left: 50%;
  transform: translate(-50%);
`;

export const SButtonGeneral = styled.button`
  background-color: transparent;
  position: relative;
  height: 60px;
  width: 60px;
  border: 1px solid transparent;

  margin-bottom: 1%;
  top: -5%;
  left: -17%; ;
`;

export const SImgBoton = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  top: 0%;
  left: 0%;

  animation: ${rotate} ${(p: IProps) => p.seleccion && ` 0.5s linear `};
  &:hover {
    animation: 10s linear infinite;
  }
`;
export const SImgSuma = styled.img`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 50%;
  left: 75%;
`;

export const SModalBody = styled(Modal.Body)`
  background-image: url(${Dia});
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

export const SButton = styled(Button)``;
