import { ConsumirApi } from "./Core/CoreApi";
import { INuevoPokemon, IPaginacion } from "../Interface/Pokemones";
import { IActulizacionPokemon } from "../Interface/PokemonDetallado";

export const ObtenerPokemones = async (infoPaginacion: IPaginacion) => {
  const url = "http://localhost:63107/api/Pokemones/ObtenerPokemonesSP";

  return await ConsumirApi(url, "Post", infoPaginacion).then((data) => {
    return data;
  });
};

export const AgregarPokemon = async (nuevoPokemon: INuevoPokemon) => {
  const url = `http://localhost:63107/api/Pokemones/GuardarNuevoPokemon`;
  return await ConsumirApi(url, "Post", nuevoPokemon).then((data) => {
    return data ? data : null;
  });
};

export const ActualizarPokemon = async (pokemon: IActulizacionPokemon) => {
  const url = "http://localhost:63107/api/Pokemones/ModificarPokemon";
  return await ConsumirApi(url, "Post", pokemon).then((data) => {
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
