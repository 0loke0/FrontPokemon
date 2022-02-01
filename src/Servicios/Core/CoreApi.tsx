import { Alerta } from "../../Componentes/Alerta";

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
  return await fetch(url, TipoFetch)
    .then((response: any) => {
      console.log("respuesta ", response);

      return response ? response.json() : null;
    })
    .then((response) => {
      console.log("promesa resuelta ", response);
      if (response.ExceptionMessage) {
        Alerta("error", response.Message, response.ExceptionMessage);
        throw new Error(response.ExceptionMessage);
      }
      if (response.Message) {
        console.log(response);
        Alerta("error", "Error", response.Message);
        throw new Error(response.Message);
      }
      return response;
    })
    .catch((error) => {
      console.error("Se genero un error", error);
    });
};
