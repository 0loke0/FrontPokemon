import { ConsumirApi } from "./Core/CoreApi";
import { IStats } from "./../Interface/Pokemones";
import { Alerta } from "../Componentes/Alerta";

export const ObtenerStats = async () => {
  var url = "http://localhost:63107/api/Stats/ObtenerStats";
  const ERROR = "Se ha generado un error al consultar los stats de pokemon";
  return await ConsumirApi(url, "Get", ERROR).then((data) => {
    return data;
  });
};
