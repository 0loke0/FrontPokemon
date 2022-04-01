import React, { FC, useEffect, useState } from "react";
import { Eliminar } from "./OpcionesCards/Eliminar/Eliminar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import Vida from "../../../../Multimedia/Pokemon/Card/Vida.png";
import Velocidad from "../../../../Multimedia/Pokemon/Card/Velocidad.png";
import Espada from "../../../../Multimedia/Pokemon/Card/Espada.png";
import EscudoEspadas from "../../../../Multimedia/Pokemon/Card/EscudoEspadas.png";
import Escudo from "../../../../Multimedia/Pokemon/Card/Escudo.png";
import DualEspadas from "../../../../Multimedia/Pokemon/Card/DualEspadas.png";

import {
  SImg,
  SImgCaracteristicas,
  SCol,
  SContenedorImagen,
  SContenedorTipo,
  SDivIdentificador,
  SDivTitulo,
  SRow,
  StyledCard,
  SDivTipos,
  SPCarateristicas,
  SDiv,
} from "./StylosCardsPokemon";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";
import Vibrant from "node-vibrant";
import { Editar } from "./OpcionesCards/Editar/Editar";
import { OpcionesCardPokemon } from "./OpcionesCards/OpcionesCardPokemon";

interface IPropSCard {
  pokemon: IPokemonDetallado;
  eliminarPokemon: any;
}
interface IRelacionTipoPokemon {
  Id: number;
  Nombre: string;
  IdTipo: number;
  NombreTipo: string;
}

export const SCard: FC<IPropSCard> = ({ pokemon, eliminarPokemon }) => {
  const [colorFondo, setcolorFondo] = useState<string>("predeterminado");
  useEffect(() => {
    determinarColorDominante();
  }, [pokemon]);

  let determinarColorDominante = () => {
    Vibrant.from(pokemon.ArchivoImagen)
      .getPalette()
      .then((palette) =>
        setcolorFondo(palette.Vibrant?.hex ? palette.Vibrant?.hex : "")
      );
  };
  return (
    <Col>
      <StyledCard rareza={pokemon.Rareza}>
        <Card.Body>
          <SDivIdentificador>{pokemon.Id}</SDivIdentificador>
          <SDivTitulo>{pokemon.Nombre}</SDivTitulo>
          <OpcionesCardPokemon
            pokemon={pokemon}
            eliminarPokemon={eliminarPokemon}
            editarPokemon={() => {}}
          />
          <SContenedorImagen colorFondo={colorFondo}>
            <SDivTipos>
              {pokemon.Tipos[0] && (
                <SContenedorTipo
                  tipo={pokemon.Tipos[0].IdTipo}
                  posicion={"Primaria"}>
                  {pokemon.Tipos[0].NombreTipo}
                </SContenedorTipo>
              )}
              {pokemon.Tipos[1] && (
                <SContenedorTipo
                  tipo={pokemon.Tipos[1].IdTipo}
                  posicion={"Secundaria"}>
                  {pokemon.Tipos[1].NombreTipo}
                </SContenedorTipo>
              )}
            </SDivTipos>
            {pokemon.ArchivoImagen && <SImg src={pokemon.ArchivoImagen} />}
          </SContenedorImagen>

          <SRow>
            <SCol>
              <SDiv>
                <SImgCaracteristicas src={Espada} />
                <SPCarateristicas>{pokemon.Ataque}</SPCarateristicas>
              </SDiv>
            </SCol>
            <SCol>
              <SDiv>
                <SImgCaracteristicas src={DualEspadas} />
                <SPCarateristicas>{pokemon.EspecialAtaque}</SPCarateristicas>
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
          </SRow>
          <SRow>
            <SCol>
              <SDiv>
                <SImgCaracteristicas src={Vida} />
                <SPCarateristicas>{pokemon.Vida}</SPCarateristicas>
              </SDiv>
            </SCol>
            <SCol>
              <SDiv>
                <SImgCaracteristicas src={Velocidad} />
                <SPCarateristicas>{pokemon.Velocidad}</SPCarateristicas>
              </SDiv>
            </SCol>
          </SRow>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
