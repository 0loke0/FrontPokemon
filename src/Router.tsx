import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginasPokemon from "./paginas/PaginaPokemones/PaginaPokemones";
import PaginaStats from "./paginas/PaginaStats/PaginaStats";
import LoadingDian from "./paginas/LoadingDian/LoadingDian";
import Cronometro from "./paginas/Cronometro/Cronometro";
import CardGeneralizado from "./paginas/PruebasCards/CardGeneralizado";
import { MarcaDeAgua } from "./paginas/MarcaDeAgua/MarcaDeAgua";
import DragAndDrop from "./paginas/PruebasDragAndDrop/DragAndDrop";
import PruebasStats from "./paginas/PruebasStats/PruebasStats";
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
        <Route path='/CardPruebas'>
          <CardGeneralizado />
        </Route>
        <Route path='/MarcaDeAgua'>
          <MarcaDeAgua />
        </Route>
        <Route path='/DragAndDrop'>
          <DragAndDrop />
        </Route>
        <Route path='/PruebasStats'>
          <PruebasStats />
        </Route>
      </Switch>
    </Router>
  );
};
