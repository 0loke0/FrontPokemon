import { ConsumirApi } from "./Core/CoreApi";

export const obtenerRelacionTipoPokemon = async (idPokemon: number) => {
  var url = `http://localhost:63107/api/DirectorioPokemones/BuscarRelacion?idPokemon=${idPokemon}`;
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};
