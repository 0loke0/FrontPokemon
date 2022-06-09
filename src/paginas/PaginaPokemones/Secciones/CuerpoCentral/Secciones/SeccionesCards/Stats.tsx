import React, { FC } from "react";
import { IPokemonDetallado } from "../../../../../../Interface/PokemonDetallado";
import {
  SImgCaracteristicas,
  SCol,
  SRow,
  SPCarateristicas,
  SDiv,
  SStats,
} from "../../StylosCardsPokemon";
import Vida from "../../../../../../Multimedia/Pokemon/Card/Vida.png";
import Velocidad from "../../../../../../Multimedia/Pokemon/Card/Velocidad.png";
import Espada from "../../../../../../Multimedia/Pokemon/Card/Espada.png";
import EscudoEspadas from "../../../../../../Multimedia/Pokemon/Card/EscudoEspadas.png";
import Escudo from "../../../../../../Multimedia/Pokemon/Card/Escudo.png";
import AtaqueEspecial from "../../../../../../Multimedia/Pokemon/Card/AtaqueEspecial.png";

interface IPropStats {
  pokemon: IPokemonDetallado;
}
interface IEstructuraStats {
  imagen: string;
  stat:
    | "Ataque"
    | "EspecialAtaque"
    | "Vida"
    | "Defensa"
    | "EspecialDefensa"
    | "Velocidad";
}

const estructuraStats: IEstructuraStats[] = [
  {
    imagen: Espada,
    stat: "Ataque",
  },
  {
    imagen: AtaqueEspecial,
    stat: "EspecialAtaque",
  },
  {
    imagen: Vida,
    stat: "Vida",
  },
  {
    imagen: Escudo,
    stat: "Defensa",
  },
  {
    imagen: EscudoEspadas,
    stat: "EspecialDefensa",
  },
  {
    imagen: Velocidad,
    stat: "Velocidad",
  },
];

const Stats: FC<IPropStats> = ({ pokemon }) => {
  return (
    <SStats>
      <SRow>
        {estructuraStats.map((x) => (
          <SCol>
            <SDiv>
              <SImgCaracteristicas src={x.imagen} />
              <SPCarateristicas>{pokemon[x.stat]}</SPCarateristicas>
            </SDiv>
          </SCol>
        ))}
      </SRow>
    </SStats>
  );
};

export default Stats;
