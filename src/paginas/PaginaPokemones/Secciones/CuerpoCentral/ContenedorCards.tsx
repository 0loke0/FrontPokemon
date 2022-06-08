import React, { FC, useEffect } from "react";
import Row from "react-bootstrap/Row";

import { CardPokemon } from "./Secciones/CardPokemon";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";

import Paginacion from "./Secciones/Paginacion";
import SinInformacion from "./Secciones/SinInformacion";

interface IPropCardPokemon {
  pokemonDetallado: IPokemonDetallado[] | undefined;
  eliminarPokemon: any;
  cantidadRegistros: number | undefined;
  actualizarPagina: any;
  setseccionAConsultar: any;
  seccionAConsultar: any;
}

const LIMITEPORPAGINA = 3;

export const ContenedorCards: FC<IPropCardPokemon> = ({
  pokemonDetallado,
  eliminarPokemon,
  cantidadRegistros,
  actualizarPagina,
  setseccionAConsultar,
  seccionAConsultar,
}) => {
  return (
    <>
      {pokemonDetallado && pokemonDetallado.length > 0 ? (
        <Row xs={1} md={LIMITEPORPAGINA} className='g-5'>
          {pokemonDetallado.map((data) => (
            <CardPokemon
              pokemon={data}
              eliminarPokemon={eliminarPokemon}
              actualizarPagina={actualizarPagina}
            />
          ))}
          <Paginacion
            cantidadRegistros={cantidadRegistros}
            limitePorPagina={LIMITEPORPAGINA}
            setseccionAConsultar={setseccionAConsultar}
            seccionAConsultar={seccionAConsultar}
          />
        </Row>
      ) : (
        <SinInformacion />
      )}
    </>
  );
};
