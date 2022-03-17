import React, { FC, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Boton from "../../../../Componentes/Boton";
import { IPokemon } from "../../../../Interface/Pokemones";
import { ObtenerPokemones } from "../../../../Servicios/ServicioPokemon";
import { SCard } from "./SCard";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";

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

const SDivContenedor = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Sdiv = styled.div`
  margin: 5px;
  padding: 5px;
`;

const SContenidoSinInformacion = styled.p`
  text-align: center;
`;

const LIMITEPORPAGINA = 3;

const PAGINACIONDEFAULT = {
  inicioPagina: 0,
  finPagina: LIMITEPORPAGINA,
  ubicacionEnPagina: "",
};

export const ContenedorCards: FC<IPropCardPokemon> = ({ pokemon }) => {
  const [paginacion, setPaginacion] = useState(PAGINACIONDEFAULT);
  const [PokemonDetallado, setPokemonDetallado] =
    useState<IPokemonDetallado[]>();

  useEffect(() => {
    ObtenerPokemones().then((x) => setPokemonDetallado(x));
  }, []);

  const retroceder = () => {
    if (paginacion.inicioPagina > 0) {
      setPaginacion({
        ...paginacion,
        inicioPagina: paginacion.inicioPagina - LIMITEPORPAGINA,
        finPagina: paginacion.finPagina - LIMITEPORPAGINA,
        ubicacionEnPagina: "entremedio",
      });
    } else {
      setPaginacion({
        ...paginacion,
        ubicacionEnPagina: "inicio",
      });
    }
  };

  const avanzar = () => {
    if (paginacion.finPagina < pokemon.length) {
      setPaginacion({
        ...paginacion,
        inicioPagina: paginacion.inicioPagina + LIMITEPORPAGINA,
        finPagina: paginacion.finPagina + LIMITEPORPAGINA,
        ubicacionEnPagina: "entremedio",
      });
    } else {
      setPaginacion({
        ...paginacion,
        ubicacionEnPagina: "final",
      });
    }
  };

  const regresarInicio = () => {
    setPaginacion(PAGINACIONDEFAULT);
  };

  return (
    <>
      <Row xs={1} md={3} className='g-4'>
        {PokemonDetallado ? (
          PokemonDetallado.map((data, index) => {
            if (
              index >= paginacion.inicioPagina &&
              index < paginacion.finPagina
            )
              return <SCard pokemon={data} />;
          })
        ) : (
          <SContenedorSinInformacion>
            <SContenidoSinInformacion>Sin Informacion</SContenidoSinInformacion>
          </SContenedorSinInformacion>
        )}
      </Row>
      {pokemon && (
        <Sdiv>
          <SDivContenedor>
            <Boton
              variant='outline-primary'
              ejecutarFuncion={retroceder}
              nombre='<'
            />
            <Boton
              variant='outline-primary'
              ejecutarFuncion={regresarInicio}
              nombre='Inicio'
            />
            <Boton
              variant='outline-primary'
              ejecutarFuncion={avanzar}
              nombre='>'
            />
          </SDivContenedor>
        </Sdiv>
      )}
    </>
  );
};