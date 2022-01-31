import { ConsumirApi } from "./Core/CoreApi";
import { Alerta } from "../Componentes/Alerta";
interface IPokemon {
  Id: number;
  Nombre: string;
}

export const ObtenerPokemones = async () => {
  const url = "http://localhost:63107/api/Pokemones/ObtenerPokemones";
  return await ConsumirApi(url, "Get").then((data) => {
    console.log("infroamcion", data);

    return data;
  });
};

export const EliminarPokemon = async (idPokemon: number) => {
  const url = `http://localhost:63107/api/Pokemones/EliminarPokemon?idPokemon=${idPokemon}`;
  return await ConsumirApi(url, "Delete").then((data) => {
    if (typeof data == "string") {
      Alerta("success", "Completado", data);
    }
    return data ? data : null;
  });
};

export const AgregarPokemon = async (nombrePokemon: string) => {
  const url = `http://localhost:63107/api/Pokemones/GuardarPokemon?nombrePokemon=${nombrePokemon}`;
  return await ConsumirApi(url, "Post").then((data) => {
    return data ? data : null;
  });
};

export const ActualizarPokemon = async (pokemon: IPokemon) => {
  const url = "http://localhost:63107/api/Pokemones/ActualizarPokemon";
  return await ConsumirApi(url, "Get", pokemon).then((data) => {
    return data;
  });
};
