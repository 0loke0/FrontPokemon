import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginasPokemon from "./paginas/PaginaPokemones/PaginaPokemones";
import PaginaStats from "./paginas/PaginaStats/PaginaStats";
import LoadingDian from "./paginas/LoadingDian/LoadingDian";
import Cronometro from "./paginas/Cronometro/Cronometro";
export const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <PaginasPokemon />
        </Route>
        <Route path='/Stats'>
          <PaginaStats />
        </Route>
        <Route path='/LoadingDian'>
          <LoadingDian />
        </Route>
        <Route path='/Cronometro'>
          <Cronometro />
        </Route>
      </Switch>
    </Router>
  );
};
