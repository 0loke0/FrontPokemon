import { Alerta } from "../../Componentes/Alerta";
import { trackPromise } from "react-promise-tracker";

export const ConsumirApi = async (
  url: string,
  tipo: "Get" | "Put" | "Delete" | "Post",
  data?: any
) => {
  let TipoFetch: RequestInit = {
    method: tipo,
    body: data ? JSON.stringify(data) : null,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await trackPromise(
    fetch(url, TipoFetch)
      .then((response: any) => {
        return response ? response.json() : null;
      })
      .then((response) => {
        return validarErrores(response);
      })
      .catch((error) => {
        Alerta("error", "Error", error);
        console.error("Se genero un error", error);
        return null;
      })
  );
};

const validarErrores = (response: any) => {
  if (response.ExceptionMessage) {
    Alerta("error", response.Message, response.ExceptionMessage);
    throw new Error(response.ExceptionMessage);
  }
  if (response.Message) {
    Alerta("error", "Error", response.Message);
    throw new Error(response.Message);
  }
  return response;
};
