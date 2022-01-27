import { ConsumirApi } from "./Core/CoreApi";
interface IPokemon {
  Id: number;
  Nombre: string;
}

export const ObtenerPokemones = async () => {
  const url = "http://localhost:63107/api/Pokemones/ObtenerPokemones";
  const ERROR = "Se ha generado un error al consultar los Pokemones";
  return await ConsumirApi(url, "Get", ERROR).then((data) => {
    console.log("sdawda", data);
    return data;
  });
};

export const EliminarPokemon = (idPokemon: number) => {
  const url = `http://localhost:63107/api/Pokemones/EliminarPokemon?idPokemon=${idPokemon}`;
  const ERROR = "Se ha generado un error al Eliminar Pokemon";
  return ConsumirApi(url, "Delete", ERROR).then((data) => {
    return data ? data : null;
  });
};

export const AgregarPokemon = async (nombrePokemon: string) => {
  const url = `http://localhost:63107/api/Pokemones/GuardarPokemon?nombrePokemon=${nombrePokemon}`;
  const ERROR = "Se ha generado un error al agregar Pokemon";
  return await ConsumirApi(url, "Post", ERROR).then((data) => {
    return data ? data : null;
  });
};

export const ActualizarPokemon = (pokemon: IPokemon) => {
  const url = "http://localhost:63107/api/Pokemones/ActualizarPokemon";
  const ERROR = "Se ha generado un error al agregar Pokemon";
  return ConsumirApi(url, "Get", ERROR, pokemon).then((data) => {
    return data;
  });
};
