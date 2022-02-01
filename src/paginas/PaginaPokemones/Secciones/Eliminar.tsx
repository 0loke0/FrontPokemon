import React, { useState, FC } from "react";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import { IPokemon } from "../../../Interface/Pokemones";
import styled from "styled-components";
interface IPropPokemonEliminar {
  pokemonAEliminar: IPokemon;
  eliminarPokemon: any;
}

const STexto = styled.p`
  text-align: center;
`;
const SNegrita = styled.p`
  font-weight: 900;
`;
export const Eliminar: FC<IPropPokemonEliminar> = ({
  pokemonAEliminar,
  eliminarPokemon,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const borrarPokemon = () => {
    eliminarPokemon(pokemonAEliminar.Id);
    handleClose();
  };
  return (
    <>
      <Button variant='outline-danger' onClick={handleShow}>
        Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <STexto>
            Se borrara el Pokemon
            <SNegrita>{pokemonAEliminar.Nombre}</SNegrita>
          </STexto>
          <STexto>¿Esta seguro que lo desea eliminar?</STexto>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
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
