import React, { useEffect, useState, FC } from "react";
import { buscarStat } from "../../../../Servicios/ServicioStats";
import { obtenerTipos } from "../../../../Servicios/ServicioTipo";
import { IPokemon, IStats } from "../../../../Interface/Pokemones";
import { obtenerRelacionTipoPokemon } from "../../../../Servicios/ServicioDirectorioTipo";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import {
  SCol1,
  SCol2,
  SCol3,
  SCol4,
  SCol5,
  SCol6,
  SContenedorImagen,
  SContenedorTipo1,
  SContenedorTipo2,
  SDivIdentificador,
  SDivTitulo,
  SRow,
  StyledCard,
} from "./StylosPokemon";

interface IPropSCard {
  pokemon: IPokemon;
}
interface IRelacionTipoPokemon {
  Id: number;
  Nombre: string;
  IdTipo: number;
  NombreTipo: string;
}

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
          <SDivIdentificador>{pokemon.Id}</SDivIdentificador>
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
          <SRow>
            <SCol1>Ataque: {stat?.Ataque}</SCol1>
            <SCol2>Def. Especial: {stat?.EspecialDefensa}</SCol2>
          </SRow>
          <SRow>
            <SCol3>Defensa: {stat?.Defensa}</SCol3>
            <SCol4>Atk. Especial: {stat?.EspecialAtaque}</SCol4>
          </SRow>
          <SRow>
            <SCol5>Vida: {stat?.Vida}</SCol5>
            <SCol6>Velocidad: {stat?.Velocidad}</SCol6>
          </SRow>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
