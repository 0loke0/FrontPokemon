import React, { FC, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Boton from "../../../../Componentes/Boton";

import { SCard } from "./SCard";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";
import SinInformacion from "../../../../Multimedia/Pokemon/PaginaPokemon/SinInformacion.png";

interface IPropCardPokemon {
  pokemonDetallado: IPokemonDetallado[];
  tomarInformacionPaginacion: any;
  eliminarPokemon: any;
  cantidadRegistros: number;
}
const SContenedorTextoSinInformacion = styled.div`
  text-align: center;
  position: relative;
  left: 50%;
  width: 300px;
  height: 30px;
  transform: translate(-50%, 0);
`;
const SContenedorSinInformacion = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 300px;
  height: 30px;
  transform: translate(-50%);
  border: 2px solid #bec8e7;
  border-radius: 10px;
`;

const SImgSinInformaicon = styled.img`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 150px;
  height: 100px;
  transform: translate(-50%);
  object-fit: contain;
`;

const SDivContenedor = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
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

const LIMITEPORPAGINA = 3;

export const ContenedorCards: FC<IPropCardPokemon> = ({
  pokemonDetallado,
  tomarInformacionPaginacion,
  eliminarPokemon,
  cantidadRegistros,
}) => {
  const [pagina, setpagina] = useState<number>(1);

  useEffect(() => {
    informacionPaginacion();
  }, [pagina]);

  useEffect(() => {
    if (determinarCantidadPaginas() < pagina + 1) {
      setpagina(pagina - 1);
    }
  }, [cantidadRegistros]);

  const determinarCantidadPaginas = () => {
    return Math.ceil(cantidadRegistros / LIMITEPORPAGINA);
  };
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
    tomarInformacionPaginacion({
      Indice: pagina,
      CantidadRegistros: LIMITEPORPAGINA,
    });
  };

  return (
    <>
      <Row xs={1} md={LIMITEPORPAGINA} className='g-4'>
        {pokemonDetallado ? (
          pokemonDetallado.map((data, index) => (
            <SCard pokemon={data} eliminarPokemon={eliminarPokemon} />
          ))
        ) : (
          <>
            <SContenedorSinInformacion>
              <SImgSinInformaicon src={SinInformacion} alt='SinInformacion' />
              <SContenedorTextoSinInformacion>
                Sin Informacion
              </SContenedorTextoSinInformacion>
            </SContenedorSinInformacion>
          </>
        )}
      </Row>
      {pokemonDetallado && (
        <Sdiv>
          <SDivContenedor>
            <SInformacionPaginacion>
              Pagina {pagina + 1}/{determinarCantidadPaginas()}
            </SInformacionPaginacion>
            <Boton
              variant={pagina != 0 ? "outline-primary" : "secondary"}
              ejecutarFuncion={retroceder}
              nombre='<'
            />
            <Boton
              variant='outline-primary'
              ejecutarFuncion={regresarInicio}
              nombre='Inicio'
            />
            <Boton
              variant={
                determinarCantidadPaginas() !== pagina + 1
                  ? "outline-primary"
                  : "secondary"
              }
              ejecutarFuncion={avanzar}
              nombre='>'
            />
          </SDivContenedor>
        </Sdiv>
      )}
    </>
  );
};
