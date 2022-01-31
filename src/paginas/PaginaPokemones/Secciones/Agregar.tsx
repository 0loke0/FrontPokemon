import React, { FC, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Col, Modal } from "react-bootstrap";
import Boton from "../../../Componentes/Boton";
import { Form } from "react-bootstrap";
import { AgregarPokemon } from "../../../Servicios/ServicioPokemon";
import { Alerta } from "../../../Componentes/Alerta";
interface IPropAgregar {
  actualizarPagina: any;
  agregar: (input: string) => any;
}

export const Agregar: FC<IPropAgregar> = ({ actualizarPagina, agregar }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setinput] = useState<string>("");

  const agregarNuevo = () => {
    agregar(input);
    handleClose();
    actualizarPagina();
  };

  const actualizarInput = (e: any) => {
    setinput(e.target.value);
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
          <Modal.Title>Agregar un Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              type='switch'
              id='custom-switch'
              label='Caracteristicas Aleatorias'
              className='mt-1 mb-2'
            />
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={input}
              onChange={actualizarInput}
            />
            <Form.Text className='text-muted'>
              Nombre para el nuevo pokemon
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={agregarNuevo}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Agregar;
