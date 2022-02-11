import React, { useEffect, useState, FC } from "react";
import { buscarStat } from "../../../Servicios/ServicioStats";
import { obtenerTipos } from "../../../Servicios/ServicioTipo";
import { IPokemon, IStats } from "../../../Interface/Pokemones";
import { obtenerRelacionTipoPokemon } from "../../../Servicios/ServicioDirectorioTipo";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Row } from "react-bootstrap";

interface IPropSCard {
  pokemon: IPokemon;
}
interface IRelacionTipoPokemon {
  Id: number;
  Nombre: string;
  NombreTipo: string;
}
// const SCardContenedor = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: #ffffff;
//   border-radius: 5%;
//   margin: 4%;
//   border: 2px solid #8cd4f5;
//   padding: 10px;
//   box-shadow: 5px 5px 10px #a8a4a4;
// `;

const SDivTitulo = styled.div`
  text-align: right;
  margin: 2%;
  font-family: monospace;
  font-size: x-large;
`;

const SCol = styled(Col)`
  margin: 1% 4%;
  width: 20%;
  height: 40px;
  text-align: center;
  border: 1px solid #29c5f1;
  border-radius: 10%;
`;
const SContenedorImagen = styled.div`
  position: relative;
  top: 0%;
  left: 50%;
  width: 95%;
  height: 200px;
  background-color: #82d1d6;
  border-radius: 5%;
  border: 2px Solid black;
  transform: translate(-50%, 0%);
`;

const SContenedorTipo1 = styled.div`
  position: relative;
  width: 30%;
  height: 15%;
  background-color: #82d1d6;
  border-radius: 30%;
  border: 2px Solid black;
  transform: translate(-25%, -50%);
`;
const SContenedorTipo2 = styled.div`
  position: relative;
  width: 30%;
  height: 15%;
  background-color: #82d1d6;
  border-radius: 30%;
  border: 2px Solid black;
  transform: translate(80%, -150%);
`;

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
          {/* <>
            <SDivTitulo>Titulo</SDivTitulo>
            <SContenedorImagen>
              <SContenedorTipo1></SContenedorTipo1>
              <SContenedorTipo2></SContenedorTipo2>
            </SContenedorImagen>
            <Row>
              <SCol>info</SCol>
              <SCol>info</SCol>
            </Row>
            <Row>
              <SCol>info</SCol>
              <SCol>info</SCol>
            </Row>
            <Row>
              <SCol>info</SCol>
              <SCol>info</SCol>
            </Row>
          </> */}
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
