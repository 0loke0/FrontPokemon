import React, { FC, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { IPokemon } from "../../../Interface/Pokemones";
import { buscarStat } from "../../../Servicios/ServicioStats";
import { SCard } from "./SCard";

interface IPropCardPokemon {
  pokemon: IPokemon[];
}

export const CardPokemon: FC<IPropCardPokemon> = ({ pokemon }) => {
  return (
    <Row xs={1} md={3} className='g-4'>
      {pokemon?.map((data) => (
        <SCard pokemon={data} />
      ))}
    </Row>
  );
};
