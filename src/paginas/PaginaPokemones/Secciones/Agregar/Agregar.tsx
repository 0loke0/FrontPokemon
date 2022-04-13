import React, { FC, useState, useEffect } from "react";
import { ObtenerTipos } from "../../../../Servicios/ServicioTipo";
import Button from "react-bootstrap/esm/Button";
import { Col, Container, Modal, Row } from "react-bootstrap";

import { Form } from "react-bootstrap";
import {
  ITipos,
  INuevoPokemon,
  IMovimiento,
} from "../../../../Interface/Pokemones";
import {
  Sinput,
  SDivFormLabel,
  SDivCentrador,
  SDivSolicitudImagen,
  SImg,
  SImgBoton,
  SButton,
  SImgSuma,
} from "./StyledAgregar";
import { DropList } from "../../../../Componentes/DropList";
import { ObtenerMovimientos } from "../../../../Servicios/ServicioMovimientos";
import AgregarIcono from "../../../../Multimedia/Pokemon/Agregar/Pokebola.png";
import Suma from "../../../../Multimedia/Pokemon/Agregar/Suma.png";
import { convertirDeImagenABase64 } from "../../../../Utilidades/UtilidadesImagen";

interface IPropAgregar {
  actualizarPagina: any;
  agregarPokemon: (construirNuevoPokemon: any) => any;
}

const DEFAULTNUEVOPOKEMON: INuevoPokemon = {
  NombrePokemon: "",
  IdsTipo: [0, 0],
  IdsMovimiento: [0, 0],
  Imagen: { Nombre: "", ArchivoImagen: "" },
  Detalle: "",
};

export const Agregar: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [nuevoPokemon, setnuevoPokemon] =
    useState<INuevoPokemon>(DEFAULTNUEVOPOKEMON);
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const agregarNuevoPokemon = async () => {
    await agregarPokemon(nuevoPokemon);
    handleClose();
    actualizarPagina();
  };

  const asignarNombrePokemon = (e: any) => {
    setnuevoPokemon({ ...nuevoPokemon, NombrePokemon: e.target.value });
  };

  const asignarDetallePokemon = (e: any) => {
    setnuevoPokemon({ ...nuevoPokemon, Detalle: e.target.value });
  };

  const asignarMovimiento = (x: number, index: number) => {
    var temp = { ...nuevoPokemon };
    temp.IdsMovimiento[index] = x;
    setnuevoPokemon({ ...nuevoPokemon, IdsMovimiento: temp.IdsMovimiento });
  };

  const asignarTipo = (x: number, index: number) => {
    console.log(nuevoPokemon);

    var temp = { ...nuevoPokemon };
    temp.IdsTipo[index] = x;
    setnuevoPokemon({ ...nuevoPokemon, IdsTipo: temp.IdsTipo });
  };

  const asignarImagen = (e: any) => {
    const file = e.target.files[0];
    convertirDeImagenABase64(file).then((x) => {
      console.log("informacion de la imagen", x);

      var temp = { ...nuevoPokemon };
      temp.Imagen = {
        Nombre: file.name,
        ArchivoImagen: typeof x === "string" ? x : "",
      };
      setnuevoPokemon({ ...nuevoPokemon, Imagen: temp.Imagen });
    });
  };

  return (
    <>
      <SButton onClick={handleShow}>
        <SImgBoton seleccion={show} src={AgregarIcono} alt='pokebola' />
        <SImgSuma src={Suma} alt='suma' />
      </SButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un Pokémon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SDivFormLabel>
            <Form.Label>Nombre</Form.Label>
            <Sinput
              type='text'
              required
              placeholder='Ingrese Nombre'
              value={nuevoPokemon.NombrePokemon}
              onChange={asignarNombrePokemon}
            />
          </SDivFormLabel>

          <Container>
            <Row>
              {nuevoPokemon.IdsMovimiento.map((x, index) => {
                return (
                  <Col>
                    <SDivCentrador
                      ubicacion={index == 0 ? "Izquierda" : "Derecha"}>
                      <DropList
                        valorAIndicar='IdMovimiento'
                        index={index}
                        lista={movimientos}
                        recogerSeleccion={asignarMovimiento}
                        valorDefecto='Movimiento'
                        valorAListar='NombreMovimiento'
                      />
                    </SDivCentrador>
                  </Col>
                );
              })}
            </Row>
            <Row>
              {nuevoPokemon.IdsTipo.map((x, index) => {
                return (
                  <Col>
                    <SDivCentrador
                      ubicacion={index == 0 ? "Izquierda" : "Derecha"}>
                      <DropList
                        valorAIndicar='IdTipo'
                        index={index}
                        lista={tipos}
                        recogerSeleccion={asignarTipo}
                        valorDefecto='Tipos'
                        valorAListar='NombreTipo'
                      />
                    </SDivCentrador>
                  </Col>
                );
              })}
            </Row>
          </Container>

          <SDivFormLabel>
            <Form.Label>Detalle</Form.Label>
            <Sinput
              type='text'
              required
              placeholder='Ingrese descripcion de pokemon'
              value={nuevoPokemon.Detalle}
              onChange={asignarDetallePokemon}
            />
          </SDivFormLabel>

          <SDivSolicitudImagen>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type='file' onChange={asignarImagen} />
            {nuevoPokemon.Imagen?.ArchivoImagen ? (
              <SImg src={nuevoPokemon.Imagen.ArchivoImagen} height='200px' />
            ) : (
              <>{nuevoPokemon.Imagen.ArchivoImagen}</>
            )}
          </SDivSolicitudImagen>
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
