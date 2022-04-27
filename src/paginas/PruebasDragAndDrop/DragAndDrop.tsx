import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";

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

const informacionGeneralContenedor2: IinformacionGeneral[] = [
  { id: 1, contenido: "ss1" },
  { id: 2, contenido: "ss2" },
  { id: 3, contenido: "ss3" },
  { id: 4, contenido: "ss4" },
  { id: 5, contenido: "ss5" },
];

const contenedores = [
  {
    identificador: "primaria",
    items: informacionGeneral,
  },
  {
    identificador: "secundaria",
    items: informacionGeneralContenedor2,
  },
];

const DragAndDrop = () => {
  const [origen, setorigen] =
    useState<IinformacionGeneral[]>(informacionGeneral);
  const [destino, setdestino] = useState<IinformacionGeneral[]>(
    informacionGeneralContenedor2
  );

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
        {contenedores.map((contenedor, indexMax) => {
          return (
            <SDroppable droppableId={contenedor.identificador}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {provided.placeholder}
                  <div>
                    {contenedor.items.map((item, index) => {
                      return (
                        <Draggable
                          draggableId={indexMax.toString() + item.id.toString()}
                          index={item.id}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              {item.contenido}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                  </div>
                </div>
              )}
            </SDroppable>
          );
        })}

        {/* <Droppable droppableId='idPrimario'>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {provided.placeholder}
              <div>
                {origen.map((item, index) => (
                  <Draggable draggableId={item.id.toString()} index={item.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
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
        </Droppable>
        <Droppable droppableId='idSecundario'>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {provided.placeholder}
              <div>
                {destino.map((item, index) => (
                  <Draggable
                    draggableId={item.id.toString() + "2"}
                    index={item.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
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
        </Droppable> */}
      </DragDropContext>
    </>
  );
};

export default DragAndDrop;
