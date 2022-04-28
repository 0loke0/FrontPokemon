import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { ObtenerMovimientos } from "../../Servicios/ServicioMovimientos";
import { ObtenerTipos } from "../../Servicios/ServicioTipo";

interface IinformacionGeneral {
  id: number;
  contenido: string;
}

const SDivContenedores = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  border-radius: 2px solid black;
`;

const SDroppable = styled(Droppable)`
  background-color: red;
  width: 200px;
  height: 500px;
`;
const informacionGeneral: IinformacionGeneral[] = [
  { id: 1, contenido: "Contenido Inicial" },
  { id: 2, contenido: "Contenido Inicial no tan inicial" },
  { id: 3, contenido: "Otra tarea  " },
  { id: 4, contenido: "wow lo auto completo" },
  { id: 5, contenido: "shale creo que si funciona el auto" },
];

const informacionGeneralContenedor2: IinformacionGeneral[] = [];

const DragAndDrop = () => {
  const [origen, setorigen] =
    useState<IinformacionGeneral[]>(informacionGeneral);
  const [destino, setdestino] = useState<IinformacionGeneral[]>(
    informacionGeneralContenedor2
  );

  const contenedores = [
    {
      identificador: "primaria",
      items: origen,
    },
    {
      identificador: "secundaria",
      items: destino,
    },
  ];

  const buscarElementoPorIndice = (indice: number) => {
    return origen.find((x) => x.id === indice) || { id: 1, contenido: "S" };
  };

  const cambiarDeContenedor = (informacionTraspaso: DropResult) => {
    var destinoTemp: IinformacionGeneral[] = [...destino];
    var informacion = buscarElementoPorIndice(informacionTraspaso.source.index);
    destinoTemp.push(informacion);
    setdestino(destinoTemp);
  };

  return (
    <>
      <DragDropContext onDragEnd={(x) => cambiarDeContenedor(x)}>
        {contenedores.map((contenedor, indexMax) => (
          <SDroppable droppableId={contenedor.identificador}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {provided.placeholder}
                <div>
                  {contenedor.items.map((item, index) => (
                    <Draggable
                      draggableId={indexMax.toString() + item.id.toString()}
                      index={item.id}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...snapshot.dropAnimation}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          {item.contenido}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </SDroppable>
        ))}
      </DragDropContext>
    </>
  );
};

export default DragAndDrop;
