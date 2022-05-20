import React, { FC } from "react";
import { IFiltradoPaginacion } from "../../../../../Interface/Pokemones";
import {
  SDivIdentificador,
  SDivTitulo,
  SinputIdentificador,
  SinputNombre,
} from "../StyledFiltro";

interface IPropNombreFiltro {
  informacionFiltrado: IFiltradoPaginacion;
  asignarValoresFiltro: (e: any) => void;
}

const NombreFiltro: FC<IPropNombreFiltro> = ({
  informacionFiltrado,
  asignarValoresFiltro,
}) => {
  return (
    <SDivTitulo>
      <SinputNombre
        placeholder='Nombre'
        value={informacionFiltrado.Nombre}
        onChange={asignarValoresFiltro}
        name={"Nombre"}
      />
    </SDivTitulo>
  );
};

export default NombreFiltro;
