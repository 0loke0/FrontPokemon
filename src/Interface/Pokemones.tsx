export interface IPokemon {
  Id: number;
  Nombre: string;
}

export interface IStats {
  IdPokemon: number;
  Ataque: number;
  Defensa: number;
  EspecialAtaque: number;
  EspecialDefensa: number;
  Velocidad: number;
  Vida: number;
}

export interface ITipos {
  IdTipo: number;
  NombreTipo: string;
}

export interface IImagen {
  Nombre: string;
  ArchivoImagen: string;
}

export interface IMovimiento {
  IdMovimiento: number;
  NombreMovimiento: string;
  Valor: number;
}

export interface INuevoPokemon {
  NombrePokemon: string;
  IdsTipo: number[];
  IdsMovimiento: number[];
  Imagen: IImagen;
  Detalle: string;
}

export interface IPaginacion {
  Indice: number;
  CantidadRegistros: number;
}

export interface IFiltradoPaginacion {
  Identificador: number | undefined;
  Nombre: string;
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
