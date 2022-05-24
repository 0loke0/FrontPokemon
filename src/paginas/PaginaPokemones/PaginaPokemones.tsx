import React, { useEffect, useState } from "react";

import {
  AgregarPokemon,
  EliminarPokemon,
  ObtenerCantidadRegistrosPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";

import { Alerta } from "../../Componentes/Alerta";

import {
  IFormularioConsulta,
  INuevoPokemon,
  IPaginacion,
} from "../../Interface/Pokemones";
import { IPokemonDetallado } from "../../Interface/PokemonDetallado";

import { Agregar } from "./Secciones/Agregar/Agregar";
import ClasificacionRarezas from "./Secciones/Clasificacion/ClasificacionRarezas";
import { ContenedorCards } from "./Secciones/CuerpoCentral/ContenedorCards";
import { ContadorPokemon } from "./Secciones/ContadorPokemon/ContadorPokemon";
import MusicaGeneral from "./Secciones/Musica/MusicaGeneral";
import FiltroPokemones from "./Secciones/Filtros/FiltroPokemones";

import {
  SGeneralPaginaPokemon,
  SImgLogo,
  SPaginaPokemones,
} from "./StylosPaginaPokemones";
import LogoPokemon from "../../Multimedia/LogoPokemon.png";

function PaginaPokemones() {
  const [pokemonDetallado, setPokemonDetallado] = useState<IPokemonDetallado[]>(
    []
  );
  const [cantidadRegistros, setcantidadRegistros] = useState<number>(0);
  const [infoPaginacion, setinfoPaginacion] = useState<IFormularioConsulta>({
    Paginacion: { Indice: 0, CantidadRegistros: 3 },
    Filtros: {
      Identificador: 0,
      Nombre: "",
      AtaqueMinimo: 0,
      AtaqueMaximo: 100,
      AtaqueEspecialMinimo: 0,
      AtaqueEspecialMaximo: 100,
      VidaMinima: 0,
      VidaMaxima: 100,
      DefensaMinima: 0,
      DefensaMaxima: 100,
      DefensaEspecialMinima: 0,
      DefensaEspecialMaxima: 100,
      VelocidadMinima: 0,
      VelocidadMaxima: 100,
    },
  });

  useEffect(() => {
    actualizarPagina();
  }, [infoPaginacion]);

  const tomarInformacionPaginacion = (paginacion: IPaginacion) => {
    setinfoPaginacion({
      ...infoPaginacion,
      Paginacion: paginacion,
    });
  };

  //Read
  const actualizarPagina = () => {
    ObtenerPokemones(infoPaginacion).then((x) => setPokemonDetallado(x));
    ObtenerCantidadRegistrosPokemon(infoPaginacion.Filtros).then(
      (cantidadRegistros) => {
        setcantidadRegistros(cantidadRegistros);
      }
    );
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
        <SImgLogo src={LogoPokemon} />
        <ContadorPokemon cantidadRegistros={cantidadRegistros} />
        <Agregar
          actualizarPagina={actualizarPagina}
          agregarPokemon={agregarNuevoPokemon}
        />
        <MusicaGeneral url='https://web.opendrive.com/api/v1/download/file.json/NDNfMjM5ODg3Nzdf?inline=1' />
        <ClasificacionRarezas />
        <FiltroPokemones
          setinfoPaginacion={setinfoPaginacion}
          infoPaginacion={infoPaginacion}
        />
        <ContenedorCards
          actualizarPagina={actualizarPagina}
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
