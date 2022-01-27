import React, { FC, useRef, useState } from "react";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { IPokemon } from "../../../Interface/Pokemones";
import { ActualizarStats } from "./ActualizarStats";
import { ActualizarTipo } from "./ActualizarTipo";
interface IPropActualizar {
  pokemonAActualizar: IPokemon;
}

export const Actualizar: FC<IPropActualizar> = ({ pokemonAActualizar }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [EstadoHijos, setEstadoHijos] = useState(false);
  const ref = useRef(null);

  const handleClick = (event: any) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleClose = () => {
    if (!EstadoHijos) {
      setShow(false);
    }
  };

  const estadoActual = (estado: any) => {
    setEstadoHijos(estado);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Actualizar</Button>

      <Overlay
        show={show}
        target={target}
        placement='right'
        container={ref}
        containerPadding={20}
        onHide={handleClose}
        rootClose={true}>
        <Popover id='popover-contained'>
          <Popover.Header as='h3'>
            Actualizar datos de {pokemonAActualizar.Nombre}
          </Popover.Header>
          <Popover.Body>
            <ActualizarStats
              estadoActual={estadoActual}
              pokemonAActualizar={pokemonAActualizar}
            />
            <ActualizarTipo />
            <p>Habilidades</p>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};
