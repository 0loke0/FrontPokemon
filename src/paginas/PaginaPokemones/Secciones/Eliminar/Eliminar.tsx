import React, { useState, FC } from "react";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import PokeDelete from "../../../../Multimedia/Pokemon/Eliminar/PokeDelete.png";
import styled from "styled-components";
import { IPokemonDetallado } from "../../../../Interface/PokemonDetallado";
interface IPropPokemonEliminar {
  pokemonAEliminar: IPokemonDetallado;
  eliminarPokemon: any;
}

const STexto = styled.p`
  text-align: center;
`;
const SNegrita = styled.p`
  font-weight: 900;
`;

const SButton = styled.button`
  background-color: transparent;
  position: absolute;
  height: 40px;
  width: 40px;
  border: 1px solid transparent;
  border-radius: 0%;
  top: 1%;
  right: 1%;
`;

const SImg = styled.img`
  position: relative;
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      <SButton onClick={handleShow}>
        <SImg src={PokeDelete} alt='Delete' />
      </SButton>
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
