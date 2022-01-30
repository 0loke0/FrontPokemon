import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IPokemon } from "../../Interface/Pokemones";
import { Agregar } from "./Secciones/Agregar";
import { Tabla } from "./Secciones/Tabla";
import {
  ActualizarPokemon,
  AgregarPokemon,
  EliminarPokemon,
  ObtenerPokemones,
} from "../../Servicios/ServicioPokemon";
import { Table } from "react-bootstrap";
import { Actualizar } from "./Secciones/Actualizar";
import { Eliminar } from "./Secciones/Eliminar";
import { Alerta } from "../../Componentes/Alerta";

const Sth = styled.th`
  text-align: center;
`;
const Std = styled.td`
  text-align: center;
`;

const SGenenarlPaginaPokemon = styled.div`
  margin: 3% 10% 3% 10%;
  border: 1px solid blue;
  box-shadow: 0px 0px 15px black;
  background-color: #fff7f7;
  border-radius: 20px;
  padding: 2%;
`;
const DEFAULTPOKEMON: IPokemon = { Id: 0, Nombre: "" };

function PaginaPokemones() {
  const [pokemon, setpokemon] = useState<IPokemon[]>([DEFAULTPOKEMON]);
  const [infromacionAlerta, setinfromacionAlerta] = useState<string>();
  useEffect(() => {
    ObtenerPokemones().then((x) => setpokemon(x));
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setinfromacionAlerta("");
    }, 3000);
  }, [infromacionAlerta]);

  const actualizarPagina = () => {
    setTimeout(function () {
      ObtenerPokemones().then((x) => setpokemon(x));
    }, 1000);
  };

  const agregar = (input: string) => {
    AgregarPokemon(input).then((respuesta) => setinfromacionAlerta(respuesta));
  };

  return (
    <SGenenarlPaginaPokemon>
      <h2>Pokemones</h2>
      {infromacionAlerta && (
        <Alerta
          tipo='success'
          titulo='Todo Correcto'
          cuerpo={infromacionAlerta}
        />
      )}
      <Agregar actualizarPagina={actualizarPagina} agregar={agregar} />
      <Tabla pokemon={pokemon} actualizarPagina={actualizarPagina} />
    </SGenenarlPaginaPokemon>
  );
}

export default PaginaPokemones;
