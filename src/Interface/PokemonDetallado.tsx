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
  Id: string;
  Nombre: string;
  Ataque: number;
  Defensa: number;
  EspecialAtaque: number;
  EspecialDefensa: number;
  Velocidad: number;
  Vida: number;
  NombreImagen: string;
  ArchivoImagen: string;
  RutaImagen: string;
  Tipos: ITipos[];
  Movimientos: IMovimientos[];
}

//       public int Id { get; set; }
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
