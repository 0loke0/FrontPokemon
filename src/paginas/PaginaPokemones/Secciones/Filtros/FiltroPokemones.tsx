import React, { FC, useState, useEffect } from "react";
import { ObtenerTipos } from "../../../../Servicios/ServicioTipo";
import Button from "react-bootstrap/esm/Button";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";

import { Form } from "react-bootstrap";
import {
  ITipos,
  INuevoPokemon,
  IMovimiento,
} from "../../../../Interface/Pokemones";

import { DropList } from "../../../../Componentes/DropList";
import { ObtenerMovimientos } from "../../../../Servicios/ServicioMovimientos";
import FondoFiltro from "../../../../Multimedia/Pokemon/Filtro/FondoFiltro.png";
import FrenteFiltro from "../../../../Multimedia/Pokemon/Filtro/FrenteFiltro.png";
import ImagenFotoGenerico from "../../../../Multimedia/Pokemon/Filtro/ImagenFotoGenerico.png";

import Vida from "../../../../Multimedia/Pokemon/Card/Vida.png";
import Velocidad from "../../../../Multimedia/Pokemon/Card/Velocidad.png";
import Espada from "../../../../Multimedia/Pokemon/Card/Espada.png";
import EscudoEspadas from "../../../../Multimedia/Pokemon/Card/EscudoEspadas.png";
import Escudo from "../../../../Multimedia/Pokemon/Card/Escudo.png";
import AtaqueEspecial from "../../../../Multimedia/Pokemon/Card/AtaqueEspecial.png";

import { convertirDeImagenABase64 } from "../../../../Utilidades/UtilidadesImagen";
import {
  SButton,
  SButtonGeneral,
  SCol,
  SContenedorBotones,
  SContenedorImagen,
  SContenedorTipo,
  SDiv,
  SDivCentrador,
  SDivFormLabel,
  SDivIdentificador,
  SDivSolicitudImagen,
  SDivTipos,
  SDivTitulo,
  SImg,
  SImgBoton,
  SImgCaracteristicas,
  SImgPokebolas,
  Sinput,
  SModal,
  SModalBody,
  SPCarateristicas,
  SRow,
  STextarea,
  STitulo,
  StyledCard,
} from "./StyledFiltro";
import Stats from "../Card/Stats";
import { Descripcion } from "../Card/Descripcion/Descripcion";

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

export const FiltroPokemones: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [nuevoPokemon, setnuevoPokemon] =
    useState<INuevoPokemon>(DEFAULTNUEVOPOKEMON);
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);

  const [nuevaInfo, setnuevaInfo] = useState<number>(0);
  const [nuevaInfo2, setnuevaInfo2] = useState<number>(1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const asignarEstado = (e: any) => {
    setnuevaInfo(e.target.value);
  };

  const asignarEstado2 = (e: any) => {
    setnuevaInfo2(e.target.value);
  };

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
      <SButtonGeneral onClick={handleShow}>
        <SImgPokebolas seleccion={show} src={FondoFiltro} alt='FondoFiltro' />
        <SImgBoton src={FrenteFiltro} alt='FrenteFiltro' />
      </SButtonGeneral>

      <SModal
        show={show}
        onHide={handleClose}
        size='lg'
        dialogClassName={"modalInfo"}>
        <SModalBody>
          <StyledCard rareza={"ss"}>
            <Card.Body>
              <SDivIdentificador>100</SDivIdentificador>
              <SDivTitulo>Nombre</SDivTitulo>

              <SDivTipos>
                {/* {pokemon.Tipos.map((x, index) => (
                    <SContenedorTipo
                      tipo={pokemon.Tipos[index].IdTipo}
                      posicion={index == 0 ? "Primaria" : "Secundaria"}>
                      {pokemon.Tipos[index].NombreTipo}
                    </SContenedorTipo>
                  ))} */}
              </SDivTipos>
              <SRow>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={Espada} />
                    <SPCarateristicas>
                      <Row>
                        <Col>
                          <Sinput
                            value={nuevaInfo}
                            onChange={asignarEstado}
                            size={18}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={nuevaInfo2}
                            onChange={asignarEstado2}
                            size={18}
                          />
                        </Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={AtaqueEspecial} />
                    <SPCarateristicas>
                      <Row>
                        <Col>10</Col>/<Col>22</Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={Vida} />
                    <SPCarateristicas>
                      <Row>
                        <Col>10</Col>/<Col>22</Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
              </SRow>
              <SRow>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={Escudo} />
                    <SPCarateristicas>
                      <Row>
                        <Col>10</Col>/<Col>22</Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={EscudoEspadas} />
                    <SPCarateristicas>
                      <Row>
                        <Col>10</Col>/<Col>22</Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={Velocidad} />
                    <SPCarateristicas>
                      <Row>
                        <Col>10</Col>/<Col>22</Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
              </SRow>
            </Card.Body>
          </StyledCard>
        </SModalBody>
      </SModal>
    </>
  );
};

export default FiltroPokemones;
