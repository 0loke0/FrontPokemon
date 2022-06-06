import { IFormularioConsulta } from "../Interface/PaginaPokemones";

export const DEFAULTSECCIONACONSULTAR: IFormularioConsulta = {
  Paginacion: { Indice: 0, CantidadRegistros: 3 },
  Filtros: {
    Identificador: 0,
    Nombre: "",
    AtaqueMinimo: 0,
    AtaqueMaximo: 100,
    AtaqueEspecialMinimo: 0,
    AtaqueEspecialMaximo: 100,
    VidaMinima: 0,
    VidaMaxima: 100,
    DefensaMinima: 0,
    DefensaMaxima: 100,
    DefensaEspecialMinima: 0,
    DefensaEspecialMaxima: 100,
    VelocidadMinima: 0,
    VelocidadMaxima: 100,
    Rareza: "",
    Tipo: 0,
  },
};
