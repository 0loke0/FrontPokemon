import { ITipo } from "./Tipos";
import { IMovimiento } from "./Movimientos";
import { IImagen } from "./Imagen";

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
  Tipos: ITipo[];
  Movimientos: IMovimiento[];
  Detalle: string;
}

export interface IActulizacionPokemon {
  Id: number;
  NombrePokemon: string;
  Tipos: ITipo[];
  Movimientos: IMovimiento[];
  Detalle: string;
}

export interface IPokemonActualizado {
  Id: number;
  NombrePokemon: string;
  IdsTipo: number[];
  IdsMovimiento: number[];
  Detalle: string;
}

export interface INuevoPokemon {
  NombrePokemon: string;
  IdsTipo: number[];
  IdsMovimiento: number[];
  Imagen: IImagen;
  Detalle: string;
}
