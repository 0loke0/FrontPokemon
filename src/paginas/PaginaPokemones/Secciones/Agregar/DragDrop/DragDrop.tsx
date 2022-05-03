import React, { FC, useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { ITipos } from "../../../../../Interface/Pokemones";
import { ObtenerTipos } from "../../../../../Servicios/ServicioTipo";

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

interface Props {
  tipoIdentificador: number;
}
const SDivDroppable = styled.div<Props>`
  background-color: ${(props) =>
    props.tipoIdentificador > 0 ? "red;" : "blue;"}%;
`;
const informacionGeneral: IinformacionGeneral[] = [
  { id: 1, contenido: "Contenido Inicial" },
  { id: 2, contenido: "Contenido Inicial no tan inicial" },
  { id: 3, contenido: "Otra tarea  " },
  { id: 4, contenido: "wow lo auto completo" },
  { id: 5, contenido: "shale creo que si funciona el auto" },
];

const informacionGeneralContenedor2: IinformacionGeneral[] = [];

interface IPropsDragAndDrop {
  tomarTipos: any;
}

const DragAndDrop: FC<IPropsDragAndDrop> = ({ tomarTipos }) => {
  const [origen, setorigen] = useState<ITipos[]>([]);
  const [destino, setdestino] = useState<ITipos[]>([]);
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

  useEffect(() => {
    ObtenerTipos().then((x) => setorigen(x));
  }, []);

  useEffect(() => {
    tomarTipos(destino);
  }, [destino]);

  const buscarElementoPorIndice = (indice: number) => {
    return origen.find((x) => x.IdTipo === indice);
  };
  const eliminarElementoPorIndice = (informacion: ITipos) => {
    return origen.filter((x: ITipos) => x !== informacion);
  };

  const cambiarDeContenedor = (informacionTraspaso: DropResult) => {
    console.log(informacionTraspaso);
    if (
      informacionTraspaso.source.droppableId == contenedores[0].identificador
    ) {
      var destinoTemp: ITipos[] = [...destino];

      var informacion = buscarElementoPorIndice(
        informacionTraspaso.source.index
      );

      informacion && destinoTemp.push(informacion);
      informacion && setorigen(eliminarElementoPorIndice(informacion));

      setdestino(destinoTemp);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={(x) => cambiarDeContenedor(x)}>
        <Row>
          {contenedores.map((contenedor, indexMax) => (
            <SDroppable droppableId={contenedor.identificador}>
              {(provided, snapshot) => (
                <Col>
                  <SDivDroppable
                    tipoIdentificador={indexMax}
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    {provided.placeholder}
                    <div>
                      {contenedor.items.map((item, index) => (
                        <Draggable
                          draggableId={
                            indexMax.toString() + item.IdTipo.toString()
                          }
                          index={item.IdTipo}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...snapshot.dropAnimation}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              {item.NombreTipo}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  </SDivDroppable>
                </Col>
              )}
            </SDroppable>
          ))}
        </Row>
      </DragDropContext>
    </>
  );
};

export default DragAndDrop;
