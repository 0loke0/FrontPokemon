import React, { FC, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import Boton from "../../../Componentes/Boton";
import { Form } from "react-bootstrap";

interface IPropActualizarStats {}

export const ActualizarTipo: FC<IPropActualizarStats> = ({}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setinput] = useState<string>("");

  const funcionGenerica = () => {};
  const actualizarInput = (e: any) => {
    setinput(e.target.value);
  };
  return (
    <>
      <Boton
        variant='outline-success'
        ejecutarFuncion={handleShow}
        nombre='Tipos'
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Tipos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={input}
              onChange={actualizarInput}
            />
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={input}
              onChange={actualizarInput}
            />
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={input}
              onChange={actualizarInput}
            />
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={input}
              onChange={actualizarInput}
            />
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={input}
              onChange={actualizarInput}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={funcionGenerica}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ActualizarTipo;
