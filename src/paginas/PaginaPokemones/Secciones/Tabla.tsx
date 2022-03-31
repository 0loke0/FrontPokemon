import React, { FC } from "react";
import Table from "react-bootstrap/Table";
// import { Eliminar } from "../Eliminar/Eliminar";
import { Editar } from "./Editar/Editar";
import styled from "styled-components";
import { IPokemon } from "../../../Interface/Pokemones";

const Sth = styled.th`
  text-align: center;
`;
const Std = styled.td`
  text-align: center;
`;
const SContenedorSinInformacion = styled.div`
  position: relative;
  left: 50%;
  width: 300px;
  height: 30px;
  transform: translate(-50%, 0);
  border: 2px solid #bec8e7;
  border-radius: 10px;
`;

const SContenidoSinInformacion = styled.p`
  text-align: center;
`;

interface IPropTabla {
  pokemon: IPokemon[];
  eliminarPokemon: any;
}

export const Tabla: FC<IPropTabla> = ({ pokemon, eliminarPokemon }) => {
  return (
    <>
      {pokemon?.length > 0 ? (
        <Table bordered={false} hover={true} variant='light'>
          <thead>
            <tr>
              <Sth>Nombre</Sth>
              <Sth>Eliminar</Sth>
              <Sth>Actualizar</Sth>
            </tr>
          </thead>
          <tbody>
            {pokemon?.map((x) => (
              <tr key={x.Id}>
                <Std>
                  {x.Id}: {x.Nombre}
                </Std>
                <Std>
                  {/* <Eliminar
                    pokemonAEliminar={x}
                    eliminarPokemon={eliminarPokemon}
                  /> */}
                </Std>
                <td>{/* <Actualizar pokemonAActualizar={x} /> */}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <SContenedorSinInformacion>
          <SContenidoSinInformacion>Sin Informacion</SContenidoSinInformacion>
        </SContenedorSinInformacion>
      )}
    </>
  );
};
