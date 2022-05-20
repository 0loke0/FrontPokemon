import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginasPokemon from "./paginas/PaginaPokemones/PaginaPokemones";

export const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <PaginasPokemon />
        </Route>
      </Switch>
    </Router>
  );
};
