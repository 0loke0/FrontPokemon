import React, { FC } from "react";
import { IPokemonDetallado } from "../../../../../Interface/PokemonDetallado";
import {
  SImgCaracteristicas,
  SCol,
  SRow,
  SPCarateristicas,
  SDiv,
} from "../StylosCardsPokemon";
import Vida from "../../../../../Multimedia/Pokemon/Card/Vida.png";
import Velocidad from "../../../../../Multimedia/Pokemon/Card/Velocidad.png";
import Espada from "../../../../../Multimedia/Pokemon/Card/Espada.png";
import EscudoEspadas from "../../../../../Multimedia/Pokemon/Card/EscudoEspadas.png";
import Escudo from "../../../../../Multimedia/Pokemon/Card/Escudo.png";
import AtaqueEspecial from "../../../../../Multimedia/Pokemon/Card/AtaqueEspecial.png";

interface IPropStats {
  pokemon: IPokemonDetallado;
}
const Stats: FC<IPropStats> = ({ pokemon }) => {
  return (
    <>
      <SRow>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Espada} />
            <SPCarateristicas>{pokemon.Ataque}</SPCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={AtaqueEspecial} />
            <SPCarateristicas>{pokemon.EspecialAtaque}</SPCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Vida} />
            <SPCarateristicas>{pokemon.Vida}</SPCarateristicas>
          </SDiv>
        </SCol>
      </SRow>
      <SRow>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Escudo} />
            <SPCarateristicas>{pokemon.Defensa}</SPCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={EscudoEspadas} />
            <SPCarateristicas>{pokemon.EspecialDefensa}</SPCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Velocidad} />
            <SPCarateristicas>{pokemon.Velocidad}</SPCarateristicas>
          </SDiv>
        </SCol>
      </SRow>
    </>
  );
};

export default Stats;
