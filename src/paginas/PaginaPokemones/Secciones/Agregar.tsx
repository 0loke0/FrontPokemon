import React, { FC, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import Boton from "../../../Componentes/Boton";
import { Form } from "react-bootstrap";
interface IPropAgregar {
  actualizarPagina: any;
  agregarPokemon: (input: string) => any;
}

export const Agregar: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombrePokemon, setnombrePokemon] = useState<string>("");

  const agregarNuevoPokemon = () => {
    agregarPokemon(nombrePokemon);
    handleClose();
    actualizarPagina();
  };

  const actualizarNombrePokemon = (e: any) => {
    setnombrePokemon(e.target.value);
  };
  return (
    <>
      <Boton
        variant='outline-success'
        ejecutarFuncion={handleShow}
        nombre='Agregar'
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un Pokémon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={nombrePokemon}
              onChange={actualizarNombrePokemon}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={agregarNuevoPokemon}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Agregar;
