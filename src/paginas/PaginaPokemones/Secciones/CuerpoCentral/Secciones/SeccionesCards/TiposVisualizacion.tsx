import React, { FC } from "react";
import styled from "styled-components";
import { ITipos } from "../../../../../../Interface/Pokemones";
import { coloresTipos } from "../../../../../../Utilidades/UtilidadesColores";

const SContenedorTipo = styled.div<{ tipo: number; posicion: string }>`
  position: relative;
  top: -102%;
  width: 30%;
  height: 15%;
  background-color: ${({ tipo }) => {
    return coloresTipos(tipo);
  }};

  border-radius: 50px;
  border: 1px Solid black;
  transform: ${({ posicion }) => {
    switch (posicion) {
      case "Primaria":
        return `translate(-25%, -50%)`;
      case "Secundaria":
        return `translate(80%, -150%)`;
      default:
        return `translate(0%, 0%)`;
    }
  }};
  text-align: center;
  color: #ffffff;
`;

const SDivTipos = styled.div`
  position: absolute;
  width: 100%;
`;

interface IPropsTipos {
  lista: ITipos[];
}

const Tipos: FC<IPropsTipos> = ({ lista }) => {
  return (
    <SDivTipos>
      {lista.map((x, index) => (
        <SContenedorTipo
          tipo={lista[index].IdTipo}
          posicion={index == 0 ? "Primaria" : "Secundaria"}>
          {lista[index].NombreTipo}
        </SContenedorTipo>
      ))}
    </SDivTipos>
  );
};

export default Tipos;
