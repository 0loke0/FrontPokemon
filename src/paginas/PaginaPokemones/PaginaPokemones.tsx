import React, { useEffect, useState } from "react";

import {
  AgregarPokemon,
  EliminarPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";

import { Alerta } from "../../Componentes/Alerta";

import { IFormularioConsulta } from "../../Interface/PaginaPokemones";
import {
  INuevoPokemon,
  ISeccionConsultado,
} from "../../Interface/PokemonDetallado";

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
import { ITipo } from "../../Interface/Tipos";
import { IMovimiento } from "../../Interface/Movimientos";
import { ObtenerTipos } from "../../Servicios/ServicioTipo";
import { ObtenerMovimientos } from "../../Servicios/ServicioMovimientos";
import { DEFAULTSECCIONACONSULTAR } from "../../Constantes/Pokemones";

function PaginaPokemones() {
  const [pokemonDetallado, setPokemonDetallado] =
    useState<ISeccionConsultado>();
  const [seccionAConsultar, setseccionAConsultar] =
    useState<IFormularioConsulta>(DEFAULTSECCIONACONSULTAR);

  const [tipos, settipos] = useState<ITipo[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);

  useEffect(() => {
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  useEffect(() => {
    actualizarPagina();
  }, [seccionAConsultar]);

  //Read
  const actualizarPagina = () => {
    ObtenerPokemones(seccionAConsultar).then((x) => setPokemonDetallado(x));
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
        <ContadorPokemon
          cantidadRegistros={pokemonDetallado?.ConteoPokemones}
        />
        <Agregar
          actualizarPagina={actualizarPagina}
          agregarPokemon={agregarNuevoPokemon}
          movimientos={movimientos}
          tipos={tipos}
        />
        <MusicaGeneral url='https://web.opendrive.com/api/v1/download/file.json/NDNfMjM5ODg3Nzdf?inline=1' />
        <ClasificacionRarezas
          setseccionAConsultar={setseccionAConsultar}
          seccionAConsultar={seccionAConsultar}
        />
        <FiltroPokemones
          setseccionAConsultar={setseccionAConsultar}
          seccionAConsultar={seccionAConsultar}
          tipos={tipos}
        />
        <ContenedorCards
          setseccionAConsultar={setseccionAConsultar}
          seccionAConsultar={seccionAConsultar}
          actualizarPagina={actualizarPagina}
          pokemonDetallado={pokemonDetallado?.DetallePokemon}
          eliminarPokemon={eliminarPokemonRegistrado}
          cantidadRegistros={pokemonDetallado?.ConteoPokemones}
        />
      </SGeneralPaginaPokemon>
    </SPaginaPokemones>
  );
}

export default PaginaPokemones;
