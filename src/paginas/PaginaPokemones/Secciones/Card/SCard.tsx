import React, { useEffect, useState, FC } from "react";
import { buscarStat } from "../../../../Servicios/ServicioStats";
import { obtenerTipos } from "../../../../Servicios/ServicioTipo";
import { IPokemon, IStats } from "../../../../Interface/Pokemones";
import { obtenerRelacionTipoPokemon } from "../../../../Servicios/ServicioDirectorioTipo";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import {
  SImg,
  SCol1,
  SCol2,
  SCol3,
  SCol4,
  SCol5,
  SCol6,
  SContenedorImagen,
  SContenedorTipo1,
  SContenedorTipo2,
  SDivIdentificador,
  SDivTitulo,
  SRow,
  StyledCard,
  SDivTipos,
} from "./StylosCardsPokemon";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";

interface IPropSCard {
  pokemon: IPokemonDetallado;
}
interface IRelacionTipoPokemon {
  Id: number;
  Nombre: string;
  IdTipo: number;
  NombreTipo: string;
}

export const SCard: FC<IPropSCard> = ({ pokemon }) => {
  const [stat, setstat] = useState<IStats>();

  return (
    <Col>
      <StyledCard>
        <Card.Body>
          <SDivIdentificador>{pokemon.Pokemon.Id}</SDivIdentificador>
          <SDivTitulo>{pokemon.Pokemon.Nombre}</SDivTitulo>

          <SContenedorImagen>
            {pokemon.Imagen && (
              <SImg
                src={`data:image/jpeg;base64,${pokemon.Imagen.ArchivoImagen}`}
              />
            )}
          </SContenedorImagen>
          <SDivTipos>
            {pokemon.Tipos[0] && (
              <SContenedorTipo1 tipo={pokemon.Tipos[0].IdTipo}>
                {pokemon.Tipos[0].NombreTipo}
              </SContenedorTipo1>
            )}
            {pokemon.Tipos[1] && (
              <SContenedorTipo2 tipo={pokemon.Tipos[1].IdTipo}>
                {pokemon.Tipos[1].NombreTipo}
              </SContenedorTipo2>
            )}
          </SDivTipos>
          <SRow>
            <SCol1>Ataque: {pokemon.Stats.Ataque}</SCol1>
            <SCol2>Def. Especial: {pokemon.Stats.EspecialDefensa}</SCol2>
          </SRow>
          <SRow>
            <SCol3>Defensa: {pokemon.Stats.Defensa}</SCol3>
            <SCol4>Atk. Especial: {pokemon.Stats.EspecialAtaque}</SCol4>
          </SRow>
          <SRow>
            <SCol5>Vida: {pokemon.Stats.Vida}</SCol5>
            <SCol6>Velocidad: {pokemon.Stats.Velocidad}</SCol6>
          </SRow>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
