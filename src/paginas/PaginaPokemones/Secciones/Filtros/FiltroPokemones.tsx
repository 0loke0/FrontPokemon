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
  IFormularioConsulta,
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

interface IPropFiltroPokemon {
  setinfoPaginacion: any;
  infoPaginacion: IFormularioConsulta;
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
  DefensaMinima: 0,
  DefensaMaxima: 100,
  DefensaEspecialMinima: 0,
  DefensaEspecialMaxima: 100,
  VelocidadMinima: 0,
  VelocidadMaxima: 100,
};

export const FiltroPokemones: FC<IPropFiltroPokemon> = ({
  setinfoPaginacion,
  infoPaginacion,
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

  const aplicarFiltro = () => {
    let infoPaginacionTemp: IFormularioConsulta = { ...infoPaginacion };
    infoPaginacionTemp.Paginacion.Indice = 0;
    infoPaginacionTemp.Filtros = informacionFiltrado;
    setinfoPaginacion(infoPaginacionTemp);
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
                            value={informacionFiltrado.DefensaMinima}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"DefensaMinima"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.DefensaMaxima}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"DefensaMaxima"}
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
                            value={informacionFiltrado.DefensaEspecialMinima}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"DefensaEspecialMinima"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.DefensaEspecialMaxima}
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
                            value={informacionFiltrado.VelocidadMinima}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"VelocidadMinima"}
                          />
                        </Col>
                        /
                        <Col>
                          <Sinput
                            value={informacionFiltrado.VelocidadMaxima}
                            onChange={asignarValoresFiltro}
                            size={18}
                            name={"VelocidadMaxima"}
                          />
                        </Col>
                      </Row>
                    </SPCarateristicas>
                  </SDiv>
                </SCol>
              </SRow>
              <SButton variant='primary' onClick={aplicarFiltro}>
                Guardar
              </SButton>
            </Card.Body>
          </StyledCard>
        </SModalBody>
      </SModal>
    </>
  );
};

export default FiltroPokemones;
