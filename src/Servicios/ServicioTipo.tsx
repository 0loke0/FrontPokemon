import { ConsumirApi } from "./Core/CoreApi";

export const GetTipos = () => {
  var url = "http://localhost:63107/api/PruebasPoke/InformacionDePruebas2";
  const ERROR = "Se ha generado un error al consultar los Tipos de pokemon";
  return ConsumirApi(url, "Get", ERROR).then((data) => {
    return data;
  });
};

export const SetTipos = (formulario: any) => {
  var url = "http://localhost:63107/api/PruebasPoke/AgregarTipo";
  const ERROR = "Se ha generado un error al Agregar los Tipos de pokemon";
  return ConsumirApi(url, "Put", ERROR, formulario).then((data) => {
    return data;
  });
};

export const DeleteTipo = (formulario: any) => {
  var url = "http://localhost:63107/api/PruebasPoke/EliminarTipo";
  const ERROR = "Se ha generado un error al Eliminar Tipo de pokemon";
  return ConsumirApi(url, "Delete", ERROR, formulario).then((data) => {
    return data;
  });
};
