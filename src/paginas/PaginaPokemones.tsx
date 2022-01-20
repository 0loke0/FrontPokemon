import React, { useEffect, useState } from "react";
import {
  getTipos,
  setTipos,
  deleteTipo,
  updateTipo,
} from "../Servicios/ServicioTipo";

import Button from "react-bootstrap/Button";

interface ITipos {
  IdTipo: number;
  NombreTipo: string;
}

const DEFAULTTIPO = { IdTipo: 0, NombreTipo: "" };

function PaginaPokemones() {
  const [tipos, settipos] = useState<ITipos[]>([DEFAULTTIPO]);
  const [inputDelete, setinputDelete] = useState<string>("");

  useEffect(() => {
    getTipos().then((x) => settipos(x));
  }, []);

  const refrescarInformacion = () => {
    getTipos().then((x) => settipos(x));
    console.log("generoConsulta");
  };

  const agregar = () => {
    setTipos({ IdTipo: 0, NombreTipo: "TIPOs" });
    refrescarInformacion();
    console.log("termino");
  };

  const quitar = () => {
    deleteTipo(parseInt(inputDelete));
    refrescarInformacion();
  };

  const actualizar = () => {
    updateTipo(parseInt(inputDelete), { IdTipo: 0, NombreTipo: "" });
    refrescarInformacion();
  };

  return (
    <>
      {/* <Info info={"uwu"} /> */}
      <Button variant='outline-primary' onClick={agregar}>
        Agregar
      </Button>
      <input
        type='text'
        value={inputDelete}
        onChange={(event) => setinputDelete(event.target.value)}
      />
      <Button variant='outline-danger' onClick={quitar}>
        Quitar
      </Button>
      <Button variant='outline-success' onClick={actualizar}>
        Actualizar
      </Button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tipos</th>
          </tr>
        </thead>
        <tbody>
          {tipos?.map((x) => (
            <tr key={x.IdTipo}>
              <td>{x.IdTipo}</td>
              <td>{x.NombreTipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PaginaPokemones;
