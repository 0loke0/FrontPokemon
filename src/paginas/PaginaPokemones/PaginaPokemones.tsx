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
  IPaginacion,
} from "../../Interface/PaginaPokemones";
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

const DEFAULTSECCIONACONSULTAR: IFormularioConsulta = {
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
    Rareza: "",
    Tipo: 0,
  },
};

function PaginaPokemones() {
  const [pokemonDetallado, setPokemonDetallado] =
    useState<ISeccionConsultado>();
  const [cantidadRegistros, setcantidadRegistros] = useState<number>(0);
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

  const tomarInformacionPaginacion = (paginacion: IPaginacion) => {
    setseccionAConsultar({
      ...seccionAConsultar,
      Paginacion: paginacion,
    });
  };

  //Read
  const actualizarPagina = () => {
    ObtenerCantidadRegistrosPokemon(seccionAConsultar.Filtros).then(
      (cantidadRegistros) => {
        setcantidadRegistros(cantidadRegistros);
      }
    );

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
          setinfoPaginacion={setseccionAConsultar}
          infoPaginacion={seccionAConsultar}
          tipos={tipos}
        />
        <ContenedorCards
          actualizarPagina={actualizarPagina}
          pokemonDetallado={pokemonDetallado?.DetallePokemon}
          tomarInformacionPaginacion={tomarInformacionPaginacion}
          eliminarPokemon={eliminarPokemonRegistrado}
          cantidadRegistros={pokemonDetallado?.ConteoPokemones}
        />
      </SGeneralPaginaPokemon>
    </SPaginaPokemones>
  );
}

export default PaginaPokemones;
