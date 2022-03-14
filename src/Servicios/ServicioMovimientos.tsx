import { ConsumirApi } from "./Core/CoreApi";

export const ObtenerPokemones = async () => {
  const url = "http://localhost:63107/api/Pokemones/ObtenerPokemones";
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};
