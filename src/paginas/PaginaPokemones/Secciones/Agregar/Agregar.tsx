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
  STitulo,
  SModalBody,
  SModal,
  SContenedorModal,
} from "./StyledAgregar";
import { DropList } from "../../../../Componentes/DropList";
import { ObtenerMovimientos } from "../../../../Servicios/ServicioMovimientos";
import AgregarIcono from "../../../../Multimedia/Pokemon/Agregar/Pokebola.png";
import Suma from "../../../../Multimedia/Pokemon/Agregar/Suma.png";
import { convertirDeImagenABase64 } from "../../../../Utilidades/UtilidadesImagen";
import DragDrop from "./DragDrop/DragDrop";

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
    var temp = { ...nuevoPokemon };
    temp.IdsTipo[index] = x;
    setnuevoPokemon({ ...nuevoPokemon, IdsTipo: temp.IdsTipo });
  };

  const asignarImagen = (e: any) => {
    const file = e.target.files[0];
    convertirDeImagenABase64(file).then((x) => {
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

      <SModal
        show={show}
        onHide={handleClose}
        size='lg'
        dialogClassName={"modalInfo"}>
        <SModalBody>
          <STitulo>Nuevo Pokemon</STitulo>
          {/* <DragDrop tomarTipos={tomarTipos} /> */}
          <Container>
            <Row>
              <Col>
                <SDivFormLabel>
                  <Sinput
                    type='text'
                    required
                    placeholder='Ingrese Nombre'
                    value={nuevoPokemon.NombrePokemon}
                    onChange={asignarNombrePokemon}
                  />
                </SDivFormLabel>
              </Col>
            </Row>

            <Row>
              <Col>
                <SDivFormLabel>
                  {nuevoPokemon.IdsMovimiento.map((x, index) => {
                    return (
                      <Row>
                        <DropList
                          valorAIndicar='IdMovimiento'
                          index={index}
                          lista={movimientos}
                          recogerSeleccion={asignarMovimiento}
                          valorDefecto='Movimiento'
                          valorAListar='NombreMovimiento'
                        />
                      </Row>
                    );
                  })}
                </SDivFormLabel>
              </Col>
              <Col>
                <SDivFormLabel>
                  {nuevoPokemon.IdsTipo.map((x, index) => {
                    return (
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
                    );
                  })}
                </SDivFormLabel>
              </Col>
            </Row>
          </Container>

          <SDivFormLabel>
            <Sinput
              size={150}
              type='text'
              required
              placeholder='Ingrese Descripcion de pokemon'
              value={nuevoPokemon.Detalle}
              onChange={asignarDetallePokemon}
            />
            <textarea
              value={nuevoPokemon.Detalle}
              onChange={asignarDetallePokemon}
              name='textarea'
              rows={10}
              cols={50}>
              Write something here
            </textarea>
          </SDivFormLabel>
          {nuevoPokemon.Imagen?.ArchivoImagen ? (
            <SImg src={nuevoPokemon.Imagen.ArchivoImagen} height='200px' />
          ) : (
            <>{nuevoPokemon.Imagen.ArchivoImagen}</>
          )}
          <SDivSolicitudImagen>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type='file' onChange={asignarImagen} />
          </SDivSolicitudImagen>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={agregarNuevoPokemon}>
            Guardar
          </Button>
        </SModalBody>
      </SModal>
    </>
  );
};

export default Agregar;
