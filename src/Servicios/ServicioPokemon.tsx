import { ConsumirApi } from "./Core/CoreApi";
import { Alerta } from "../Componentes/Alerta";
interface IPokemon {
  Id: number;
  Nombre: string;
}

export const obtenerPokemones = async () => {
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

export const agregarPokemon = async (nombrePokemon: string) => {
  const url = `http://localhost:63107/api/Pokemones/GuardarPokemon?nombrePokemon=${nombrePokemon}`;
  return await ConsumirApi(url, "Post").then((data) => {
    return data ? data : null;
  });
};

export const actualizarPokemon = async (pokemon: IPokemon) => {
  const url = "http://localhost:63107/api/Pokemones/ActualizarPokemon";
  return await ConsumirApi(url, "Get", pokemon).then((data) => {
    return data;
  });
};
