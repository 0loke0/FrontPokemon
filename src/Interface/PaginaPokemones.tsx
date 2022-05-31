export interface IStats {
  IdPokemon: number;
  Ataque: number;
  Defensa: number;
  EspecialAtaque: number;
  EspecialDefensa: number;
  Velocidad: number;
  Vida: number;
}

export interface IFormularioConsulta {
  Paginacion: IPaginacion;
  Filtros: IFiltradoPaginacion;
}

export interface IPaginacion {
  Indice: number;
  CantidadRegistros: number;
}

export interface IFiltradoPaginacion {
  Identificador: number;
  Nombre: string | undefined;
  VidaMinima: number;
  VidaMaxima: number;
  AtaqueMinimo: number;
  AtaqueMaximo: number;
  AtaqueEspecialMinimo: number;
  AtaqueEspecialMaximo: number;
  DefensaMinima: number;
  DefensaMaxima: number;
  DefensaEspecialMinima: number;
  DefensaEspecialMaxima: number;
  VelocidadMinima: number;
  VelocidadMaxima: number;
}
