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
  IImagen,
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
  NombrePokemon: "nombre default",
  IdsTipo: [1],
  IdsMovimiento: [2, 3],
  Imagen: { Nombre: "s", ArchivoImagen: "sss" },
};

export const Agregar: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [nuevoPokemon, setnuevoPokemon] =
    useState<INuevoPokemon>(DEFAULTNUEVOPOKEMON);

  const [nombrePokemon, setnombrePokemon] = useState<string>();
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);
  const [tipoSelectionado1, settipoSelectionado1] = useState<ITipos>();
  const [tipoSelectionado2, settipoSelectionado2] = useState<ITipos>();
  const [movimientoSelectionado1, setMovimientoSelectionado1] =
    useState<IMovimiento>();
  const [movimientoSelectionado2, setMovimientoSelectionado2] =
    useState<IMovimiento>();
  const [imagen, setimagen] = useState<IImagen>();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const construirNuevoPokemon = {
    NombrePokemon: nombrePokemon ? nombrePokemon : "",
    IdsTipo: [
      tipoSelectionado1?.IdTipo ? tipoSelectionado1.IdTipo : undefined,
      tipoSelectionado2?.IdTipo ? tipoSelectionado2.IdTipo : undefined,
    ],
    IdsMovimiento: [
      movimientoSelectionado1?.IdMovimiento
        ? movimientoSelectionado1.IdMovimiento
        : undefined,
      movimientoSelectionado2?.IdMovimiento
        ? movimientoSelectionado2.IdMovimiento
        : undefined,
    ],
    Imagen: {
      Nombre: imagen?.Nombre ? imagen.Nombre : "",
      ArchivoImagen: imagen?.ArchivoImagen ? imagen.ArchivoImagen : "",
    },
  };

  const agregarNuevoPokemon = async () => {
    console.log(construirNuevoPokemon);

    await agregarPokemon(construirNuevoPokemon);
    handleClose();
    actualizarPagina();
  };

  const actualizarNombrePokemon = (e: any) => {
    setnombrePokemon(e.target.value);
    // setnuevoPokemon({ ...nuevoPokemon, NombrePokemon: e.target.value });
  };

  const recogerEventoTipo1 = (x: ITipos) => {
    var temp = { ...nuevoPokemon };

    console.log("longitud ", temp.IdsTipo.length);

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

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const tomarImagen = (e: any) => {
    const file = e.target.files[0];
    convertBase64(file).then((x) =>
      setimagen({
        Nombre: file.name,
        ArchivoImagen: typeof x === "string" ? x : "",
      })
    );
  };

  return (
    <>
      {console.log("infro", nuevoPokemon)}
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
                {}
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
            <Form.Control type='file' onChange={tomarImagen} />
            {imagen?.ArchivoImagen ? (
              <img src={imagen.ArchivoImagen} height='200px' />
            ) : (
              <></>
            )}
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