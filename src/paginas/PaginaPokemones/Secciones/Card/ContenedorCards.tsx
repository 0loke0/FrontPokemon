import React, { FC, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Boton from "../../../../Componentes/Boton";
import { IPokemon } from "../../../../Interface/Pokemones";
import {
  ObtenerCantidadRegistrosPokemon,
  ObtenerPokemones,
} from "../../../../Servicios/ServicioPokemon";
import { SCard } from "./SCard";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";

interface IPropCardPokemon {
  PokemonDetallado: IPokemonDetallado[];
  TomarInformaiconPaginacion: any;
  eliminarPokemon: any;
  cantidadRegistros: number;
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
  position: relative;
  bottom: -10%;
  margin: 5px;
  padding: 5px;
`;

const SInformacionPaginacion = styled.div`
  text-align: center;
  font-family: Poiret One;
  font-weight: 800;
`;

const SContenidoSinInformacion = styled.p`
  text-align: center;
`;

const LIMITEPORPAGINA = 3;

export const ContenedorCards: FC<IPropCardPokemon> = ({
  PokemonDetallado,
  TomarInformaiconPaginacion,
  eliminarPokemon,
  cantidadRegistros,
}) => {
  const [pagina, setpagina] = useState<number>(0);

  useEffect(() => {
    informacionPaginacion();
  }, [pagina]);

  const retroceder = () => {
    if (pagina > 0) {
      setpagina(pagina - 1);
    }
  };

  const avanzar = () => {
    if (cantidadRegistros > (pagina + 1) * LIMITEPORPAGINA)
      setpagina(pagina + 1);
  };

  const regresarInicio = () => {
    setpagina(0);
  };

  const informacionPaginacion = () => {
    TomarInformaiconPaginacion({
      Indice: pagina,
      CantidadRegistros: LIMITEPORPAGINA,
    });
  };

  return (
    <>
      <Row xs={1} md={LIMITEPORPAGINA} className='g-4'>
        {PokemonDetallado ? (
          PokemonDetallado.map((data, index) => (
            <SCard pokemon={data} eliminarPokemon={eliminarPokemon} />
          ))
        ) : (
          <SContenedorSinInformacion>
            <SContenidoSinInformacion>Sin Informacion</SContenidoSinInformacion>
          </SContenedorSinInformacion>
        )}
      </Row>
      {PokemonDetallado && (
        <Sdiv>
          <SDivContenedor>
            <SInformacionPaginacion>
              Pagina {pagina + 1}/
              {Math.ceil(cantidadRegistros / LIMITEPORPAGINA)}
            </SInformacionPaginacion>
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
