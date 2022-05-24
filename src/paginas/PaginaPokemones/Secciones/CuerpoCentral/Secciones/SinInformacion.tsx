import React from "react";
import styled from "styled-components";
import SinInformacionIMG from "../../../../../Multimedia/Pokemon/PaginaPokemon/SinInformacion.png";
const SContenedorTextoSinInformacion = styled.div`
  text-align: center;
  position: relative;
  left: 50%;
  width: 300px;
  height: 30px;
  transform: translate(-50%, 0);
`;
const SContenedorSinInformacion = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 300px;
  height: 30px;
  transform: translate(-50%);
  border: 2px solid #bec8e7;
  border-radius: 10px;
`;

const SImgSinInformaicon = styled.img`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 150px;
  height: 100px;
  transform: translate(-50%);
  object-fit: contain;
`;

const SinInformacion = () => {
  return (
    <>
      <SContenedorSinInformacion>
        <SImgSinInformaicon src={SinInformacionIMG} alt='SinInformacion' />
        <SContenedorTextoSinInformacion>
          Sin Informacion
        </SContenedorTextoSinInformacion>
      </SContenedorSinInformacion>
    </>
  );
};

export default SinInformacion;
