import {
  controladorMovimientos,
  leerMovimientos as leer,
  urlBase,
} from "./ConstantesServicios";
import { coreApi } from "./Core/CoreApi";

const apiBase: string = urlBase + controladorMovimientos;
export const ObtenerMovimientos = async () => {
  const url = apiBase + leer;
  return await coreApi(url, "Get").then((data) => {
    return data;
  });
};

