import React, { useEffect, useState } from "react";
import { GetTipos, SetTipos, DeleteTipo } from "../Servicios/ServicioTipo";
import Info from "../paginas/SeccionPokemones";
import { Button } from "react-bootstrap";

interface ITipos {
  IdTipo: number;
  NombreTipo: string;
}
const DEFAULTTIPO = { IdTipo: 0, NombreTipo: "" };
function PaginaPokemones() {
  const [tipos, settipos] = useState<ITipos[]>([DEFAULTTIPO]);
  const [formulario, setformulario] = useState<ITipos>(DEFAULTTIPO);
  useEffect(() => {
    GetTipos().then((x) => settipos(x));
  }, []);

  const agregar = () => {
    SetTipos(formulario);
  };
  const quitar = () => {
    DeleteTipo({ IdTipo: 70, NombreTipo: "nuevoTipoDesdeApi" });
  };

  return (
    <>
      <p>sadawdas</p>
      <Info info={"uwu"} />
      <Button variant='primary' onClick={agregar}>
        Agregar
      </Button>
      <Button variant='primary' onClick={quitar}>
        quitar
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
