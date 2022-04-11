import React, { useEffect, useState } from "react";

import {
  AgregarPokemon,
  EliminarPokemon,
  ObtenerCantidadRegistrosPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";

import { IPokemonDetallado } from "../../Interface/PokemonDetallado";

import { Loader } from "../../Componentes/Loader/loader";
import { Alerta } from "../../Componentes/Alerta";

import { Agregar } from "./Secciones/Agregar/Agregar";
import { ContenedorCards } from "./Secciones/Card/ContenedorCards";
import { ContadorPokemon } from "./Secciones/ContadorPokemon/ContadorPokemon";
import { INuevoPokemon, IPaginacion } from "../../Interface/Pokemones";

import {
  SGeneralPaginaPokemon,
  SPaginaPokemones,
  STitulo,
} from "./StylosPaginaPokemones";

function PaginaPokemones() {
  const [pokemonDetallado, setPokemonDetallado] = useState<IPokemonDetallado[]>(
    []
  );
  const [cantidadRegistros, setcantidadRegistros] = useState<number>(0);
  const [infoPaginacion, setinfoPaginacion] = useState({
    Indice: 0,
    CantidadRegistros: 3,
  });
  const [loader, setloader] = useState(false);

  useEffect(() => {
    setloader(true);
    ObtenerPokemones(infoPaginacion)
      .then((x) => {
        setPokemonDetallado(x);
      })
      .then(() => setloader(false));
    ObtenerCantidadRegistrosPokemon().then((cantidadRegistros) =>
      setcantidadRegistros(cantidadRegistros)
    );
  }, [infoPaginacion]);

  const tomarInformacionPaginacion = (infoPaginacion: IPaginacion) => {
    setinfoPaginacion(infoPaginacion);
  };

  //Read
  const actualizarPagina = () => {
    setloader(true);
    ObtenerPokemones(infoPaginacion)
      .then((x) => setPokemonDetallado(x))
      .then(() => setloader(false))
      .catch(() => setloader(false));
    ObtenerCantidadRegistrosPokemon().then((cantidadRegistros) => {
      console.log("informacion data se actualiza registos");
      setcantidadRegistros(cantidadRegistros);
    });
  };
  //Delete
  const eliminarPokemonRegistrado = (idPokemon: number) => {
    setloader(true);
    EliminarPokemon(idPokemon)
      .then((data) => {
        Alerta("success", "Completado", data);
      })
      .then(() => setloader(false))
      .then(() => actualizarPagina());
  };
  //Create
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

  return (
    <SPaginaPokemones>
      <SGeneralPaginaPokemon>
        {loader && <Loader />}
        <STitulo>Pokémones</STitulo>
        <ContadorPokemon
          cantidadRegistros={cantidadRegistros}></ContadorPokemon>
        <Agregar
          actualizarPagina={actualizarPagina}
          agregarPokemon={agregarNuevoPokemon}
        />
        <ContenedorCards
          pokemonDetallado={pokemonDetallado}
          tomarInformacionPaginacion={tomarInformacionPaginacion}
          eliminarPokemon={eliminarPokemonRegistrado}
          cantidadRegistros={cantidadRegistros}
        />
      </SGeneralPaginaPokemon>
    </SPaginaPokemones>
  );
}

export default PaginaPokemones;
