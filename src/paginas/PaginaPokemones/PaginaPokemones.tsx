import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContenedorCards } from "./Secciones/Card/ContenedorCards";
import {
  AgregarPokemon,
  EliminarPokemon,
  ObtenerCantidadRegistrosPokemon,
  // eliminarPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";
import { INuevoPokemon, IPaginacion } from "../../Interface/Pokemones";

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
  const [pokemonDetallado, setPokemonDetallado] = useState<IPokemonDetallado[]>(
    []
  );
  const [cantidadRegistros, setcantidadRegistros] = useState<number>(0);

  const [infoPaginacion, setinfoPaginacion] = useState({
    Indice: 0,
    CantidadRegistros: 3,
  });
  useEffect(() => {
    ObtenerPokemones(infoPaginacion).then((x) => {
      setPokemonDetallado(x);
    });
    ObtenerCantidadRegistrosPokemon().then((cantidadRegistros) =>
      setcantidadRegistros(cantidadRegistros)
    );
  }, [infoPaginacion]);

  const actualizarPagina = () => {
    ObtenerPokemones(infoPaginacion).then((x) => setPokemonDetallado(x));
  };

  const agregarNuevoPokemon = (nuevoPokemon: INuevoPokemon) => {
    AgregarPokemon(nuevoPokemon)
      .then((x) => Alerta("success", "Guardado", x))
      .then(() => actualizarPagina())
      .then(() =>
        ObtenerCantidadRegistrosPokemon().then((cantidadRegistros) =>
          setcantidadRegistros(cantidadRegistros)
        )
      );
  };

  const tomarInformaiconPaginacion = (infoPaginacion: IPaginacion) => {
    setinfoPaginacion(infoPaginacion);
  };

  const eliminarPokemonRegistrado = (idPokemon: number) => {
    console.log("se esta intentado borrar el elemento con id ", idPokemon);

    EliminarPokemon(idPokemon)
      .then((data) => {
        Alerta("success", "Completado", data);
      })
      .then(() => actualizarPagina());
  };

  return (
    <SGenenarlPaginaPokemon>
      <STitulo>Pokémones</STitulo>

      <Agregar
        actualizarPagina={actualizarPagina}
        agregarPokemon={agregarNuevoPokemon}
      />
      <ContenedorCards
        PokemonDetallado={pokemonDetallado}
        TomarInformaiconPaginacion={tomarInformaiconPaginacion}
        eliminarPokemon={eliminarPokemonRegistrado}
        cantidadRegistros={cantidadRegistros}
      />
    </SGenenarlPaginaPokemon>
  );
}

export default PaginaPokemones;
