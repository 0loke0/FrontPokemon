import React from "react";
import styled from "styled-components";

interface IData {
  Ataque: number;
  Defensa: number;
  EspecialAtaque: number;
  EspecialDefensa: number;
  Velocidad: number;
  Vida: number;
}

const SContenedorExagono = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: red;
`;

const SContenedorExagonoInterno = styled.div<{
  gradosVar: number;
}>`
  position: absolute;
  width: 500px;
  height: 500px;
  clip-path: ${() => generadorStringClipPat()};

  background-color: blue;
`;

const SContenedorRECORTE = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
`;

const convertirDeGradosARadianes = (grados: number) => {
  var pi = Math.PI;
  return grados * (pi / 180);
};

const determinarPosicionEnX = (radianes: number, stat: number) => {
  return ((stat * Math.cos(radianes)) / 100) * 500;
};

const determinarPosicionEnY = (radianes: number, stat: number) => {
  return ((stat * Math.sin(radianes)) / 100) * 500;
};

const generadorCoordenadasPorPorcentajes = (grados: number, stat: number) => {
  var radianes = convertirDeGradosARadianes(grados);
  var PorcentajeX = determinarPosicionEnX(radianes, stat);
  var PorcentajeY = determinarPosicionEnY(radianes, stat);
  PorcentajeX = Math.abs(PorcentajeX) / 4;
  PorcentajeY = Math.abs(PorcentajeX) / 4;
  PorcentajeX = (PorcentajeX / 500) * 100;
  PorcentajeY = (PorcentajeY / 500) * 100;
  return PorcentajeX + "% " + PorcentajeY + "% ";
};

const generadorStringClipPat = () => {
  var a: string =
    "polygon(" +
    "12.500000000000004% 3.125000000000001%" +
    "," +
    "28.500000000000004% 3.125000000000001%" +
    "," +
    "12.500000000000004% 15.125000000000001%" +
    ")";
  return a;
};
//60 120 180 240 300 360/0
const PruebasStats = () => {
  const OBJETOPRUEBA: IData = {
    Ataque: 100,
    Defensa: 50,
    EspecialAtaque: 100,
    EspecialDefensa: 75,
    Velocidad: 30,
    Vida: 10,
  };
  return (
    <>
      {console.log(generadorCoordenadasPorPorcentajes(0, 100))}
      {console.log(generadorStringClipPat())}

      <SContenedorExagono />
      <SContenedorExagonoInterno gradosVar={40} />
    </>
  );
};

export default PruebasStats;
