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

export interface INuevoPokemon {
  NombrePokemon: string;
  IdsTipo: number[];
  IdsMovimiento: number[];
  Imagen: IImagen;
}

export interface IMovimiento {
  IdMovimiento: number;
  NombreMovimiento: string;
  Valor: number;
}
