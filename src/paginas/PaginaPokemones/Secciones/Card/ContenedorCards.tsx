import React, { FC, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Boton from "../../../../Componentes/Boton";

import { SCard } from "./Card";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";
import SinInformacion from "../../../../Multimedia/Pokemon/PaginaPokemon/SinInformacion.png";
import Paginacion from "./Paginacion";

interface IPropCardPokemon {
  pokemonDetallado: IPokemonDetallado[];
  tomarInformacionPaginacion: any;
  eliminarPokemon: any;
  cantidadRegistros: number;
}
const SContenedorTextoSinInformacion = styled.div`
  text-align: center;
  position: relative;
  left: 50%;
  width: 300px;
  height: 30px;
  transform: translate(-50%, 0);
`;
const SContenedorSinInformacion = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 300px;
  height: 30px;
  transform: translate(-50%);
  border: 2px solid #bec8e7;
  border-radius: 10px;
`;

const SImgSinInformaicon = styled.img`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 150px;
  height: 100px;
  transform: translate(-50%);
  object-fit: contain;
`;

const LIMITEPORPAGINA = 5;

export const ContenedorCards: FC<IPropCardPokemon> = ({
  pokemonDetallado,
  tomarInformacionPaginacion,
  eliminarPokemon,
  cantidadRegistros,
}) => {
  return (
    <>
      {pokemonDetallado && pokemonDetallado.length > 0 ? (
        <Row xs={1} md={LIMITEPORPAGINA} className='g-4'>
          {pokemonDetallado.map((data) => (
            <SCard pokemon={data} eliminarPokemon={eliminarPokemon} />
          ))}
          <Paginacion
            cantidadRegistros={cantidadRegistros}
            tomarInformacionPaginacion={tomarInformacionPaginacion}
            limitePorPagina={LIMITEPORPAGINA}
          />
        </Row>
      ) : (
        <SContenedorSinInformacion>
          <SImgSinInformaicon src={SinInformacion} alt='SinInformacion' />
          <SContenedorTextoSinInformacion>
            Sin Informacion
          </SContenedorTextoSinInformacion>
        </SContenedorSinInformacion>
      )}
    </>
  );
};
