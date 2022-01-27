import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginasPokemon from "./paginas/PaginaPokemones/PaginaPokemones";
import PaginaStats from "./paginas/PaginaStats/PaginaStats";
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
      </Switch>
    </Router>
  );
};
