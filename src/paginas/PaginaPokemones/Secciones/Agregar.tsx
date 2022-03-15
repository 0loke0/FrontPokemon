import React, { FC, useState, useEffect } from "react";
import { ObtenerTipos } from "../../../Servicios/ServicioTipo";
import Button from "react-bootstrap/esm/Button";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Boton from "../../../Componentes/Boton";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import {
  ITipos,
  INuevoPokemon,
  IMovimiento,
} from "../../../Interface/Pokemones";
import { DropList } from "../../../Componentes/DropList";
import { ObtenerMovimientos } from "../../../Servicios/ServicioMovimientos";

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
  IdsTipo: [0, 0],
  IdsMovimiento: [0, 0],
  Imagen: { Nombre: "", ArchivoImagen: "" },
};

export const Agregar: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [nuevoPokemon, setnuevoPokemon] =
    useState<INuevoPokemon>(DEFAULTNUEVOPOKEMON);

  const [nombrePokemon, setnombrePokemon] = useState<string>("");
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);
  const [tipoSelectionado1, settipoSelectionado1] = useState<ITipos>();
  const [tipoSelectionado2, settipoSelectionado2] = useState<ITipos>();
  const [movimientoSelectionado1, setMovimientoSelectionado1] =
    useState<IMovimiento>();
  const [movimientoSelectionado2, setMovimientoSelectionado2] =
    useState<IMovimiento>();
  const [imagen, setimagen] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const construirNuevoPokemon = () => {
    setnuevoPokemon({
      NombrePokemon: nombrePokemon,
      IdsTipo: [
        tipoSelectionado1?.IdTipo ? tipoSelectionado1.IdTipo : 0,
        tipoSelectionado2?.IdTipo ? tipoSelectionado2.IdTipo : 0,
      ],
      IdsMovimiento: [
        movimientoSelectionado1?.IdMovimiento
          ? movimientoSelectionado1.IdMovimiento
          : 0,
        movimientoSelectionado2?.IdMovimiento
          ? movimientoSelectionado2.IdMovimiento
          : 0,
      ],
      Imagen: { Nombre: "ufi", ArchivoImagen: "" },
    });
  };

  const agregarNuevoPokemon = () => {
    agregarPokemon(nuevoPokemon);
    handleClose();
    actualizarPagina();
  };

  const actualizarNombrePokemon = (e: any) => {
    setnombrePokemon(e.target.value);
  };

  const recogerEventoTipo1 = (x: ITipos) => {
    settipoSelectionado1(x);
  };

  const recogerEventoTipo2 = (x: ITipos) => {
    settipoSelectionado2(x);
  };

  const recogerEventoMovimiento1 = (x: IMovimiento) => {
    setMovimientoSelectionado1(x);
  };

  const recogerEventoMovimiento2 = (x: IMovimiento) => {
    setMovimientoSelectionado2(x);
  };

  const recogerImagen = (e: any) => {
    console.log("esto deberia ser la imagen ", e.target.value);
    construirNuevoPokemon();
    console.log("files", e.target.files[0]);

    console.log("====================================");
    console.log(nuevoPokemon);
    console.log("====================================");
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
              value={nombrePokemon}
              onChange={actualizarNombrePokemon}
            />
            <Container>
              <Row>
                <Col>
                  <DropList
                    lista={tipos}
                    recogerSeleccion={recogerEventoTipo1}
                    valorActual={
                      tipoSelectionado1 ? tipoSelectionado1.NombreTipo : "Tipo"
                    }
                    valorAListar='NombreTipo'
                  />
                </Col>
                <Col>
                  <DropList
                    lista={tipos}
                    recogerSeleccion={recogerEventoTipo2}
                    valorActual={
                      tipoSelectionado2 ? tipoSelectionado2.NombreTipo : "Tipo"
                    }
                    valorAListar='NombreTipo'
                  />
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col>
                  <DropList
                    lista={movimientos}
                    recogerSeleccion={recogerEventoMovimiento1}
                    valorActual={
                      movimientoSelectionado1
                        ? movimientoSelectionado1.NombreMovimiento
                        : "Movimiento"
                    }
                    valorAListar='NombreMovimiento'
                  />
                </Col>
                <Col>
                  <DropList
                    lista={movimientos}
                    recogerSeleccion={recogerEventoMovimiento2}
                    valorActual={
                      movimientoSelectionado2
                        ? movimientoSelectionado2.NombreMovimiento
                        : "Movimiento"
                    }
                    valorAListar='NombreMovimiento'
                  />
                </Col>
              </Row>
            </Container>
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
