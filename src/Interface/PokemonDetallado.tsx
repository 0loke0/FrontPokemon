interface IImagen {
  ArchivoImagen: string;
  Nombre: string;
  RutaImagen: string;
}

interface IMovimientos {
  IdMovimiento: number;
  NombreMovimiento: string;
  Valor: number;
}

interface IPokemon {
  Id: number;
  Nombre: string;
}

interface IStats {
  Ataque: number;
  Defensa: number;
  EspecialAtaque: number;
  EspecialDefensa: number;
  Velocidad: number;
  Vida: number;
}

interface ITipos {
  IdTipo: number;
  NombreTipo: string;
}

export interface IPokemonDetallado {
  Id: number;
  Nombre: string;
  Ataque: number;
  Defensa: number;
  EspecialAtaque: number;
  EspecialDefensa: number;
  Velocidad: number;
  Vida: number;
  NombreImagen: string;
  RutaImagen: string;
  Rareza: string;
  Tipos: ITipos[];
  Movimientos: IMovimientos[];
  Detalle: string;
}

export interface IActulizacionPokemon {
  Id: number;
  NombrePokemon: string;
  IdsTipo: number[];
  IdsMovimiento: number[];
  Detalle: string;
}
