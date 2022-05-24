import React, { useState, FC } from "react";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import PokeDelete from "../../../../../../../../Multimedia/Pokemon/Eliminar/PokeDelete.png";

import { IPokemonDetallado } from "../../../../../../../../Interface/PokemonDetallado";
import { SButton, SImg, SModalBody, SNegrita, STexto } from "./StyledEliminar";

interface IPropPokemonEliminar {
  pokemonAEliminar: IPokemonDetallado;
  eliminarPokemon: any;
  cerrarVenta: any;
}

export const Eliminar: FC<IPropPokemonEliminar> = ({
  pokemonAEliminar,
  eliminarPokemon,
  cerrarVenta,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const borrarPokemon = () => {
    eliminarPokemon(pokemonAEliminar.Id);
    handleClose();
  };

  const cerrarVentanas = () => {
    handleClose();
    cerrarVenta();
  };

  return (
    <>
      <SButton onClick={handleShow}>
        <SImg src={PokeDelete} alt='Delete' />
      </SButton>
      <Modal show={show} onHide={cerrarVentanas}>
        <SModalBody>
          <STexto>
            Se borrara el Pokemon
            <SNegrita>{pokemonAEliminar.Nombre}</SNegrita>
          </STexto>
          <STexto>¿Esta seguro que lo desea eliminar?</STexto>
        </SModalBody>
        <Modal.Footer>
          <Button variant='secondary' onClick={cerrarVentanas}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={borrarPokemon}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
