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

export interface INuevoPokemon {
  NombrePokemon: string;
  IdTipo: number;
}
