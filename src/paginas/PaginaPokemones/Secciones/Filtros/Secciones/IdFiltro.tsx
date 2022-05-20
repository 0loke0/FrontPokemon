import React, { FC } from "react";
import { IFiltradoPaginacion } from "../../../../../Interface/Pokemones";
import { SDivIdentificador, SinputIdentificador } from "../StyledFiltro";

interface IPropIdFiltro {
  informacionFiltrado: IFiltradoPaginacion;
  asignarValoresFiltro: (e: any) => void;
}

const IdFiltro: FC<IPropIdFiltro> = ({
  informacionFiltrado,
  asignarValoresFiltro,
}) => {
  return (
    <SDivIdentificador>
      <SinputIdentificador
        value={informacionFiltrado.Identificador}
        onChange={asignarValoresFiltro}
        sizeH={18}
        sizeW={38}
        name={"Identificador"}
      />
    </SDivIdentificador>
  );
};

export default IdFiltro;
