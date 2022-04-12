import React, { useEffect, useState } from "react";

import {
  AgregarPokemon,
  EliminarPokemon,
  ObtenerCantidadRegistrosPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";

import { IPokemonDetallado } from "../../Interface/PokemonDetallado";

import { Alerta } from "../../Componentes/Alerta";

import { Agregar } from "./Secciones/Agregar/Agregar";
import Clasificacion from "./Secciones/Clasificacion/Clasificacion";
import { ContenedorCards } from "./Secciones/Card/ContenedorCards";
import { ContadorPokemon } from "./Secciones/ContadorPokemon/ContadorPokemon";
import {
  IEstructuraNuevoPokemon,
  IPaginacion,
} from "../../Interface/Pokemones";

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

  useEffect(() => {
    ObtenerPokemones(infoPaginacion).then((x) => {
      setPokemonDetallado(x);
    });

    ObtenerCantidadRegistrosPokemon().then((cantidadRegistros) =>
      setcantidadRegistros(cantidadRegistros)
    );
  }, [infoPaginacion]);

  const tomarInformacionPaginacion = (infoPaginacion: IPaginacion) => {
    setinfoPaginacion(infoPaginacion);
  };

  //Read
  const actualizarPagina = () => {
    ObtenerPokemones(infoPaginacion).then((x) => setPokemonDetallado(x));

    ObtenerCantidadRegistrosPokemon().then((cantidadRegistros) => {
      console.log("informacion data se actualiza registos");
      setcantidadRegistros(cantidadRegistros);
    });
  };
  //Delete
  const eliminarPokemonRegistrado = (idPokemon: number) => {
    EliminarPokemon(idPokemon)
      .then((data) => {
        Alerta("success", "Completado", data);
      })
      .then(() => actualizarPagina());
  };
  //Create
  const agregarNuevoPokemon = (nuevoPokemon: IEstructuraNuevoPokemon) => {
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
        <STitulo>Pokémones</STitulo>
        <ContadorPokemon
          cantidadRegistros={cantidadRegistros}></ContadorPokemon>
        <Agregar
          actualizarPagina={actualizarPagina}
          agregarPokemon={agregarNuevoPokemon}
        />
        <Clasificacion />
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
