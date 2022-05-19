import React, { FC, useEffect, useRef, useState } from "react";
import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";

import {
  IActulizacionPokemon,
  IPokemonDetallado,
} from "../../../../../../Interface/PokemonDetallado";
import styled from "styled-components";
import Edicion from "../../../../../../Multimedia/Pokemon/Editar/Edicion.png";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { IMovimiento, ITipos } from "../../../../../../Interface/Pokemones";
import { DropList } from "../../../../../../Componentes/DropList";
import { ObtenerTipos } from "../../../../../../Servicios/ServicioTipo";
import { ObtenerMovimientos } from "../../../../../../Servicios/ServicioMovimientos";
import { ActualizarPokemon } from "../../../../../../Servicios/ServicioPokemon";
import { Alerta } from "../../../../../../Componentes/Alerta";
import FondoEdicion from "../../../../../../Multimedia/Pokemon/Editar/FondoEdicion.png";
import { determinarColorSegunRareza } from "../../../../../../Utilidades/UtilidadesColores";
interface IPropActualizar {
  pokemonAActualizar: IPokemonDetallado;
  cerrarVenta: any;
  actualizarPagina: any;
}

const SButton = styled.button`
  background-color: transparent;
  position: relative;
  height: 40px;
  width: 40px;
  border: 1px solid transparent;
  border-radius: 0%;
`;

const SImg = styled.img`
  position: relative;
  height: 30px;
  width: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Sinput = styled.input`
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 5px;
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid #c9e7ff;
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;
export const SDivCentrador = styled.div`
  position: relative;
  right: 0%;
  text-align: ${(p: IProps) => (p.ubicacion == "Izquierda" ? "right" : "left")};
`;
export const SDivFormLabel = styled.div`
  position: relative;
  text-align: center;
  width: 90%;
  left: 50%;
  transform: translate(-50%);
`;

export const SModal = styled(Modal)`
  background-color: #4ad3fd93;
`;
export const SModalBody = styled(Modal.Body)`
  background-color: #3396cf;

  padding: 2%;
  border-radius: 20px;
  margin-top: 100px;
  border: 3px solid black;
  box-shadow: 0px 0px 20px #4a9eff;
`;

interface IProps {
  ubicacion?: string;
  seleccion?: boolean;
}

export const StyledCard = styled(Card)<{
  rareza: string;
}>`
  padding: 5px;
  border-radius: 20px;
  border: 2px solid #628395;
  box-shadow: 5px 5px 10px #7d7d7d;
  background-color: #ffdee9;
  background-image: ${({ rareza }) => determinarColorSegunRareza(rareza)};
`;

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
      <SModal show={show} onHide={cerrarVentanas}>
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
