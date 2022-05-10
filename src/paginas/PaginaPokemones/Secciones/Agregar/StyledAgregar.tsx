import { Button, Col, Form, Modal } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { DropList } from "../../../../Componentes/DropList";

import Forest from "../../../../Multimedia/Pokemon/Agregar/Forest.jpg";

import FondoModalAgregado from "../../../../Multimedia/Pokemon/Agregar/FondoModalAgregado.png";
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

export const Sinput = styled.input`
  position: relative;
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 10px;
  padding: 0px;
  display: block;
  left: 50%;
  width: 50%;
  height: ${(p: IProps) => (p.size ? p.size + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #c9e7ff;
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
  left: 50%;
  margin-top: 10px;
  padding: 5px;
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
  top: -5%;
  left: -15%; ;
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
  background-image: url(${FondoModalAgregado});
  background-size: cover;
  background-color: black !important;
  padding: 2%;
  border-radius: 20px;
  margin-top: 100px;
`;

export const SModal = styled(Modal)`
  background-color: #032e18a2;
`;
export const SContenedorModal = styled.div`
  background-color: transparent;
`;

export const SContenedorBotones = styled.div`
  position: relative;
  width: 200px;
  top: 10px;
  left: 100%;
  transform: translate(-100%);
  margin: 2%;
`;

export const SButton = styled(Button)``;

export const STextarea = styled.textarea`
  border-radius: 20px;
`;
