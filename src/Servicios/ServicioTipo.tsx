import { ConsumirApi } from "./Core/CoreApi";

export const ObtenerTipos = async () => {
  var url = "http://localhost:63107/api/Tipos/ListaTipos";
  return await ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};

// export const guardarTipos = async (nombre: string) => {
//   var url = `http://localhost:63107/api/Tipos/AgregarTipo?nombreTipo=${nombre}`;
//   return await ConsumirApi(url, "Put").then((data) => {
//     return data;
//   });
// };

// export const borrarTipo = (idTipo: number) => {
//   var url = `http://localhost:63107/api/PruebasPoke/EliminarTipo?IdTipo=${idTipo}`;
//   return ConsumirApi(url, "Delete").then((data) => {
//     return data;
//   });
// };

// export const actualizarTipo = (tipo: any) => {
//   var url = `http://localhost:63107/api/Tipos/ActualizarTipo`;
//   return ConsumirApi(url, "Put", tipo).then((data) => {
//     return data;
//   });
// };
