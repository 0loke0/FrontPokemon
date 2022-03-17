import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContenedorCards } from "./Secciones/Card/ContenedorCards";
import {
  AgregarPokemon,
  // eliminarPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";
import { INuevoPokemon } from "../../Interface/Pokemones";

import { Alerta } from "../../Componentes/Alerta";
import { IPokemon } from "../../Interface/Pokemones";
import { Agregar } from "./Secciones/Agregar";
import { Tabla } from "./Secciones/Tabla";
import { IPokemonDetallado } from "../../Interface/PokemonDetallado";

const SGenenarlPaginaPokemon = styled.div`
  margin: 3% 8% 3% 8%;
  border: 1px solid blue;
  box-shadow: 0px 0px 3px black;
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
  const [PokemonDetallado, setPokemonDetallado] = useState<IPokemonDetallado[]>(
    []
  );
  useEffect(() => {
    ObtenerPokemones().then((x) => setPokemonDetallado(x));
  }, []);

  const actualizarPagina = () => {
    ObtenerPokemones().then((x) => setPokemonDetallado(x));
  };

  const agregarNuevoPokemon = (nuevoPokemon: INuevoPokemon) => {
    AgregarPokemon(nuevoPokemon)
      .then((x) => Alerta("success", "Guardado", x))
      .then(() => actualizarPagina());
  };

  const eliminarPokemonRegistrado = (idPokemon: number) => {
    // eliminarPokemon(idPokemon)
    //   .then((data) => {
    //     Alerta("success", "Completado", data);
    //   })
    //   .finally(() => actualizarPagina());
  };

  return (
    <SGenenarlPaginaPokemon>
      <STitulo>Pokémones</STitulo>

      <Agregar
        actualizarPagina={actualizarPagina}
        agregarPokemon={agregarNuevoPokemon}
      />
      <ContenedorCards PokemonDetallado={PokemonDetallado} />
    </SGenenarlPaginaPokemon>
  );
}

export default PaginaPokemones;
