import React from "react";
import styled from "styled-components";
import Pokebola from "../../Multimedia/Pokemon/Agregar/Pokebola.png";

const ContenedorLoader = styled.div`
  background-color: #5c6ac7a1;
  position: absolute;
  height: 897px;
  width: 100%;
  z-index: 15;
  top: 0%;
  left: 0%;
`;
const ContenedorImagen = styled.div`
  background-color: transparent;
  position: absolute;
  height: 400px;
  width: 400px;
  top: 100%;
  left: 20%;
  transform: translate(-50%, -50%);
`;
const SLoader = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 15;
  animation: lds-hourglass 3s infinite;

  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

export const Loader = () => {
  return (
    <ContenedorLoader>
      <ContenedorImagen>
        <SLoader src={Pokebola}></SLoader>
      </ContenedorImagen>
    </ContenedorLoader>
  );
};
