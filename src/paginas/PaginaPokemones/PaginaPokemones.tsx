import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContenedorCards } from "./Secciones/Card/ContenedorCards";
import {
  AgregarPokemon,
  EliminarPokemon,
  ObtenerCantidadRegistrosPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";
import { INuevoPokemon, IPaginacion } from "../../Interface/Pokemones";

import { Alerta } from "../../Componentes/Alerta";
import { Agregar } from "./Secciones/Agregar/Agregar";
import { IPokemonDetallado } from "../../Interface/PokemonDetallado";
import {
  SGenenarlPaginaPokemon,
  SPaginaPokemones,
  STitulo,
} from "./StylosPaginaPokemones";
import { ContadorPokemon } from "./Secciones/ContadorPokemon/ContadorPokemon";
import { Loader } from "../../Componentes/Loader/loader";

function PaginaPokemones() {
  const [pokemonDetallado, setPokemonDetallado] = useState<IPokemonDetallado[]>(
    []
  );
  const [cantidadRegistros, setcantidadRegistros] = useState<number>(0);
  const [loader, setloader] = useState(false);
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
    setloader(true);
    setTimeout(function () {
      ObtenerPokemones(infoPaginacion).then((x) => setPokemonDetallado(x));
      setloader(false);
    }, 2000);
  };

  const agregarNuevoPokemon = (nuevoPokemon: INuevoPokemon) => {
    AgregarPokemon(nuevoPokemon)
      .then((x) => {
        x && Alerta("success", "Guardado", x);
      })
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
    <SPaginaPokemones>
      <SGenenarlPaginaPokemon>
        {loader && <Loader />}
        <STitulo>Pokémones </STitulo>
        <ContadorPokemon
          cantidadRegistros={cantidadRegistros}></ContadorPokemon>
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
    </SPaginaPokemones>
  );
}

export default PaginaPokemones;
