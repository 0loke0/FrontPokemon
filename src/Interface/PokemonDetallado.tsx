interface Imagen {
  ArchivoImagen: string;
  Nombre: string;
  RutaImagen: string;
}

interface Movimientos {
  NombreMovimiento: string;
  Valor: number;
}

interface Pokemon {
  Id: number;
  Nombre: string;
}

interface Pokemon {
  Ataque: number;
  Defensa: number;
  EspecialAtaque: number;
  EspecialDefensa: number;
  Velocidad: number;
  Vida: number;
}

export interface IPokemonDetalladoCard {
  Imagen: Imagen;
  tipos: string[];
}
