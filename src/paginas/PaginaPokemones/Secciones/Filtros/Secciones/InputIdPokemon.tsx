import React, { FC } from "react";
import { IFiltradoPaginacion } from "../../../../../Interface/Pokemones";

import styled from "styled-components";
import InputText from "../../../../../Componentes/InputText";
import { relative } from "path";
interface IProps {
  sizeW?: number;
  sizeH?: number;
}

export const SDivIdentificador = styled.div`
  border-radius: 50%;
  position: absolute;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background: #6bacec;
  color: #ffffff;
`;

export const SContenedorinputIdentificador = styled.div`
  top: 10px;
  position: absolute;
  height: 45px;
  width: 45px;
  font-weight: 500;
`;

interface IPropIdFiltro {
  asignarValoresFiltro: (e: any) => void;
  name: string;
  sizeH?: number;
  sizeW?: number;
  valor: number;
}

const IdFiltro: FC<IPropIdFiltro> = ({
  asignarValoresFiltro,
  name,
  sizeH,
  sizeW,
  valor,
}) => {
  return (
    <SContenedorinputIdentificador>
      <InputText
        value={valor}
        onChange={asignarValoresFiltro}
        sizeH={sizeH ? sizeH : 18}
        sizeW={sizeW ? sizeW : 38}
        name={name}
        position={"absolute"}
      />
      <SDivIdentificador></SDivIdentificador>
    </SContenedorinputIdentificador>
  );
};

export default IdFiltro;
