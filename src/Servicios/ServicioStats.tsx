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
  const ERROR = "Se ha generado un error al consultar el stats de pokemon";
  return await ConsumirApi(url, "Get", ERROR).then((data) => {
    return data;
  });
};

export const guardarStat = async (stat: IStats) => {
  var url = "http://localhost:63107/api/Stats/GuardarStats";
  const ERROR = "Se ha generado un error al Agregar los stats de pokemon";
  return await ConsumirApi(url, "Put", ERROR, stat).then((data) => {
    return data;
  });
};

export const borrarStat = (idPokemon: number) => {
  var url = `http://localhost:63107/api/Stats/EliminarStats?idPokemon=${idPokemon}`;
  const ERROR = "Se ha generado un error al Eliminar stats de pokemon";
  return ConsumirApi(url, "Delete", ERROR).then((data) => {
    return data;
  });
};

export const actualizarStat = (stat: IStats) => {
  var url = `http://localhost:63107/api/Stats/ActualizarStats`;
  const ERROR = "Se ha generado un error al Actualizar Tipo de pokemon";
  return ConsumirApi(url, "Put", ERROR, stat).then((data) => {
    return data;
  });
};
