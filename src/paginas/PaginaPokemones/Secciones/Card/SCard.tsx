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
  const logartimoDeterminarRareza = (x: number) => {
    return 300 * Math.log10(x);
  };

  const determinarRareza = () => {
    const sumatoriaCaracteristicas =
      pokemon.Ataque +
      pokemon.Defensa +
      pokemon.EspecialAtaque +
      pokemon.EspecialDefensa +
      pokemon.Velocidad +
      pokemon.Vida;

    if (sumatoriaCaracteristicas < 100) {
      return "Comun";
    }
    if (sumatoriaCaracteristicas < 200) {
      return "Poco comun";
    }
    if (sumatoriaCaracteristicas < 300) {
      return "Rara";
    }
    if (sumatoriaCaracteristicas < 400) {
      return "Epica";
    }
    if (sumatoriaCaracteristicas < logartimoDeterminarRareza((100 / 6) * 5)) {
      return "Epica Singular";
    }
    if (sumatoriaCaracteristicas > logartimoDeterminarRareza((100 / 6) * 5)) {
      return "Legendaria";
    }
  };

  return (
    <Col>
      {console.log("rereza", logartimoDeterminarRareza((100 / 6) * 4))}
      <StyledCard rareza={determinarRareza()}>
        <Card.Body>
          <SDivIdentificador>{pokemon.Id}</SDivIdentificador>
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
