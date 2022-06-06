import React, { FC } from "react";
import Row from "react-bootstrap/Row";

import { CardPokemon } from "./Secciones/CardPokemon";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";

import Paginacion from "./Secciones/Paginacion";
import SinInformacion from "./Secciones/SinInformacion";

interface IPropCardPokemon {
  pokemonDetallado: IPokemonDetallado[] | undefined;
  tomarInformacionPaginacion: any;
  eliminarPokemon: any;
  cantidadRegistros: number | undefined;
  actualizarPagina: any;
}

const LIMITEPORPAGINA = 3;

export const ContenedorCards: FC<IPropCardPokemon> = ({
  pokemonDetallado,
  tomarInformacionPaginacion,
  eliminarPokemon,
  cantidadRegistros,
  actualizarPagina,
}) => {
  return (
    <>
      {pokemonDetallado && pokemonDetallado.length > 0 ? (
        <Row xs={1} md={LIMITEPORPAGINA} className='g-4'>
          {pokemonDetallado.map((data) => (
            <CardPokemon
              pokemon={data}
              eliminarPokemon={eliminarPokemon}
              actualizarPagina={actualizarPagina}
            />
          ))}
          <Paginacion
            cantidadRegistros={cantidadRegistros}
            tomarInformacionPaginacion={tomarInformacionPaginacion}
            limitePorPagina={LIMITEPORPAGINA}
          />
        </Row>
      ) : (
        <SinInformacion />
      )}
    </>
  );
};
