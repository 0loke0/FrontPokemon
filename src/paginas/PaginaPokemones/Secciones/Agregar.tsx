import React, { FC, useState, useEffect } from "react";
import { obtenerTipos } from "../../../Servicios/ServicioTipo";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import Boton from "../../../Componentes/Boton";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { ITipos, INuevoPokemon } from "../../../Interface/Pokemones";
import { DropList } from "../../../Componentes/DropList";

interface IPropAgregar {
  actualizarPagina: any;
  agregarPokemon: (input: INuevoPokemon) => any;
}
const Sinput = styled.input`
  font-size: 18px;
  margin-top: 2px;
  padding: 5px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid #c9e7ff;
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

const DEFAULTNUEVOPOKEMON: INuevoPokemon = {
  NombrePokemon: "",
  IdTipo: 0,
};

export const Agregar: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [nuevoPokemon, setnuevoPokemon] =
    useState<INuevoPokemon>(DEFAULTNUEVOPOKEMON);
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [tipoSelectionado1, settipoSelectionado1] = useState<string>("");
  const [tipoSelectionado2, settipoSelectionado2] = useState<string>("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    obtenerTipos().then((x) => settipos(x));
  }, []);

  const agregarNuevoPokemon = () => {
    agregarPokemon(nuevoPokemon);
    handleClose();
    actualizarPagina();
  };

  const actualizarNombrePokemon = (e: any) => {
    setnuevoPokemon({ ...nuevoPokemon, NombrePokemon: e.target.value });
  };

  const recogerEventoTipo1 = (x: ITipos) => {
    setnuevoPokemon({ ...nuevoPokemon, IdTipo: x.IdTipo });
    settipoSelectionado1(x.NombreTipo);
  };

  const recogerEventoTipo2 = (x: ITipos) => {
    setnuevoPokemon({ ...nuevoPokemon, IdTipo: x.IdTipo });
    settipoSelectionado2(x.NombreTipo);
  };

  const recogerImagen = (e: any) => {
    console.log(e.target.value);
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
            <Sinput
              type='text'
              required
              placeholder='Ingrese Nombre'
              value={nuevoPokemon.NombrePokemon}
              onChange={actualizarNombrePokemon}
            />
            <div>
              <DropList
                lista={tipos}
                recogerSeleccion={recogerEventoTipo1}
                valorActual={tipoSelectionado1}
                valorAListar='NombreTipo'></DropList>
              <DropList
                lista={tipos}
                recogerSeleccion={recogerEventoTipo2}
                valorActual={tipoSelectionado2}
                valorAListar='NombreTipo'></DropList>
            </div>

            <Form.Label>Imagen</Form.Label>
            <Form.Control type='file' onChange={recogerImagen} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
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
