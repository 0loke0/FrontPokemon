import { ConsumirApi } from "./Core/CoreApi";
import { IStats } from "./../Interface/Pokemones";

export const obtenerStats = async () => {
  var url = "http://localhost:63107/api/Stats/ObtenerStats";
  const ERROR = "Se ha generado un error al consultar los stats de pokemon";
  return await ConsumirApi(url, "Get", ERROR).then((data) => {
    return data;
  });
};
export const buscarStat = async (idPokemon: number) => {
  var url = `http://localhost:63107/api/Stats/BuscarStat?idPokemon=${idPokemon}`;
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};

export const guardarStat = async (stat: IStats) => {
  var url = "http://localhost:63107/api/Stats/GuardarStats";
  return await ConsumirApi(url, "Put", stat).then((data) => {
    return data;
  });
};

export const borrarStat = (idPokemon: number) => {
  var url = `http://localhost:63107/api/Stats/EliminarStats?idPokemon=${idPokemon}`;
  return ConsumirApi(url, "Delete").then((data) => {
    return data;
  });
};

export const actualizarStat = (stat: IStats) => {
  var url = `http://localhost:63107/api/Stats/ActualizarStats`;
  return ConsumirApi(url, "Put", stat).then((data) => {
    return data;
  });
};
