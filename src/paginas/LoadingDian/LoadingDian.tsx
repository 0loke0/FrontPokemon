import React from "react";
import LogoDian from "../../Multimedia/LogoDian.png";
import LogoRE from "../../Multimedia/LogoRE.jpg";

import {
  SContenedorLogoRE,
  SContenedorLogoDian,
  Scontenedor,
  SCirculos,
} from "./StyledLoading";
const LoadingDian = () => {
  return (
    <div id='cargaDian'>
      <div id='pagGeneral'></div>
      <Scontenedor>
        <SContenedorLogoRE src={LogoRE} alt='Logo' />
        <SContenedorLogoDian src={LogoDian} alt='Logo' />
        <SCirculos />
      </Scontenedor>
    </div>
  );
};

export default LoadingDian;
