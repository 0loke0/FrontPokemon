import React, { FC, useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";

import {
  IFiltradoPaginacion,
  IFormularioConsulta,
} from "../../../../Interface/PaginaPokemones";

import FondoFiltro from "../../../../Multimedia/Pokemon/Filtro/FondoFiltro.png";
import FrenteFiltro from "../../../../Multimedia/Pokemon/Filtro/FrenteFiltro.png";

import {
  SButton,
  SButtonGeneral,
  SDivSeleccionTipos,
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
import { DropList } from "../../../../Componentes/DropList";
import { ITipo } from "../../../../Interface/Tipos";

import { DEFAULTSECCIONACONSULTAR } from "../../../../Constantes/Pokemones";

interface IPropFiltroPokemon {
  setseccionAConsultar: any;
  seccionAConsultar: IFormularioConsulta;
  tipos: ITipo[];
}

export const FiltroPokemones: FC<IPropFiltroPokemon> = ({
  setseccionAConsultar,
  seccionAConsultar,
  tipos,
}) => {
  const [informacionFiltrado, setinformacionFiltrado] =
    useState<IFiltradoPaginacion>(seccionAConsultar.Filtros);

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
    let infoPaginacionTemp: IFormularioConsulta = { ...seccionAConsultar };
    infoPaginacionTemp.Filtros = informacionFiltrado;
    setseccionAConsultar(infoPaginacionTemp);
    handleClose();
  };

  const reiniciarFiltros = () => {
    setinformacionFiltrado(DEFAULTSECCIONACONSULTAR.Filtros);
  };

  const asignarTipoAlFiltro = (valorSelecionado: number) => {
    setinformacionFiltrado({ ...informacionFiltrado, Tipo: valorSelecionado });
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
              <SDivSeleccionTipos>
                <DropList
                  lista={tipos}
                  propiedadIdLista='IdTipo'
                  propiedadNombreLista='NombreTipo'
                  recogerSeleccion={asignarTipoAlFiltro}
                  valorDefecto={"Tipos"}
                />
              </SDivSeleccionTipos>
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
