import { ConsumirApi } from "./Core/CoreApi";

export const getTipos = () => {
  var url = "http://localhost:63107/api/PruebasPoke/InformacionDePruebas2";
  const ERROR = "Se ha generado un error al consultar los Tipos de pokemon";
  return ConsumirApi(url, "Get", ERROR).then((data) => {
    return data;
  });
};

export const setTipos = async (formulario: any) => {
  var url = "http://localhost:63107/api/PruebasPoke/AgregarTipo";
  const ERROR = "Se ha generado un error al Agregar los Tipos de pokemon";
  return await ConsumirApi(url, "Put", ERROR, formulario).then((data) => {
    return data;
  });
};

export const deleteTipo = (IdTipo: number) => {
  var url = `http://localhost:63107/api/PruebasPoke/EliminarTipo?IdTipo=${IdTipo}`;
  const ERROR = "Se ha generado un error al Eliminar Tipo de pokemon";
  return ConsumirApi(url, "Delete", ERROR).then((data) => {
    return data;
  });
};

export const updateTipo = (IdTipo: number, formulario: any) => {
  var url = `http://localhost:63107/api/PruebasPoke/ActualizarTipo?IdTipo=${IdTipo}`;
  const ERROR = "Se ha generado un error al Actualizar Tipo de pokemon";
  return ConsumirApi(url, "Put", ERROR, formulario).then((data) => {
    return data;
  });
};
