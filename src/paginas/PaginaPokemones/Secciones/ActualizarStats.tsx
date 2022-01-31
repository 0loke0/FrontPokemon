import React, { FC, useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Boton from "../../../Componentes/Boton";
import { Form, Modal } from "react-bootstrap";
import { buscarStat, actualizarStat } from "../../../Servicios/ServicioStats";
import { IPokemon, IStats } from "../../../Interface/Pokemones";

interface IPropActualizarStats {
  estadoActual: any;
  pokemonAActualizar: IPokemon;
}
const DEFAULTSTATS: IStats = {
  IdPokemon: 0,
  Ataque: 0,
  Defensa: 0,
  EspecialAtaque: 0,
  EspecialDefensa: 0,
  Velocidad: 0,
  Vida: 0,
};
export const ActualizarStats: FC<IPropActualizarStats> = ({
  estadoActual,
  pokemonAActualizar,
}) => {
  const [show, setShow] = useState(false);
  const [stats, setstats] = useState<IStats>(DEFAULTSTATS);

  useEffect(() => {
    buscarStat(pokemonAActualizar.Id).then((x) => setstats(x));
  }, []);

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
    actualizarStat(stats);
    handleClose();
  };

  return (
    <>
      <Boton
        variant='outline-success'
        ejecutarFuncion={handleShow}
        nombre='Stats'
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Stats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              type='switch'
              id='custom-switch'
              label='Caracteristicas Aleatorias'
              className='mt-1 mb-2'
            />
            <Form.Label>Ataque</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={stats.Ataque}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                asignarDatoStats("Ataque", event.target.value)
              }
            />
            <Form.Label>Defensa</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={stats.Defensa}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                asignarDatoStats("Defensa", event.target.value)
              }
            />
            <Form.Label>Ataque Especial</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={stats.EspecialAtaque}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                asignarDatoStats("EspecialAtaque", event.target.value)
              }
            />
            <Form.Label>Defensa Especial</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={stats.EspecialDefensa}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                asignarDatoStats("EspecialDefensa", event.target.value)
              }
            />
            <Form.Label>Velocidad</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={stats.Velocidad}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                asignarDatoStats("Velocidad", event.target.value)
              }
            />
            <Form.Label>Vida</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingrese Nombre'
              value={stats.Vida}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                asignarDatoStats("Vida", event.target.value)
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

export default ActualizarStats;
