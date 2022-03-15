import { ConsumirApi } from "./Core/CoreApi";
import { INuevoPokemon } from "../Interface/Pokemones";
import { Alerta } from "../Componentes/Alerta";
interface IPokemon {
  Id: number;
  Nombre: string;
}

export const ObtenerPokemones = async () => {
  const url = "http://localhost:63107/api/Pokemones/ObtenerPokemones";
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};

export const eliminarPokemon = async (idPokemon: number): Promise<string> => {
  const url = `http://localhost:63107/api/Pokemones/EliminarPokemon?idPokemon=${idPokemon}`;
  return await ConsumirApi(url, "Delete").then((data) => {
    return data;
  });
};

export const AgregarPokemon = async (nuevoPokemon: INuevoPokemon) => {
  const url = `http://localhost:63107/api/Pokemones/GuardarPokemon`;
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
