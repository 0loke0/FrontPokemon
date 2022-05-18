import { ConsumirApi } from "./Core/CoreApi";

export const ObtenerTipos = async () => {
  var url = "http://localhost:63107/api/Tipos/ListaTipos";
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};
