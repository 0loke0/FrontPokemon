import React, { useEffect, useState, FC } from "react";
import { buscarStat } from "../../../../Servicios/ServicioStats";
import { obtenerTipos } from "../../../../Servicios/ServicioTipo";
import { IPokemon, IStats } from "../../../../Interface/Pokemones";
import { obtenerRelacionTipoPokemon } from "../../../../Servicios/ServicioDirectorioTipo";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Row } from "react-bootstrap";

interface IPropSCard {
  pokemon: IPokemon;
}
interface IRelacionTipoPokemon {
  Id: number;
  Nombre: string;
  IdTipo: number;
  NombreTipo: string;
}

let coloresTipos = (idTipo: number) => {
  switch (idTipo) {
    case 1:
      return `#9e9aa5 `;
    case 2:
      return `#309afc`;
    case 3:
      return `#a8b82c`;
    case 4:
      return `#7e6ad4`;
    case 5:
      return `#ffe199`;
    case 6:
      return `#7474ae`;
    case 7:
      return `#ed4c2f`;
    case 8:
      return `#feaaff`;
    case 9:
      return `#7adbfb`;
    case 10:
      return `#b85742`;
    case 11:
      return `#bcbbab`;
    case 12:
      return `#7ec958`;
    case 13:
      return `#de6590`;
    case 14:
      return `#bfab68`;
    case 15:
      return `#6a574c`;
    case 16:
      return `#dbbf55`;
    case 17:
      return `#a65e9a`;
    case 18:
      return `#7199e0`;
    default:
      return `#67a290`;
  }
};

const SDivTitulo = styled.div`
  text-align: right;
  margin: 2%;
  font-family: monospace;
  font-size: x-large;
`;
const SDivIdentificador = styled.div`
  border-radius: 50%;
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
  border: 3px Solid black;
  transform: translate(-50%, 0%);
`;

const SContenedorTipo1 = styled.div.attrs((props: { tipo: number }) => props)`
  position: relative;
  width: 30%;
  height: 15%;
  background-color: ${(props) => {
    return coloresTipos(props.tipo);
  }};
  border-radius: 30%;
  border: 1px Solid black;
  transform: translate(-25%, -50%);
  text-align: center;
`;
const SContenedorTipo2 = styled.div.attrs((props: { tipo: number }) => props)`
  position: relative;
  width: 30%;
  height: 15%;
  background-color: ${(props) => {
    return coloresTipos(props.tipo);
  }};
  border-radius: 30%;
  border: 1px Solid black;
  transform: translate(80%, -150%);
  text-align: center;
`;

const StyledCard = styled(Card)`
  padding: 5px;
  border-radius: 10px;
  border: 4px solid #9dccfa;
  box-shadow: 5px 5px 10px #7d7d7d;
  background-color: #ffdee9;
  background-image: linear-gradient(0deg, #d3fcff 0%, #feffff 100%);
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
          <>
            <SDivTitulo>{pokemon.Nombre}</SDivTitulo>
            <SContenedorImagen>
              {tipo[0] && (
                <SContenedorTipo1 tipo={tipo[0].IdTipo}>
                  {tipo[0].NombreTipo}
                </SContenedorTipo1>
              )}
              {tipo[1] && (
                <SContenedorTipo2 tipo={tipo[1].IdTipo}>
                  {tipo[1].NombreTipo}
                </SContenedorTipo2>
              )}
            </SContenedorImagen>
            <Row>
              <SCol>Ataque: {stat?.Ataque}</SCol>
              <SCol>Defensa: {stat?.Defensa}</SCol>
            </Row>
            <Row>
              <SCol>Atk. Especial: {stat?.EspecialAtaque}</SCol>
              <SCol>Def. Especial: {stat?.EspecialDefensa}</SCol>
            </Row>
            <Row>
              <SCol>Velocidad: {stat?.Velocidad}</SCol>
              <SCol>Vida: {stat?.Vida}</SCol>
            </Row>
          </>
          {/* <Card.Title>{pokemon.Nombre}</Card.Title>
          <Card.Text>Id: {stat?.IdPokemon}</Card.Text>
          <Card.Text>Defensa: {stat?.Defensa}</Card.Text>
          <Card.Text>Ataque Especial: {stat?.EspecialAtaque}</Card.Text>
          <Card.Text>Defensa Especial: {stat?.EspecialDefensa}</Card.Text>
          <Card.Text>Velocidad: {stat?.Velocidad}</Card.Text>
          <Card.Text>Vida: {stat?.Vida}</Card.Text>
          {tipo?.map((x) => (
            <p>{x.NombreTipo}</p>
          ))} */}
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
