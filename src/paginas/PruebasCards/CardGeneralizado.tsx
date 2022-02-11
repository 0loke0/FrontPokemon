import React from "react";
import styled from "styled-components";

const SCardContenedor = styled.div`
  width: 500px;
  height: 500px;
  background-color: #d9f1f8;
  border-radius: 5%;
  margin: 4%;
  border: 2px solid #5542ff;
  padding: 1%;
  box-shadow: 10px, 10px, 18px, #ff0404;
`;

const SDivTitulo = styled.div`
  text-align: center;
  margin: 1%;
  bac
`;
const CardGeneralizado = () => {
  return (
    <SCardContenedor>
      <SDivTitulo>Titulo</SDivTitulo>
    </SCardContenedor>
  );
};

export default CardGeneralizado;
