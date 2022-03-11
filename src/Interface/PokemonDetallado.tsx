interface IImagen {
  ArchivoImagen: string;
  Nombre: string;
  RutaImagen: string;
}

interface IMovimientos {
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
  Pokemon: IPokemon;
  Imagen: IImagen;
  Tipos: ITipos[];
  Movimientos: IMovimientos[];
  Stats: IStats;
}
