import React, { FC } from "react";

import { DropList } from "../../../../../Componentes/DropList";
import { IMovimiento, ITipos } from "../../../../../Interface/Pokemones";

interface IPropDesplegable {
  listaIdsALlenar: number[];
  listaReferencias: IMovimiento[] | ITipos[];
  asignarValorSeleccionado: (x: number, index: number) => void;
  valorAIndicar: string;
  valorDefecto: string;
  valorAListar: string;
}

const Desplegable: FC<IPropDesplegable> = ({
  listaIdsALlenar,
  listaReferencias,
  asignarValorSeleccionado,
  valorAIndicar,
  valorDefecto,
  valorAListar,
}) => {
  return (
    <>
      {listaIdsALlenar.map((x, index) => {
        return (
          <DropList
            valorAIndicar={valorAIndicar}
            index={index}
            lista={listaReferencias}
            recogerSeleccion={asignarValorSeleccionado}
            valorDefecto={valorDefecto}
            valorAListar={valorAListar}
          />
        );
      })}
    </>
  );
};

export default Desplegable;
