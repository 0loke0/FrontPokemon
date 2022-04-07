import React, { FC } from "react";
import {
  SDivCantidadRegistros,
  SDivCortina,
  SImgPikachu,
  SRegistros,
  SImgPikachuManos,
} from "./StylosContadorPokemon";
import Pikachu from "../../../../Multimedia/Pokemon/ContadorPokemon/Pikachu.png";
import ManosPikachu from "../../../../Multimedia/Pokemon/ContadorPokemon/ManosPikachu.png";
interface IPropContadorPokemon {
  cantidadRegistros: number;
}
export const ContadorPokemon: FC<IPropContadorPokemon> = ({
  cantidadRegistros,
}) => {
  return (
    <SDivCantidadRegistros>
      <SImgPikachu src={Pikachu} alt='Pikachu' />
      <SDivCortina />
      <SRegistros>{cantidadRegistros}</SRegistros>
      <SImgPikachuManos src={ManosPikachu} alt='ManosPikachu' />
    </SDivCantidadRegistros>
  );
};
