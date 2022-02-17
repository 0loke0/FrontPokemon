import React, { FC } from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Boton from "../../../../Componentes/Boton";
import { IPokemon } from "../../../../Interface/Pokemones";
import { SCard } from "./SCard";

interface IPropCardPokemon {
  pokemon: IPokemon[];
}
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

export const CardPokemon: FC<IPropCardPokemon> = ({ pokemon }) => {
  return (
    <Row xs={1} md={3} className='g-4'>
      {pokemon ? (
        pokemon.map((data) => <SCard pokemon={data} />)
      ) : (
        <SContenedorSinInformacion>
          <SContenidoSinInformacion>Sin Informacion</SContenidoSinInformacion>
        </SContenedorSinInformacion>
      )}
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs lg='1'>
            <Boton
              variant='outline-success'
              ejecutarFuncion={handleShow}
              nombre='Agregar'
            />
          </Col>
          <Col xs lg='1'>
            <BotonCompo
              tipo={"outline-info"}
              logo={iconocasa}
              funcionAEjecutar={regresarInicio}></BotonCompo>{" "}
          </Col>
          <Col xs lg='1'>
            <BotonCompo
              tipo={
                paginacion.ubicacionEnPagina === "final"
                  ? "secondary"
                  : "outline-info"
              }
              logo={flechaSiguiente}
              funcionAEjecutar={avanzar}></BotonCompo>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};
