import React, { FC, useState, useEffect } from "react";
import { ObtenerTipos } from "../../../../Servicios/ServicioTipo";

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
  SImgSuma,
  STitulo,
  SModalBody,
  SModal,
  SContenedorModal,
  SButtonGeneral,
  SButton,
  STextarea,
  SContenedorBotones,
} from "./StyledAgregar";
import { DropList } from "../../../../Componentes/DropList";
import { ObtenerMovimientos } from "../../../../Servicios/ServicioMovimientos";
import Pokebola from "../../../../Multimedia/Pokemon/Agregar/Pokebola.png";
import Suma from "../../../../Multimedia/Pokemon/Agregar/Suma.png";
import { convertirDeImagenABase64 } from "../../../../Utilidades/UtilidadesImagen";
import InputText from "../../../../Componentes/InputText";

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

  const asignarValor = (e: any) => {
    setnuevoPokemon({ ...nuevoPokemon, [e.target.name]: e.target.value });
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
      <SButtonGeneral onClick={handleShow}>
        <SImgBoton seleccion={show} src={Pokebola} alt='pokebola' />
        <SImgSuma src={Suma} alt='suma' />
      </SButtonGeneral>

      <SModal
        show={show}
        onHide={handleClose}
        size='lg'
        dialogClassName={"modalInfo"}>
        <SModalBody>
          <Container>
            <Row>
              <Col>
                <SDivFormLabel>
                  <InputText
                    value={nuevoPokemon.NombrePokemon}
                    onChange={asignarValor}
                    placeholder='Ingrese Nombre'
                    name='NombrePokemon'
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
            <STextarea
              value={nuevoPokemon.Detalle}
              onChange={asignarValor}
              name='Detalle'
              placeholder='Detalle del Pokemon'
              rows={3}
              cols={50}></STextarea>
          </SDivFormLabel>
          {nuevoPokemon.Imagen?.ArchivoImagen ? (
            <SImg src={nuevoPokemon.Imagen.ArchivoImagen} height='200px' />
          ) : (
            <>{nuevoPokemon.Imagen.ArchivoImagen}</>
          )}
          <SDivSolicitudImagen>
            <Form.Control
              type='file'
              onChange={asignarImagen}
              placeholder='Detalle del Pokemon'
            />
          </SDivSolicitudImagen>
        </SModalBody>
        <Modal.Footer>
          <SButton variant='secondary' onClick={handleClose}>
            Cancelar
          </SButton>
          <SButton variant='primary' onClick={agregarNuevoPokemon}>
            Guardar
          </SButton>
        </Modal.Footer>
      </SModal>
    </>
  );
};

export default Agregar;
