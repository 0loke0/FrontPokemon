import React, { FC, useState, useEffect } from "react";
import { ObtenerTipos } from "../../../../Servicios/ServicioTipo";
import Button from "react-bootstrap/esm/Button";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";

import { Form } from "react-bootstrap";
import {
  ITipos,
  INuevoPokemon,
  IMovimiento,
  IFiltradoPaginacion,
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

const DEFAULTINFORMACIONFILTRO: IFiltradoPaginacion = {
  Identificador: 0,
  Nombre: "",
  AtaqueMinimo: 0,
  AtaqueMaximo: 100,
  AtaqueEspecialMinimo: 0,
  AtaqueEspecialMaximo: 100,
  VidaMinima: 0,
  VidaMaxima: 100,
  DefensaMinimo: 0,
  DefensaMaximo: 100,
  DefensaEspecialMinimo: 0,
  DefensaEspecialMaximo: 100,
  VelocidadMinimo: 0,
  VelocidadMaximo: 100,
};

export const FiltroPokemones: FC<IPropAgregar> = ({
  actualizarPagina,
  agregarPokemon,
}) => {
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);

  const [informacionFiltrado, setinformacionFiltrado] =
    useState<IFiltradoPaginacion>(DEFAULTINFORMACIONFILTRO);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const asignarValoresFiltro = (e: any) => {
    setinformacionFiltrado({
      ...informacionFiltrado,
      [e.target.name]: e.target.value,
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
              <SDivIdentificador>
                <Sinput
                  value={informacionFiltrado.Identificador}
                  onChange={asignarValoresFiltro}
                  size={18}
                  name={"Identificador"}
                />
              </SDivIdentificador>
              <SDivTitulo>
                <Sinput
                  value={informacionFiltrado.Nombre}
                  onChange={asignarValoresFiltro}
                  size={18}
                  name={"Nombre"}
                />
              </SDivTitulo>

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
                            value={informacionFiltrado.AtaqueMinimo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"AtaqueMinimo"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.AtaqueMaximo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"AtaqueMaximo"}
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
                        <Col>
                          <Sinput
                            value={informacionFiltrado.AtaqueEspecialMinimo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"AtaqueEspecialMinimo"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.AtaqueEspecialMaximo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"AtaqueEspecialMaximo"}
                          />
                        </Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={Vida} />
                    <SPCarateristicas>
                      <Row>
                        <Col>
                          <Sinput
                            value={informacionFiltrado.VidaMinima}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"VidaMinima"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.VidaMaxima}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"VidaMaxima"}
                          />
                        </Col>
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
                        <Col>
                          <Sinput
                            value={informacionFiltrado.DefensaMinimo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"DefensaMinimo"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.DefensaMaximo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"DefensaMaximo"}
                          />
                        </Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={EscudoEspadas} />
                    <SPCarateristicas>
                      <Row>
                        <Col>
                          <Sinput
                            value={informacionFiltrado.DefensaEspecialMinimo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"DefensaEspecialMinimo"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.DefensaEspecialMaximo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"DefensaEspecialMaximo"}
                          />
                        </Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
                <SCol>
                  <SDiv>
                    <SImgCaracteristicas src={Velocidad} />
                    <SPCarateristicas>
                      <Row>
                        <Col>
                          <Sinput
                            value={informacionFiltrado.VelocidadMinimo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"VelocidadMinimo"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.VelocidadMaximo}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"VelocidadMaximo"}
                          />
                        </Col>
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
