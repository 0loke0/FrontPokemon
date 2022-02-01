import React, { FC, useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Boton from "../../../Componentes/Boton";
import { Form, Modal } from "react-bootstrap";
import { buscarStat, actualizarStat } from "../../../Servicios/ServicioStats";
import { IPokemon, IStats } from "../../../Interface/Pokemones";

interface IPropActualizarPokemon {
  estadoActual: any;
  pokemonAActualizar: IPokemon;
}
const DEFAULTSTATS: IPokemon = {
  Id: 0,
  Nombre: "",
};
export const ActualizarPokemon: FC<IPropActualizarPokemon> = ({
  estadoActual,
  pokemonAActualizar,
}) => {
  const [show, setShow] = useState(false);
  const [stats, setstats] = useState<IPokemon>(DEFAULTSTATS);

  useEffect(() => {
    buscarStat(pokemonAActualizar.Id).then((x) => setstats(x));
  }, [pokemonAActualizar]);

  const handleClose = () => {
    estadoActual(false);
    setShow(false);
  };
  const handleShow = () => {
    estadoActual(true);
    setShow(true);
  };

  const asignarDatoStats = (nombrePropiedad: string, value: string) => {
    setstats({ ...stats, [nombrePropiedad]: value });
  };
  const guardarStats = () => {
    // actualizarStat(stats);
    handleClose();
  };

  return (
    <>
      <Boton
        variant='outline-success'
        ejecutarFuncion={handleShow}
        nombre='Base'
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={stats.Nombre}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                asignarDatoStats("Ataque", event.target.value)
              }
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={guardarStats}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ActualizarPokemon;
