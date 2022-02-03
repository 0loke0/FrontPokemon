import React, { useEffect, useState, FC } from "react";
import { buscarStat } from "../../../Servicios/ServicioStats";
import { IPokemon, IStats } from "../../../Interface/Pokemones";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { keyframes } from "styled-components";

interface IPropSCard {
  pokemon: IPokemon;
}

const breatheAnimation = keyframes`
    
`;

const StyledCard = styled(Card)`
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #9dccfa;
  box-shadow: 5px 5px 10px #7d7d7d;
  transition: all 0.3s ease 0s;
  transform: translateX(180g);

  &:hover {
    animation-name: ${breatheAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform: rotateY(180deg);
  }
`;

export const SCard: FC<IPropSCard> = ({ pokemon }) => {
  const [stat, setstat] = useState<IStats>();
  const [stylo, setstylo] = useState(false);
  useEffect(() => {
    buscarStat(pokemon.Id).then((x) => setstat(x));
  }, []);

  const activarRespaldo = () => {
    setstylo(true);
  };
  const desActivarRespaldo = () => {
    setstylo(false);
  };
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
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
