import { ConsumirApi } from "./Core/CoreApi";
import { IEstructuraNuevoPokemon, IPaginacion } from "../Interface/Pokemones";

interface IPokemon {
  Id: number;
  Nombre: string;
}

export const ObtenerPokemones = async (infoPaginacion: IPaginacion) => {
  const url = "http://localhost:63107/api/Pokemones/ObtenerPokemones";

  return await ConsumirApi(url, "Post", infoPaginacion).then((data) => {
    return data;
  });
};

export const AgregarPokemon = async (nuevoPokemon: IEstructuraNuevoPokemon) => {
  const url = `http://localhost:63107/api/Pokemones/GuardarNuevoPokemon`;
  return await ConsumirApi(url, "Post", nuevoPokemon).then((data) => {
    return data ? data : null;
  });
};

export const ActualizarPokemon = async (pokemon: IPokemon) => {
  const url = "http://localhost:63107/api/Pokemones/ActualizarPokemon";
  return await ConsumirApi(url, "Get", pokemon).then((data) => {
    return data;
  });
};

export const EliminarPokemon = async (idPokemon: number) => {
  const url = `http://localhost:63107/api/Pokemones/EliminarPokemon?idPokemon=${idPokemon}`;

  return await ConsumirApi(url, "Delete").then((data) => {
    return data;
  });
};

export const ObtenerCantidadRegistrosPokemon = async () => {
  const url = `http://localhost:63107/api/Pokemones/ObtenerCantidadRegistrosPokemon`;
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};
