import React, { useEffect, useState } from "react";
import { IStats } from "../../Interface/Pokemones";
import { ObtenerStats } from "../../Servicios/ServicioStats";
import { Table } from "react-bootstrap";
import styled from "styled-components";
const DEFAULTSTATS: IStats = {
  IdPokemon: 0,
  Ataque: 0,
  Defensa: 0,
  EspecialAtaque: 0,
  EspecialDefensa: 0,
  Velocidad: 0,
  Vida: 0,
};

const Sth = styled.th`
  text-align: center;
`;
const Std = styled.td`
  text-align: center;
`;
const SGenenarlPaginaPokemon = styled.div`
  margin: 3% 10% 3% 10%;
  border: 1px solid blue;
  box-shadow: 0px 0px 15px black;
  background-color: #fff7f7;
  border-radius: 20px;
  padding: 2%;
`;
const PaginaStats = () => {
  const [stats, setstats] = useState<IStats[]>([DEFAULTSTATS]);
  useEffect(() => {
    ObtenerStats().then((x) => setstats(x));
  }, []);

  return (
    <SGenenarlPaginaPokemon>
      <h2>Stats</h2>
      <Table bordered={false} hover={true} variant='light'>
        <thead>
          <tr>
            <Sth>ID Pokemon</Sth>
            <Sth>Ataque</Sth>
            <Sth>Defensa</Sth>
            <Sth>Ataque Especial</Sth>
            <Sth>Defensa Especial</Sth>
            <Sth>Velocidad</Sth>
            <Sth>Vida</Sth>
          </tr>
        </thead>
        <tbody>
          {stats?.map((x) => (
            <tr key={x.IdPokemon}>
              <Std>{x.IdPokemon}</Std>
              <Std>{x.Ataque}</Std>
              <Std>{x.Defensa}</Std>
              <Std>{x.EspecialAtaque}</Std>
              <Std>{x.EspecialDefensa}</Std>
              <Std>{x.Velocidad}</Std>
              <Std>{x.Vida}</Std>
            </tr>
          ))}
        </tbody>
      </Table>
    </SGenenarlPaginaPokemon>
  );
};

export default PaginaStats;
