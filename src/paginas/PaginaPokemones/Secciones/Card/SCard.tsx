import React, { useEffect, useState, FC } from "react";
import { buscarStat } from "../../../../Servicios/ServicioStats";
import { ObtenerTipos } from "../../../../Servicios/ServicioTipo";
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
  return (
    <Col>
      <StyledCard>
        <Card.Body>
          <SDivIdentificador>{pokemon.Id}</SDivIdentificador>
          <SDivTitulo>{pokemon.Nombre}</SDivTitulo>

          <SContenedorImagen>
            {pokemon.ArchivoImagen && <SImg src={pokemon.ArchivoImagen} />}
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
            <SCol1>Ataque: {pokemon.Ataque}</SCol1>
            <SCol2>Def. Especial: {pokemon.EspecialDefensa}</SCol2>
          </SRow>
          <SRow>
            <SCol3>Defensa: {pokemon.Defensa}</SCol3>
            <SCol4>Atk. Especial: {pokemon.EspecialAtaque}</SCol4>
          </SRow>
          <SRow>
            <SCol5>Vida: {pokemon.Vida}</SCol5>
            <SCol6>Velocidad: {pokemon.Velocidad}</SCol6>
          </SRow>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
