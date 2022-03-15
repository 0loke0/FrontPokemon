import { ConsumirApi } from "./Core/CoreApi";

export const ObtenerMovimientos = async () => {
  const url = "http://localhost:63107/api/Movimiento/ListaMovimientos";
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};
