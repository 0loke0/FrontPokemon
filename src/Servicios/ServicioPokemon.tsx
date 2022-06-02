import { coreApi } from "./Core/CoreApi";
import {
  IFiltradoPaginacion,
  IFormularioConsulta,
} from "../Interface/PaginaPokemones";
import {
  INuevoPokemon,
  IPokemonActualizado,
} from "../Interface/PokemonDetallado";
import {
  controladorPokemon as controlador,
  crearPokemones as crear,
  leerPokemones as leer,
  actualizarPokemones as actualizar,
  borrarPokemones as borrar,
  getCantidadRegistros as CantidadRegistros,
  urlBase,
} from "./ConstantesServicios";

const apiBase: string = urlBase + controlador;

export const AgregarPokemon = async (nuevoPokemon: INuevoPokemon) => {
  const url = apiBase + crear;
  return await coreApi(url, "Post", nuevoPokemon).then((data) => {
    return data;
  });
};

export const ObtenerPokemones = async (infoPaginacion: IFormularioConsulta) => {
  const url = apiBase + leer;
  return await coreApi(url, "Post", infoPaginacion).then((data) => {
    return data;
  });
};

export const ActualizarPokemon = async (pokemon: IPokemonActualizado) => {
  const url = apiBase + actualizar;
  return await coreApi(url, "Post", pokemon).then((data) => {
    return data;
  });
};

export const EliminarPokemon = async (idPokemon: number) => {
  const url = apiBase + borrar + `?idPokemon=${idPokemon}`;
  return await coreApi(url, "Delete").then((data) => {
    return data;
  });
};

export const ObtenerCantidadRegistrosPokemon = async (
  filtros: IFiltradoPaginacion
) => {
  const url = apiBase + CantidadRegistros;
  return await coreApi(url, "Post", filtros).then((data) => {
    return data;
  });
};
