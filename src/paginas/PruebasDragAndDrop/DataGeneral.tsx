interface Isubtarea {
  id: string;
  title: string;
  tasksIds: string[];
}

interface ISubColumna {
  id: string;
  contenido: string;
}

interface ITareas {
  tarea1: ISubColumna;
  tarea2: ISubColumna;
  tarea3: ISubColumna;
  tarea4: ISubColumna;
  tarea5: ISubColumna;
}
interface Columna1 {
  "Columna-1": Isubtarea;
}

export interface IInformacionGenaral {
  tareas: ITareas;
  columnas: Columna1;
  ordenDeColumna: string[];
}

export const informacionGeneral: IInformacionGenaral = {
  tareas: {
    tarea1: { id: "tarea1", contenido: "Contenido Inicial" },
    tarea2: { id: "tarea2", contenido: "Contenido Inicial no tan inicial" },
    tarea3: { id: "tarea3", contenido: "Otra tarea  " },
    tarea4: { id: "tarea4", contenido: "wow lo auto completo" },
    tarea5: { id: "tarea5", contenido: "shale creo que si funciona el auto" },
  },
  columnas: {
    "Columna-1": {
      id: "columna1",
      title: "por hacer",
      tasksIds: ["tarea1", "tarea2", "tarea3", "tarea4", "tarea5"],
    },
  },
  ordenDeColumna: ["Columna-1"],
};
