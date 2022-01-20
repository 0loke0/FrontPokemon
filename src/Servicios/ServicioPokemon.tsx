import { ConsumirApi } from "./Core/CoreApi";

export const GetPokemon = (url: string) => {
  const ERROR = "Se ha generado un error al consultar los Pokemones";
  return ConsumirApi(url, "Get", ERROR).then((data) => {
    return data;
  });
};

export const SetPokemon = (url: string) => {
  const ERROR = "Se ha generado un error al agregar Pokemon";
  const infosSend = { IdTipo: 1, NombreTipo: "nuevoTipoDesdeApi" };
  return ConsumirApi(url, "Get", ERROR, infosSend).then((data) => {
    return data;
  });
};
