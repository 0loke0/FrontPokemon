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
  IdsTipo: (number | undefined)[];
  IdsMovimiento: (number | undefined)[];
  Imagen: IImagen;
}

// public int Id { get; set; }
//         public string Nombre { get; set; }
//         public int Ataque { get; set; }
//         public int Defensa { get; set; }
//         public int EspecialAtaque { get; set; }
//         public int EspecialDefensa { get; set; }
//         public int Velocidad { get; set; }
//         public int Vida { get; set; }
//         public string NombreImagen { get; set; }
//         public string ArchivoImagen { get; set; }
//         public string RutaImagen { get; set; }

//         public List<DTOMovimiento> Movimientos { get; set; }
//         public List<DTOTipo> Tipos { get; set; }
