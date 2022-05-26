import React, { FC, useEffect, useState } from "react";

import {
  IActulizacionPokemon,
  IPokemonActualizado,
  IPokemonDetallado,
} from "../../../../../../../../Interface/PokemonDetallado";

import Edicion from "../../../../../../../../Multimedia/Pokemon/Editar/Edicion.png";

import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import {
  IMovimiento,
  ITipos,
} from "../../../../../../../../Interface/Pokemones";
import { DropList } from "../../../../../../../../Componentes/DropList";
import { ObtenerTipos } from "../../../../../../../../Servicios/ServicioTipo";
import { ObtenerMovimientos } from "../../../../../../../../Servicios/ServicioMovimientos";
import { ActualizarPokemon } from "../../../../../../../../Servicios/ServicioPokemon";
import { Alerta } from "../../../../../../../../Componentes/Alerta";

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

// const DEFAULTPOKEMONEDITADO: IActulizacionPokemon = {
//   Id: 0,
//   NombrePokemon: "",
//   Tipos: [
//     { IdTipo: 0, NombreTipo: "" },
//     { IdTipo: 0, NombreTipo: "" },
//   ],
//   Movimientos: [
//     { IdMovimiento: 0, NombreMovimiento: "", Valor: 0 },
//     { IdMovimiento: 0, NombreMovimiento: "", Valor: 0 },
//   ],
//   Detalle: "",
// };

export const Editar: FC<IPropActualizar> = ({
  pokemonAActualizar,
  cerrarVenta,
  actualizarPagina,
}) => {
  const [pokemonEditado, setpokemonEditado] = useState<IActulizacionPokemon>({
    Id: pokemonAActualizar.Id,
    NombrePokemon: pokemonAActualizar.Nombre,
    Tipos: pokemonAActualizar.Tipos,
    Movimientos: pokemonAActualizar.Movimientos,
    Detalle: pokemonAActualizar.Detalle,
  });

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
    ObtenerTipos().then((x) => settipos(x));
    ObtenerMovimientos().then((x) => setMovimientos(x));
  }, []);

  const asignarNombrePokemon = (e: any) => {
    setpokemonEditado({ ...pokemonEditado, NombrePokemon: e.target.value });
  };

  const asignarDetalle = (e: any) => {
    setpokemonEditado({ ...pokemonEditado, Detalle: e.target.value });
  };

  const asignarMovimiento = (x: IMovimiento, index: number) => {
    let temp = { ...pokemonEditado };
    temp.Movimientos[index] = x;
    setpokemonEditado({ ...pokemonEditado, Movimientos: temp.Movimientos });
  };

  const asignarTipo = (x: ITipos, index: number) => {
    let temp = { ...pokemonEditado };
    temp.Tipos[index] = x;
    setpokemonEditado({ ...pokemonEditado, Tipos: temp.Tipos });
  };

  const editarPokemon = () => {
    let temp: IPokemonActualizado = {
      Id: pokemonEditado.Id,
      NombrePokemon: pokemonEditado.NombrePokemon,
      IdsTipo: pokemonEditado.Tipos.map((t) => t.IdTipo),
      IdsMovimiento: pokemonEditado.Movimientos.map((m) => m.IdMovimiento),
      Detalle: pokemonEditado.Detalle,
    };
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
                  {pokemonEditado.Movimientos.map((x, index) => {
                    return (
                      <Row>
                        <DropList
                          valorAIndicar='IdMovimiento'
                          index={x.IdMovimiento}
                          lista={movimientos}
                          recogerSeleccion={asignarMovimiento}
                          valorAListar='NombreMovimiento'
                          valorDefecto={x.NombreMovimiento}
                        />
                      </Row>
                    );
                  })}
                </Col>
              </Row>

              <Row>
                {pokemonEditado.Tipos.map((x, index) => {
                  return (
                    <SDivCentrador
                      ubicacion={index == 0 ? "Izquierda" : "Derecha"}>
                      <DropList
                        valorAIndicar='IdTipo'
                        index={index}
                        lista={tipos}
                        recogerSeleccion={asignarTipo}
                        valorAListar='NombreTipo'
                        valorDefecto={x.NombreTipo}
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
