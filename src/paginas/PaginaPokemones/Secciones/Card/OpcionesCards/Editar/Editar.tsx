import React, { FC, useRef, useState } from "react";
import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";

import {
  IActulizacionPokemon,
  IPokemonDetallado,
} from "../../../../../../Interface/PokemonDetallado";
import styled from "styled-components";
import Edicion from "../../../../../../Multimedia/Pokemon/Editar/Edicion.png";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { IMovimiento, ITipos } from "../../../../../../Interface/Pokemones";
import { DropList } from "../../../../../../Componentes/DropList";

interface IPropActualizar {
  pokemonAActualizar: IPokemonDetallado;
  cerrarVenta: any;
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
interface IProps {
  ubicacion?: string;
  seleccion?: boolean;
}
export const SDivCentrador = styled.div`
  position: relative;
  right: 0%;
  text-align: ${(p: IProps) => (p.ubicacion == "Izquierda" ? "right" : "left")};
`;

// const DEFAULTPOKEMONACTUALIZAR: IPokemonDetallado = {
//   Id: "",
//   Nombre: "",
//   Ataque: 0,
//   Defensa: 0,
//   EspecialAtaque: 0,
//   EspecialDefensa: 0,
//   Velocidad: 0,
//   Vida: 0,
//   NombreImagen: "",
//   RutaImagen: "",
//   Rareza: "",
//   Tipos: [{ IdTipo: 0, NombreTipo: "" }],
//   Movimientos: [{ NombreMovimiento: "", Valor: 0 }],
//   Detalle: "",
// };

export const Editar: FC<IPropActualizar> = ({
  pokemonAActualizar,
  cerrarVenta,
}) => {
  const [pokemonActualizando, setpokemonActualizando] =
    useState<IActulizacionPokemon>();
  const [tipos, settipos] = useState<ITipos[]>([]);
  const [movimientos, setMovimientos] = useState<IMovimiento[]>([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditarPokemon = () => {};
  const cerrarVentanas = () => {
    handleClose();
    cerrarVenta();
  };

  let convertirPokemonAPokemonActualizado = () => {
    // {
    //   Id: pokemonAActualizar.Id,
    //   NombrePokemon: pokemonAActualizar.Nombre,
    //   IdsTipo: number[],
    //   IdsMovimiento: number[],
    //   Detalle: string,
    // }
  };
  var listaIdTipos: number[] = [];
  var listaIdMovimientos: number[] = [];
  const obtenerListasIdTipos = () =>
    pokemonAActualizar.Tipos.map((x) => listaIdTipos.push(x.IdTipo));
  const obtenerListasIdMovimientos = () =>
    pokemonAActualizar.Tipos.map((x) => listaIdMovimientos.push(x.IdTipo));

  const asignarDetallePokemon = (e: any) => {
    // setpokemonActualizando({ ...pokemonActualizando, Detalle: e.target.value });
  };

  const asignarMovimiento = (x: number, index: number) => {
    // var temp = { ...pokemonActualizando };
    // temp.Movimientos[index]. = x;
    // setpokemonActualizando({
    //   ...pokemonActualizando,
    //   IdsMovimiento: temp.IdsMovimiento,
    // });
  };

  // const asignarTipo = (x: number, index: number) => {
  //   var temp = { ...pokemonActualizando };
  //   temp.IdsTipo[index] = x;
  //   setpokemonActualizando({ ...pokemonActualizando, IdsTipo: temp.IdsTipo });
  // };

  return (
    <>
      <SButton onClick={handleShow}>
        <SImg src={Edicion} alt='Delete' />
      </SButton>
      <Modal show={show} onHide={cerrarVentanas}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar</Modal.Title>
          {obtenerListasIdTipos()}
          {console.log(listaIdTipos, listaIdMovimientos)}
        </Modal.Header>
        <Modal.Body>
          {/* <Form.Label>Nombre</Form.Label>
          <Sinput
            type='text'
            required
            placeholder='Ingrese Nombre'
            value={pokemonActualizando?.NombrePokemon}
            onChange={asignarNombrePokemon}
          />
          <Form.Label>Detalle</Form.Label>
          <Sinput
            type='text'
            required
            placeholder='Ingrese Detalle'
            value={pokemonActualizando?.Detalle}
            onChange={asignarDetallePokemon}
          /> */}
          {/* <Container>
            <Row>
              {pokemonActualizando.Movimientos.map((x, index) => {
                return (
                  <Col>
                    <SDivCentrador
                      ubicacion={index == 0 ? "Izquierda" : "Derecha"}>
                      <DropList
                        valorAIndicar='IdMovimiento'
                        index={index}
                        lista={movimientos}
                        recogerSeleccion={asignarMovimiento}
                        valorDefecto='Movimiento'
                        valorAListar='NombreMovimiento'
                      />
                    </SDivCentrador>
                  </Col>
                );
              })}
            </Row>
            <Row>
              {nuevoPokemon.Tipos.map((x, index) => {
                return (
                  <Col>
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
                  </Col>
                );
              })}
            </Row>
          </Container> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={cerrarVentanas}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={EditarPokemon}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
