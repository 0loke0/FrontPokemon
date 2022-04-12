import React, { FC, useState, useEffect } from "react";
import { ObtenerTipos } from "../../../../Servicios/ServicioTipo";
import Button from "react-bootstrap/esm/Button";
import { Col, Container, Modal, Row } from "react-bootstrap";

import { Form } from "react-bootstrap";
import {
  ITipos,
  IEstructuraNuevoPokemon,
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
import styled from "styled-components";

interface IPropAgregar {
  actualizarPagina: any;
  agregarPokemon: (construirNuevoPokemon: any) => any;
}

const DEFAULTNUEVOPOKEMON: IEstructuraNuevoPokemon = {
  NombrePokemon: "",
  IdsTipo: [
    { IdTipo: 0, NombreTipo: "Tipo" },
    { IdTipo: 0, NombreTipo: "Tipo" },
  ],
  IdsMovimiento: [
    { IdMovimiento: 0, NombreMovimiento: "Movimiento", Valor: 0 },
    { IdMovimiento: 0, NombreMovimiento: "Movimiento", Valor: 0 },
  ],
  Imagen: { Nombre: "", ArchivoImagen: "" },
  Detalle: "",
};

const SContenedorMovimientos = styled.div<{ index: number }>`
  background-color: ${({ index }) => {
    return index === 0 ? "red" : "blue";
  }}; ;
`;

const SContenedorTipos = styled.div`
  background-color: transparent;
`;

export const Agregar: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [nuevoPokemon, setnuevoPokemon] =
    useState<IEstructuraNuevoPokemon>(DEFAULTNUEVOPOKEMON);
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const construirNuevoPokemon = () => ({
    NombrePokemon: nuevoPokemon.NombrePokemon,
    IdsTipo: nuevoPokemon.IdsTipo,
    IdsMovimiento: [
      nuevoPokemon.IdsMovimiento[0]?.IdMovimiento
        ? nuevoPokemon.IdsMovimiento[0]?.IdMovimiento
        : undefined,
      nuevoPokemon.IdsMovimiento[1]?.IdMovimiento
        ? nuevoPokemon.IdsMovimiento[1]?.IdMovimiento
        : undefined,
    ],
    Imagen: {
      Nombre: nuevoPokemon.Imagen?.Nombre ? nuevoPokemon.Imagen?.Nombre : "",
      ArchivoImagen: nuevoPokemon.Imagen?.ArchivoImagen
        ? nuevoPokemon.Imagen?.ArchivoImagen
        : "",
    },
    Detalle: nuevoPokemon.Detalle ? nuevoPokemon.Detalle : "",
  });

  const agregarNuevoPokemon = async () => {
    await agregarPokemon(construirNuevoPokemon());
    handleClose();
    actualizarPagina();
  };

  const actualizarNombrePokemon = (e: any) => {
    setnuevoPokemon({ ...nuevoPokemon, NombrePokemon: e.target.value });
  };

  const actualizarDetalle = (e: any) => {
    setnuevoPokemon({ ...nuevoPokemon, Detalle: e.target.value });
  };

  const recogerEventoTipo = (x: ITipos, index: number) => {
    var temp = { ...nuevoPokemon };
    temp.IdsTipo[index] = x;
    setnuevoPokemon({ ...nuevoPokemon, IdsTipo: temp.IdsTipo });
  };

  const recogerEventoMovimiento = (x: IMovimiento, index: number) => {
    var temp = { ...nuevoPokemon };
    temp.IdsMovimiento[index] = x;
    setnuevoPokemon({ ...nuevoPokemon, IdsMovimiento: temp.IdsMovimiento });
  };

  const tomarImagen = (e: any) => {
    const file = e.target.files[0];
    convertirDeImagenABase64(file).then((x) => {
      console.log("informacion de la imagen", file, x);

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
              onChange={actualizarNombrePokemon}
            />
          </SDivFormLabel>

          <Container>
            <Row>
              {nuevoPokemon.IdsMovimiento.map((x, index) => {
                return (
                  <Col>
                    <SDivCentrador
                      ubicacion={index == 0 ? "Izquierda" : "Derecha"}>
                      <SContenedorMovimientos index={index}>
                        <DropList
                          index={index}
                          lista={movimientos}
                          recogerSeleccion={recogerEventoMovimiento}
                          valorActual={x.NombreMovimiento}
                          valorAListar='NombreMovimiento'
                        />
                      </SContenedorMovimientos>
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
                      <SContenedorTipos>
                        <DropList
                          index={index}
                          lista={tipos}
                          recogerSeleccion={recogerEventoTipo}
                          valorActual={x.NombreTipo}
                          valorAListar='NombreTipo'
                        />
                      </SContenedorTipos>
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
              onChange={actualizarDetalle}
            />
          </SDivFormLabel>

          <SDivSolicitudImagen>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type='file' onChange={tomarImagen} />
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
