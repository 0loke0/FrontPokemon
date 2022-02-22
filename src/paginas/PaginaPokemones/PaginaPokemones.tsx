import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContenedorCards } from "./Secciones/Card/ContenedorCards";
import {
  agregarPokemon,
  eliminarPokemon,
  obtenerPokemones,
} from "../../Servicios/ServicioPokemon";
import { INuevoPokemon } from "../../Interface/Pokemones";

import { Alerta } from "../../Componentes/Alerta";
import { IPokemon } from "../../Interface/Pokemones";
import { Agregar } from "./Secciones/Agregar";
import { Tabla } from "./Secciones/Tabla";

const SGenenarlPaginaPokemon = styled.div`
  margin: 3% 10% 3% 10%;
  border: 1px solid blue;
  box-shadow: 0px 0px 15px black;
  background-color: #fff7f7;
  border-radius: 20px;
  padding: 3%;
`;
const STitulo = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  line-height: 1;
`;

function PaginaPokemones() {
  const [pokemon, setpokemon] = useState<IPokemon[]>([]);
  useEffect(() => {
    obtenerPokemones().then((x) => setpokemon(x));
  }, []);

  const actualizarPagina = () => {
    obtenerPokemones().then((x) => setpokemon(x));
  };

  const agregarNuevoPokemon = (nombrePokemon: INuevoPokemon) => {
    console.log(nombrePokemon);
    agregarPokemon(nombrePokemon).finally(() => actualizarPagina());
  };

  const eliminarPokemonRegistrado = (idPokemon: number) => {
    eliminarPokemon(idPokemon)
      .then((data) => {
        Alerta("success", "Completado", data);
      })
      .finally(() => actualizarPagina());
  };

  return (
    <SGenenarlPaginaPokemon>
      <STitulo>Pokémones</STitulo>
      <Agregar
        actualizarPagina={actualizarPagina}
        agregarPokemon={agregarNuevoPokemon}
      />
      <ContenedorCards pokemon={pokemon} />
    </SGenenarlPaginaPokemon>
  );
}

export default PaginaPokemones;
