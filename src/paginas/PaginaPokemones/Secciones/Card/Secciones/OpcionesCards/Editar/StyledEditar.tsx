import { Card, Modal } from "react-bootstrap";
import styled from "styled-components";
import { determinarColorMateSegunRareza } from "../../../../../../../Utilidades/UtilidadesColores";
import Tarde from "../../../../../../../Multimedia/Pokemon/Editar/Tarde.jpg";

interface IProps {
  ubicacion?: string;
  seleccion?: boolean;
}
export const SButton = styled.button`
  background-color: transparent;
  position: relative;
  height: 40px;
  width: 40px;
  border: 1px solid transparent;
  border-radius: 0%;
`;

export const SImg = styled.img`
  position: relative;
  height: 30px;
  width: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
export const SDivCentrador = styled.div`
  position: relative;
  right: 0%;
  text-align: ${(p: IProps) => (p.ubicacion == "Izquierda" ? "right" : "left")};
`;
export const SDivFormLabel = styled.div`
  position: relative;
  text-align: center;
  width: 90%;
  left: 50%;
  transform: translate(-50%);
`;

export const SModalBody = styled(Modal.Body)`
  background-image: url(${Tarde});
  background-size: cover;
  padding: 2%;
  border-radius: 20px;
  margin-top: 100px;
  border: 3px solid black;
  box-shadow: 0px 0px 20px #4a9eff;
`;

export const SModal = styled(Modal)<{
  rareza: string;
}>`
  background-color: ${({ rareza }) =>
    determinarColorMateSegunRareza(rareza) + 40};
`;

export const StyledCard = styled(Card)<{
  rareza: string;
}>`
  padding: 5px;
  border-radius: 20px;
  border: 2px solid #628395;
  box-shadow: 5px 5px 10px #7d7d7d;
  background-color: ${({ rareza }) =>
    determinarColorMateSegunRareza(rareza) + 40};
`;
