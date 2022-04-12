import React from "react";
import styled from "styled-components";
import Pokebola from "../../Multimedia/Pokemon/Agregar/Pokebola.png";

const ContenedorLoader = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 15;
  top: 96%;
  left: 6%;
  transform: translate(0%, -110%);
`;
const SLoader = styled.img`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 15;
  animation: lds-hourglass 1.2s infinite;

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
      <SLoader src={Pokebola}></SLoader>
    </ContenedorLoader>
  );
};
