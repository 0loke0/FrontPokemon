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
import ClasificacionRarezas from "./Secciones/Clasificacion/ClasificacionRarezas";
import { ContenedorCards } from "./Secciones/Card/ContenedorCards";
import { ContadorPokemon } from "./Secciones/ContadorPokemon/ContadorPokemon";
import { INuevoPokemon, IPaginacion } from "../../Interface/Pokemones";
import LogoPokemon from "../../Multimedia/LogoPokemon.png";

import {
  SGeneralPaginaPokemon,
  SPaginaPokemones,
  STitulo,
} from "./StylosPaginaPokemones";
import MusicaGeneral from "./Secciones/Musica/MusicaGeneral";
import FiltroPokemones from "./Secciones/Filtros/FiltroPokemones";

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
    actualizarPagina();
  }, [infoPaginacion]);

  const tomarInformacionPaginacion = (infoPaginacion: IPaginacion) => {
    setinfoPaginacion(infoPaginacion);
  };

  //Read
  const actualizarPagina = () => {
    ObtenerPokemones(infoPaginacion).then((x) => setPokemonDetallado(x));
    console.log(pokemonDetallado);

    ObtenerCantidadRegistrosPokemon().then((cantidadRegistros) => {
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
  const agregarNuevoPokemon = (nuevoPokemon: INuevoPokemon) => {
    AgregarPokemon(nuevoPokemon)
      .then((x) => {
        x && Alerta("success", "Guardado", x);
      })
      .then(() => actualizarPagina());
  };

  return (
    <SPaginaPokemones>
      <SGeneralPaginaPokemon>
        <STitulo src={LogoPokemon} />
        <ContadorPokemon cantidadRegistros={cantidadRegistros} />
        <Agregar
          actualizarPagina={actualizarPagina}
          agregarPokemon={agregarNuevoPokemon}
        />
        <MusicaGeneral url='https://web.opendrive.com/api/v1/download/file.json/NDNfMjM5ODg3Nzdf?inline=1' />
        <ClasificacionRarezas />
        <FiltroPokemones
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
