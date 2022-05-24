import { Modal } from "react-bootstrap";
import styled from "styled-components";
import Noche from "../../../../../../../../Multimedia/Pokemon/Eliminar/Noche.jpg";

export const STexto = styled.p`
  text-align: center;
  color: white;
`;
export const SNegrita = styled.p`
  font-weight: 900;
`;

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
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SModalBody = styled(Modal.Body)`
  background-image: url(${Noche});
  background-size: cover;
  padding: 2%;
  border-radius: 20px;
  margin-top: 100px;
  border: 3px solid black;
  box-shadow: 0px 0px 20px #0a47a3;
`;
