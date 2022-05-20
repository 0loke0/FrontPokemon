import React, { FC, useEffect, useRef, useState } from "react";

import {
  IActulizacionPokemon,
  IPokemonDetallado,
} from "../../../../../../../Interface/PokemonDetallado";
import styled from "styled-components";
import Edicion from "../../../../../../../Multimedia/Pokemon/Editar/Edicion.png";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { IMovimiento, ITipos } from "../../../../../../../Interface/Pokemones";
import { DropList } from "../../../../../../../Componentes/DropList";
import { ObtenerTipos } from "../../../../../../../Servicios/ServicioTipo";
import { ObtenerMovimientos } from "../../../../../../../Servicios/ServicioMovimientos";
import { ActualizarPokemon } from "../../../../../../../Servicios/ServicioPokemon";
import { Alerta } from "../../../../../../../Componentes/Alerta";

import { determinarColorMateSegunRareza } from "../../../../../../../Utilidades/UtilidadesColores";
import {
  SButton,
  SDivCentrador,
  SDivFormLabel,
  SImg,
  Sinput,
  SModal,
  SModalBody,
  StyledCard,
} from "./StyledEditar";
interface IPropActualizar {
  pokemonAActualizar: IPokemonDetallado;
  cerrarVenta: any;
  actualizarPagina: any;
}

const DEFAULTPOKEMONEDITADO: IActulizacionPokemon = {
  Id: 0,
  NombrePokemon: "",
  IdsTipo: [0, 0],
  IdsMovimiento: [0, 0],
  Detalle: "",
};

export const Editar: FC<IPropActualizar> = ({
  pokemonAActualizar,
  cerrarVenta,
  actualizarPagina,
}) => {
  const [pokemonEditado, setpokemonEditado] = useState<IActulizacionPokemon>(
    DEFAULTPOKEMONEDITADO
  );
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cerrarVentanas = () => {
    handleClose();
    cerrarVenta();
  };

  useEffect(() => {
    setpokemonEditado(convertirPokemonAPokemonEditado());
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const convertirPokemonAPokemonEditado = () => ({
    Id: pokemonAActualizar.Id,
    NombrePokemon: pokemonAActualizar.Nombre,
    IdsTipo: pokemonAActualizar.Tipos.map((t) => t.IdTipo),
    IdsMovimiento: pokemonAActualizar.Movimientos.map((m) => m.IdMovimiento),
    Detalle: pokemonAActualizar.Detalle,
  });

  const asignarNombrePokemon = (e: any) => {
    setpokemonEditado({ ...pokemonEditado, NombrePokemon: e.target.value });
  };

  const asignarDetalle = (e: any) => {
    setpokemonEditado({ ...pokemonEditado, Detalle: e.target.value });
  };

  const asignarMovimiento = (x: number, index: number) => {
    let temp = { ...pokemonEditado };
    temp.IdsMovimiento[index] = x;
    setpokemonEditado({ ...pokemonEditado, IdsMovimiento: temp.IdsMovimiento });
  };

  const asignarTipo = (x: number, index: number) => {
    let temp = { ...pokemonEditado };
    temp.IdsTipo[index] = x;
    setpokemonEditado({ ...pokemonEditado, IdsTipo: temp.IdsTipo });
  };

  const editarPokemon = () => {
    let temp = { ...pokemonEditado };
    if (temp.NombrePokemon == pokemonAActualizar.Nombre) {
      temp.NombrePokemon = "";
    }
    ActualizarPokemon(temp)
      .then((x) => {
        x && Alerta("success", "Guardado", x);
      })
      .then(() => actualizarPagina());
  };

  return (
    <>
      <SButton onClick={handleShow}>
        <SImg src={Edicion} alt='Edicion' />
      </SButton>
      <SModal
        show={show}
        onHide={cerrarVentanas}
        rareza={pokemonAActualizar.Rareza}>
        <SModalBody>
          <StyledCard rareza={pokemonAActualizar.Rareza}>
            <Container>
              <Row>
                <Col>
                  <SDivFormLabel>
                    <Form.Label>Nombre</Form.Label>
                    <Sinput
                      type='text'
                      required
                      placeholder='Ingrese Nombre'
                      value={pokemonEditado.NombrePokemon}
                      onChange={asignarNombrePokemon}
                    />
                  </SDivFormLabel>
                </Col>
                <Col>
                  {pokemonEditado.IdsMovimiento.map((x, index) => {
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
                </Col>
              </Row>

              <Row>
                {pokemonEditado.IdsTipo.map((x, index) => {
                  return (
                    <SDivCentrador
                      ubicacion={index == 0 ? "Izquierda" : "Derecha"}>
                      <DropList
                        valorAIndicar='IdTipo'
                        index={index}
                        lista={tipos}
                        recogerSeleccion={asignarTipo}
                        valorDefecto={"Tipo"}
                        valorAListar='NombreTipo'
                      />
                    </SDivCentrador>
                  );
                })}
              </Row>
            </Container>
            <SDivFormLabel>
              <Form.Label>Detalle</Form.Label>
              <Sinput
                type='text'
                required
                placeholder='Ingrese Descripcion de pokemon'
                value={pokemonEditado.Detalle}
                onChange={asignarDetalle}
              />
            </SDivFormLabel>
          </StyledCard>
        </SModalBody>
        <Modal.Footer>
          <Button variant='secondary' onClick={cerrarVentanas}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={editarPokemon}>
            Editar
          </Button>
        </Modal.Footer>
      </SModal>
    </>
  );
};
