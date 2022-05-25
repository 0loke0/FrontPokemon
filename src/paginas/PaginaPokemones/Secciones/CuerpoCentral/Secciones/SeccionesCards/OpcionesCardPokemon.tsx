import React, { FC, useEffect, useRef, useState } from "react";
import { Overlay, Popover } from "react-bootstrap";
import styled from "styled-components";
import { IPokemonDetallado } from "../../../../../../Interface/PokemonDetallado";

import Opciones from "../../../../../../Multimedia/Pokemon/OpcionesCard/TuercaPoke.png";

import { Editar } from "./OpcionesCards/Editar/Editar";
import { Eliminar } from "./OpcionesCards/Eliminar/Eliminar";

interface IPropOpcionesCardPokemon {
  pokemon: IPokemonDetallado;
  eliminarPokemon: any;
  actualizarPagina: any;
}
const SButton = styled.button`
  background-color: transparent;
  position: absolute;
  height: 30px;
  width: 30px;
  border: 1px solid transparent;
  border-radius: 0%;
  top: 10px;
  right: 2%;
`;
const SImg = styled.img`
  position: relative;
  height: 30px;
  width: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SOverlay = styled(Overlay)`
  z-index: -1;
`;
const SPopoverBody = styled(Popover.Body)`
  text-align: center;
`;

export const OpcionesCardPokemon: FC<IPropOpcionesCardPokemon> = ({
  pokemon,
  eliminarPokemon,
  actualizarPagina,
}) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setShow(false);
  }, [pokemon]);

  const handleClick = (event: any) => {
    setShow(!show);
    setTarget(event.target);
  };

  const cerrarVenta = () => {
    setShow(!show);
  };

  return (
    <div ref={ref}>
      <SButton onClick={handleClick}>
        <SImg src={Opciones} alt='Opciones' />
      </SButton>

      <SOverlay
        show={show}
        target={target}
        placement='bottom'
        container={ref}
        containerPadding={20}
        rootClose={true}>
        <Popover id='popover-contained'>
          <Popover.Header as='h3'>Opciones</Popover.Header>
          <SPopoverBody>
            <Editar
              pokemonAActualizar={pokemon}
              cerrarVenta={cerrarVenta}
              actualizarPagina={actualizarPagina}></Editar>
            <Eliminar
              eliminarPokemon={eliminarPokemon}
              pokemonAEliminar={pokemon}
              cerrarVenta={cerrarVenta}></Eliminar>
          </SPopoverBody>
        </Popover>
      </SOverlay>
    </div>
  );
};
