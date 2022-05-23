import React, { FC, useState, useEffect } from "react";
import { ObtenerTipos } from "../../../../Servicios/ServicioTipo";

import { Col, Container, Modal, Row } from "react-bootstrap";

import {
  ITipos,
  INuevoPokemon,
  IMovimiento,
} from "../../../../Interface/Pokemones";
import {
  SDivFormLabel,
  SImgBoton,
  SImgSuma,
  SModalBody,
  SModal,
  SButtonGeneral,
  SButton,
} from "./StyledAgregar";

import { ObtenerMovimientos } from "../../../../Servicios/ServicioMovimientos";
import Pokebola from "../../../../Multimedia/Pokemon/Agregar/Pokebola.png";
import Suma from "../../../../Multimedia/Pokemon/Agregar/Suma.png";
import { convertirDeImagenABase64 } from "../../../../Utilidades/UtilidadesImagen";
import InputText from "../../../../Componentes/InputText";
import Desplegable from "./Secciones/Desplegable";
import TextArea from "../../../../Componentes/TextArea";
import SeleccionDeImagen from "./Secciones/SeleccionDeImagen";

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
    let temp = { ...nuevoPokemon };
    temp.IdsMovimiento[index] = x;
    setnuevoPokemon({ ...nuevoPokemon, IdsMovimiento: temp.IdsMovimiento });
  };

  const asignarTipo = (x: number, index: number) => {
    let temp = { ...nuevoPokemon };
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
                  <Desplegable
                    listaIdsALlenar={nuevoPokemon.IdsMovimiento}
                    listaReferencias={movimientos}
                    asignarValorSeleccionado={asignarMovimiento}
                    valorAIndicar='IdMovimiento'
                    valorDefecto='Movimiento'
                    valorAListar='NombreMovimiento'
                  />
                </SDivFormLabel>
              </Col>
              <Col>
                <SDivFormLabel>
                  <Desplegable
                    listaIdsALlenar={nuevoPokemon.IdsTipo}
                    listaReferencias={tipos}
                    asignarValorSeleccionado={asignarTipo}
                    valorAIndicar='IdTipo'
                    valorDefecto='Tipos'
                    valorAListar='NombreTipo'
                  />
                </SDivFormLabel>
              </Col>
            </Row>
          </Container>

          <SDivFormLabel>
            <TextArea
              valor={nuevoPokemon.Detalle}
              asignarValor={asignarValor}
              identificador='Detalle'
              placeholder='Detalle del Pokemon'
              rows={3}
              cols={50}
            />
          </SDivFormLabel>

          <SeleccionDeImagen
            asignarImagen={asignarImagen}
            archivoImagen={nuevoPokemon.Imagen.ArchivoImagen}
          />
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
