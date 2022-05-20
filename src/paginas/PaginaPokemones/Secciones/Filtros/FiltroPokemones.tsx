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
  SImgFiltro,
  Sinput,
  SinputIdentificador,
  SinputNombre,
  SModal,
  SModalBody,
  SPCarateristicas,
  SRow,
  STextarea,
  STitulo,
  StyledCard,
} from "./StyledFiltro";
import Stats from "../Card/Secciones/Stats";
import StatsFiltro from "./Secciones/StatsFiltro";
import IdFiltro from "./Secciones/IdFiltro";
import NombreFiltro from "./Secciones/NombreFiltro";

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
  const [informacionFiltrado, setinformacionFiltrado] =
    useState<IFiltradoPaginacion>(DEFAULTINFORMACIONFILTRO);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const reiniciarFiltros = () => {
    setinformacionFiltrado(DEFAULTINFORMACIONFILTRO);
  };

  return (
    <>
      <SButtonGeneral onClick={handleShow}>
        <SImgBoton src={FrenteFiltro} alt='FrenteFiltro' />
        <SImgFiltro seleccion={show} src={FondoFiltro} alt='FondoFiltro' />
      </SButtonGeneral>
      <SModal
        show={show}
        onHide={handleClose}
        size='lg'
        dialogClassName={"modalInfo"}>
        <SModalBody>
          <StyledCard>
            <Card.Body>
              <IdFiltro
                asignarValoresFiltro={asignarValoresFiltro}
                informacionFiltrado={informacionFiltrado}
              />

              <NombreFiltro
                asignarValoresFiltro={asignarValoresFiltro}
                informacionFiltrado={informacionFiltrado}
              />
              <StatsFiltro
                asignarValoresFiltro={asignarValoresFiltro}
                informacionFiltrado={informacionFiltrado}
              />
            </Card.Body>
          </StyledCard>
        </SModalBody>
        <Modal.Footer>
          <SButton variant='secondary' onClick={handleClose}>
            Cerrar
          </SButton>
          <SButton variant='primary' onClick={reiniciarFiltros}>
            Reiniciar
          </SButton>
          <SButton variant='primary' onClick={aplicarFiltro}>
            Aplicar
          </SButton>
        </Modal.Footer>
      </SModal>
    </>
  );
};

export default FiltroPokemones;
