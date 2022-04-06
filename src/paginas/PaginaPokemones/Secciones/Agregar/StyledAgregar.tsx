import { Col, Form } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { DropList } from "../../../../Componentes/DropList";

interface IProps {
  ubicacion?: string;
  seleccion?: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Sinput = styled.input`
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 5px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid #c9e7ff;
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

export const SDivFormLabel = styled.div`
  position: relative;
  text-align: center;
  width: 35%;
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
  margin-top: 10px;
  padding: 5px;
  border: 2px solid #d1d1d1;
  border-radius: 4%;
`;

export const SButton = styled.button`
  background-color: transparent;
  position: relative;
  height: 60px;
  width: 60px;
  border: 1px solid transparent;
  left: 1%;
  margin-bottom: 1%;
`;

export const SImgBoton = styled.img`
  position: relative;
  height: 60px;
  width: 60px;
  top: 0%;
  left: 0%;
  animation: ${rotate} ${(p: IProps) => p.seleccion && ` 10s linear infinite`};
  &:hover {
    animation: 10s linear infinite;
  }
`;
export const SImgSuma = styled.img`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
`;
