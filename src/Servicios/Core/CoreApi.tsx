export const ConsumirApi = async (
  url: string,
  tipo: "Get" | "Put" | "Delete" | "Post",
  mensajeError: string,
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
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => console.log(mensajeError + ":" + error.message));
};
