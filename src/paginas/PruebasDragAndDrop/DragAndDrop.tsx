import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import App from "./drag2";

interface IinformacionGeneral {
  id: number;
  contenido: string;
}

const informacionGeneral: IinformacionGeneral[] = [
  { id: 1, contenido: "Contenido Inicial" },
  { id: 2, contenido: "Contenido Inicial no tan inicial" },
  { id: 3, contenido: "Otra tarea  " },
  { id: 4, contenido: "wow lo auto completo" },
  { id: 5, contenido: "shale creo que si funciona el auto" },
];

const informacionGeneralContenedor2: IinformacionGeneral[] = [
  { id: 1, contenido: "S" },
  { id: 2, contenido: "SSS" },
  { id: 3, contenido: "SS  " },
  { id: 4, contenido: "SSSS" },
  { id: 5, contenido: "SSSSS" },
];

const contenedores = {
  primaria: {
    name: "primaria",
    items: informacionGeneral,
  },
  secundaria: {
    name: "secundaria",
    items: informacionGeneralContenedor2,
  },
};

const DragAndDrop = () => {
  const [infoGeneral, setinfoGeneral] =
    useState<IinformacionGeneral[]>(informacionGeneral);
  const [infoGeneralContendor2, setinfoGeneralContendor2] = useState<
    IinformacionGeneral[]
  >(informacionGeneralContenedor2);

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const buscarElementoPorIndice = (
    indice: number,
    infoGeneral: IinformacionGeneral[]
  ) => {
    console.log(
      "informacion log",
      infoGeneral.find((x) => x.id === indice)
    );
    // return infoGeneral.find((x) => x.id === indice);
    return { id: 2, contenido: "Contenidosssssssss" };
  };

  const cambiarDeContenedor = (informacionTraspaso: any) => {
    // let infoGeneralTemp = { ...infoGeneral };
    var infoGeneralContendor2Temp: IinformacionGeneral[] = [
      ...infoGeneralContendor2,
    ];
    console.log("antes de ppushj", infoGeneralContendor2Temp);
    infoGeneralContendor2Temp.push({ id: 8, contenido: "Contenidosssssssss" });

    // console.log(infoGeneralContendor2Temp);
    setinfoGeneralContendor2(infoGeneralContendor2Temp);
  };

  return (
    <>
      <DragDropContext onDragEnd={cambiarDeContenedor}>
        <Droppable droppableId='idPrimario'>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {provided.placeholder}
              <div>
                {infoGeneral.map((item, index) => (
                  <Draggable draggableId={item.id.toString()} index={index}>
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
                {infoGeneralContendor2.map((item, index) => (
                  <Draggable
                    draggableId={item.id.toString() + "2"}
                    index={index}>
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
      </DragDropContext>
    </>
  );
};

export default DragAndDrop;
