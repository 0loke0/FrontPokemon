import React, { useEffect, useState, FC } from "react";
import { buscarStat } from "../../../Servicios/ServicioStats";
import { obtenerTipos } from "../../../Servicios/ServicioTipo";
import { IPokemon, IStats } from "../../../Interface/Pokemones";
import { obtenerRelacionTipoPokemon } from "../../../Servicios/ServicioDirectorioTipo";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { keyframes } from "styled-components";

interface IPropSCard {
  pokemon: IPokemon;
}
interface IRelacionTipoPokemon {
  Id: number;
  Nombre: string;
  NombreTipo: string;
}

const StyledCard = styled(Card)`
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #9dccfa;
  box-shadow: 5px 5px 10px #7d7d7d;
  
`;

export const SCard: FC<IPropSCard> = ({ pokemon }) => {
  const [stat, setstat] = useState<IStats>();
  const [tipo, settipo] = useState<IRelacionTipoPokemon[]>([]);

  useEffect(() => {
    buscarStat(pokemon.Id).then((x) => setstat(x));
    obtenerRelacionTipoPokemon(pokemon.Id).then((x) => settipo(x));
  }, []);

  return (
    <Col>
      <StyledCard>
        <Card.Body>
          <Card.Title>{pokemon.Nombre}</Card.Title>
          <Card.Text>Id: {stat?.IdPokemon}</Card.Text>
          <Card.Text>Defensa: {stat?.Defensa}</Card.Text>
          <Card.Text>Ataque Especial: {stat?.EspecialAtaque}</Card.Text>
          <Card.Text>Defensa Especial: {stat?.EspecialDefensa}</Card.Text>
          <Card.Text>Velocidad: {stat?.Velocidad}</Card.Text>
          <Card.Text>Vida: {stat?.Vida}</Card.Text>
          {tipo?.map((x) => (
            <p>{x.NombreTipo}</p>
          ))}
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
