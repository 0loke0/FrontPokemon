import React, { FC, useEffect, useState } from "react";
import { Eliminar } from "./OpcionesCards/Eliminar/Eliminar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import {
  SImg,
  SContenedorImagen,
  SContenedorTipo,
  SDivIdentificador,
  SDivTitulo,
  StyledCard,
  SDivTipos,
  SDivDescripcion,
} from "./StylosCardsPokemon";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";
import Vibrant from "node-vibrant";
import { OpcionesCardPokemon } from "./OpcionesCards/OpcionesCardPokemon";
import { Descripcion } from "./Descripcion/Descripcion";
import Stats from "./Stats";

interface IPropSCard {
  pokemon: IPokemonDetallado;
  eliminarPokemon: any;
}

export const SCard: FC<IPropSCard> = ({ pokemon, eliminarPokemon }) => {
  const [colorFondo, setcolorFondo] = useState<string>("predeterminado");
  useEffect(() => {
    determinarColorDominante();
  }, [pokemon]);

  var imagen =
    require(`../../../../ImagenesPokemon/${pokemon.NombreImagen}`).default;

  let determinarColorDominante = () => {
    Vibrant.from(imagen)
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
              {pokemon.Tipos.map((x, index) => (
                <SContenedorTipo
                  tipo={pokemon.Tipos[index].IdTipo}
                  posicion={index == 0 ? "Primaria" : "Secundaria"}>
                  {pokemon.Tipos[index].NombreTipo}
                </SContenedorTipo>
              ))}
            </SDivTipos>
            {<SImg src={imagen} />}
          </SContenedorImagen>
          <Stats pokemon={pokemon} />
          {pokemon.Detalle && (
            <Descripcion detalle={pokemon.Detalle} referencia={pokemon.Id} />
          )}
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
