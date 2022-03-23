import React, { FC } from "react";
import { Eliminar } from "../Eliminar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import {
  SImg,
  SCol,
  SContenedorImagen,
  SContenedorTipo,
  SDivIdentificador,
  SDivTitulo,
  SRow,
  StyledCard,
  SDivTipos,
} from "./StylosCardsPokemon";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";
import { normalize } from "path/win32";

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
  var sumatoriaCaracteristicas =
    pokemon.Ataque +
    pokemon.Defensa +
    pokemon.EspecialAtaque +
    pokemon.EspecialDefensa +
    pokemon.Velocidad +
    pokemon.Vida;
  return (
    <Col>
      <StyledCard rareza={pokemon.Rareza}>
        <Card.Body>
          <SDivIdentificador>{pokemon.Id}</SDivIdentificador>
          <SDivTitulo>{pokemon.Nombre}</SDivTitulo>
          <SDivTitulo>{pokemon.Nombre}</SDivTitulo>
          <Eliminar
            eliminarPokemon={eliminarPokemon}
            pokemonAEliminar={pokemon}></Eliminar>
          <SContenedorImagen>
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
            <SCol>Ataque: {pokemon.Ataque}</SCol>
            <SCol>Def. Especial: {pokemon.EspecialDefensa}</SCol>
          </SRow>
          <SRow>
            <SCol>Defensa: {pokemon.Defensa}</SCol>
            <SCol>Atk. Especial: {pokemon.EspecialAtaque}</SCol>
          </SRow>
          <SRow>
            <SCol>Vida: {pokemon.Vida}</SCol>
            <SCol>Velocidad: {pokemon.Velocidad}</SCol>
          </SRow>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
