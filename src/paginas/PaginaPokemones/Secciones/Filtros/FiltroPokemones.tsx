import React, { FC, useState } from "react";
import { Card, Modal } from "react-bootstrap";

import {
  IFiltradoPaginacion,
  IFormularioConsulta,
} from "../../../../Interface/Pokemones";

import FondoFiltro from "../../../../Multimedia/Pokemon/Filtro/FondoFiltro.png";
import FrenteFiltro from "../../../../Multimedia/Pokemon/Filtro/FrenteFiltro.png";

import {
  SButton,
  SButtonGeneral,
  SDivTitulo,
  SImgBoton,
  SImgFiltro,
  SModal,
  SModalBody,
  StyledCard,
} from "./StyledFiltro";

import StatsFiltro from "./Secciones/StatsFiltro";

import InputText from "../../../../Componentes/InputText";
import InputIdPokemon from "./Secciones/InputIdPokemon";

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
              <InputIdPokemon
                asignarValoresFiltro={asignarValoresFiltro}
                valor={informacionFiltrado.Identificador}
                name='Identificador'
              />
              <SDivTitulo>
                <InputText
                  placeholder='Nombre'
                  onChange={asignarValoresFiltro}
                  value={
                    informacionFiltrado.Nombre ? informacionFiltrado.Nombre : ""
                  }
                  name={"Nombre"}
                />
              </SDivTitulo>
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
