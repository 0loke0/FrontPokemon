import React, { FC } from "react";
import Table from "react-bootstrap/Table";
import { Eliminar } from "../Secciones/Eliminar";
import { Actualizar } from "../Secciones/Actualizar";
import styled from "styled-components";
import { IPokemon } from "../../../Interface/Pokemones";

const Sth = styled.th`
  text-align: center;
`;
const Std = styled.td`
  text-align: center;
`;
interface IPropTabla {
  pokemon: IPokemon[];
  actualizarPagina: any;
}

export const Tabla: FC<IPropTabla> = ({ pokemon, actualizarPagina }) => {
  return (
    <Table bordered={false} hover={true} variant='light'>
      <thead>
        <tr>
          <Sth>ID</Sth>
          <Sth>Tipos</Sth>
          <Sth>Eliminar</Sth>
          <Sth>Actualizar</Sth>
        </tr>
      </thead>
      <tbody>
        {pokemon?.map((x) => (
          <tr key={x.Id}>
            <Std>{x.Id}</Std>
            <Std>{x.Nombre}</Std>
            <Std>
              <Eliminar
                pokemonAEliminar={x}
                actualizarPagina={actualizarPagina}
              />
            </Std>
            <td>
              <Actualizar pokemonAActualizar={x} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
