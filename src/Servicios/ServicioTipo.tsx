import { controladorTipos, leerTipos, urlBase } from "./ConstantesServicios";
import { coreApi } from "./Core/CoreApi";

const apiBase: string = urlBase + controladorTipos;

export const ObtenerTipos = async () => {
  var url = apiBase + leerTipos;
  return await coreApi(url, "Get").then((data) => {
    return data;
  });
};
