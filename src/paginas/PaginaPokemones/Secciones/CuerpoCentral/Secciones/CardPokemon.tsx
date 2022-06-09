import React, { FC, useEffect, useState } from "react";
import Vibrant from "node-vibrant";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { IPokemonDetallado } from "../../../../../Interface/PokemonDetallado";

import { OpcionesCardPokemon } from "./SeccionesCards/OpcionesCardPokemon";
import { Descripcion } from "./SeccionesCards/Descripcion";
import Stats from "./SeccionesCards/Stats";

import {
  SImg,
  SContenedorImagen,
  SContenedorTipo,
  SDivIdentificador,
  SDivTitulo,
  StyledCard,
  SDivTipos,
  SDivMovimientos,
} from "../StylosCardsPokemon";
import MovimientosVisualizacion from "./SeccionesCards/MovimientosVisualizacion";
import { Row } from "react-bootstrap";

interface IPropSCard {
  pokemon: IPokemonDetallado;
  eliminarPokemon: any;
  actualizarPagina: any;
}

export const CardPokemon: FC<IPropSCard> = ({
  pokemon,
  eliminarPokemon,
  actualizarPagina,
}) => {
  const [colorFondo, setcolorFondo] = useState<string>("predeterminado");
  useEffect(() => {
    determinarColorDominante();
  }, [pokemon]);

  var imagen =
    require(`../../../../../ImagenesPokemon/${pokemon.NombreImagen}`).default;

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
            actualizarPagina={actualizarPagina}
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
            <SImg src={imagen && imagen} />
          </SContenedorImagen>
          <SDivMovimientos>
            <Row>
              {pokemon.Movimientos.map((x) => (
                <Col>
                  <MovimientosVisualizacion
                    rareza={pokemon.Rareza}
                    movimiento={x}
                  />
                </Col>
              ))}
            </Row>
          </SDivMovimientos>
          <Stats pokemon={pokemon} />
          {pokemon.Detalle && (
            <Descripcion detalle={pokemon.Detalle} referencia={pokemon.Id} />
          )}
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
