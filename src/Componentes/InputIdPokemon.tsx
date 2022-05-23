import React, { FC } from "react";
import { IFiltradoPaginacion } from "../Interface/Pokemones";

import styled from "styled-components";
interface IProps {
  sizeW?: number;
  sizeH?: number;
}

export const SDivIdentificador = styled.div`
  top: 10px;
  left: 3%;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  font-weight: 500;
  background: #6bacec;
  color: #ffffff;
`;

export const SinputIdentificador = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 15px;
  display: block;
  width: ${(p: IProps) => (p.sizeW ? p.sizeW + `px` : "30px")};
  height: ${(p: IProps) => (p.sizeH ? p.sizeH + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #42a9fd;
  text-align: center;
  transform: translate(-50%, -50%);
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

interface IPropIdFiltro {
  informacionFiltrado: IFiltradoPaginacion;
  asignarValoresFiltro: (e: any) => void;
  name: string;
  sizeH?: number;
  sizeW?: number;
}

const IdFiltro: FC<IPropIdFiltro> = ({
  informacionFiltrado,
  asignarValoresFiltro,
  name,
  sizeH,
  sizeW,
}) => {
  return (
    <SDivIdentificador>
      <SinputIdentificador
        value={informacionFiltrado.Identificador}
        onChange={asignarValoresFiltro}
        sizeH={sizeH ? sizeH : 18}
        sizeW={sizeW ? sizeW : 38}
        name={name}
      />
    </SDivIdentificador>
  );
};

export default IdFiltro;
