import React, { FC } from "react";
import {
  SDivCantidadRegistros,
  SDivCortina,
  SImg,
  SRegistros,
} from "./StylosContadorPokemon";
import Pikachu from "../../../../Multimedia/Pokemon/ContadorPokemon/Pikachu.png";

interface IPropContadorPokemon {
  cantidadRegistros: number;
}
export const ContadorPokemon: FC<IPropContadorPokemon> = ({
  cantidadRegistros,
}) => {
  return (
    <SDivCantidadRegistros>
      <SImg src={Pikachu} alt='Logo' />
      <SDivCortina />
      <SRegistros>Pokemones {cantidadRegistros}</SRegistros>
    </SDivCantidadRegistros>
  );
};
