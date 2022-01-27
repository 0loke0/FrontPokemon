import React, { useState, FC } from "react";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import { IPokemon } from "../../../Interface/Pokemones";
import { EliminarPokemon } from "../../../Servicios/ServicioPokemon";
interface IPropPokemonEliminar {
  pokemonAEliminar: IPokemon;
  actualizarPagina: any;
}

export const Eliminar: FC<IPropPokemonEliminar> = ({
  pokemonAEliminar,
  actualizarPagina,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Borrar = () => {
    EliminarPokemon(pokemonAEliminar.Id);
    actualizarPagina();
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
          <p>
            Se borrara el Pokemon: "{pokemonAEliminar.Nombre}". Esta seguro que
            lo desea eliminar?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='danger' onClick={Borrar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
