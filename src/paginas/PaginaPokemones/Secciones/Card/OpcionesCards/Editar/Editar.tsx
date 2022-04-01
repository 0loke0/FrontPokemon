import React, { FC, useRef, useState } from "react";
import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";

import { IPokemonDetallado } from "../../../../../../Interface/PokemonDetallado";
import styled from "styled-components";
import Edicion from "../../../../../../Multimedia/Pokemon/Editar/Edicion.png";
import { Button, Modal } from "react-bootstrap";

interface IPropActualizar {
  pokemonAActualizar: IPokemonDetallado;
  cerrarVenta: any;
}

const SButton = styled.button`
  background-color: transparent;
  position: relative;
  height: 40px;
  width: 40px;
  border: 1px solid transparent;
  border-radius: 0%;
  top: 1%;
  right: 12%;
`;

const SImg = styled.img`
  position: relative;
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Editar: FC<IPropActualizar> = ({
  pokemonAActualizar,
  cerrarVenta,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditarPokemon = () => {};
  const cerrarVentanas = () => {
    handleClose();
    cerrarVenta();
  };

  return (
    <>
      <SButton onClick={handleShow}>
        <SImg src={Edicion} alt='Delete' />
      </SButton>

      <Modal show={show} onHide={cerrarVentanas}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <p>{pokemonAActualizar.Nombre}</p>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={EditarPokemon}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
