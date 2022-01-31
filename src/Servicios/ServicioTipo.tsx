import { ConsumirApi } from "./Core/CoreApi";

export const getTipos = () => {
  var url = "http://localhost:63107/api/PruebasPoke/InformacionDePruebas2";
  return ConsumirApi(url, "Get").then((data) => {
    return data;
  });
};

export const setTipos = async (formulario: any) => {
  var url = "http://localhost:63107/api/PruebasPoke/AgregarTipo";
  return await ConsumirApi(url, "Put", formulario).then((data) => {
    return data;
  });
};

export const deleteTipo = (IdTipo: number) => {
  var url = `http://localhost:63107/api/PruebasPoke/EliminarTipo?IdTipo=${IdTipo}`;
  return ConsumirApi(url, "Delete").then((data) => {
    return data;
  });
};

export const updateTipo = (IdTipo: number, formulario: any) => {
  var url = `http://localhost:63107/api/PruebasPoke/ActualizarTipo?IdTipo=${IdTipo}`;
  return ConsumirApi(url, "Put", formulario).then((data) => {
    return data;
  });
};
