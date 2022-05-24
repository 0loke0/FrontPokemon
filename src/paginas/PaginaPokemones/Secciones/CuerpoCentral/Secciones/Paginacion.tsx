import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Boton from "../../../../../Componentes/Boton";

const Sdiv = styled.div`
  position: absolute;
  width: 500px;
  height: 100px;
  top: 85%;
  left: 50%;
  transform: translate(-50%);
`;

const SDivContenedor = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const SInformacionPaginacion = styled.div`
  text-align: center;
  font-family: Poiret One;
  font-weight: 800;
`;

interface IPropsPaginacion {
  cantidadRegistros: any;
  tomarInformacionPaginacion: any;
  limitePorPagina: number;
}

const Paginacion: FC<IPropsPaginacion> = ({
  cantidadRegistros,
  tomarInformacionPaginacion,
  limitePorPagina,
}) => {
  const [pagina, setpagina] = useState<number>(0);

  useEffect(() => {
    informacionPaginacion();
  }, [pagina]);

  useEffect(() => {
    if (determinarCantidadPaginas() < pagina + 1) {
      setpagina(pagina - 1);
    }
    regresarInicio();
  }, [cantidadRegistros]);

  const determinarCantidadPaginas = () => {
    return Math.ceil(cantidadRegistros / limitePorPagina);
  };

  const retroceder = () => {
    if (pagina > 0) {
      setpagina(pagina - 1);
    }
  };

  const avanzar = () => {
    if (cantidadRegistros > (pagina + 1) * limitePorPagina)
      setpagina(pagina + 1);
  };

  const regresarInicio = () => {
    setpagina(0);
  };

  const informacionPaginacion = () => {
    tomarInformacionPaginacion({
      Indice: pagina,
      CantidadRegistros: limitePorPagina,
    });
  };
  return (
    <Sdiv>
      <SDivContenedor>
        <SInformacionPaginacion>
          Pagina {pagina + 1}/{determinarCantidadPaginas()}
        </SInformacionPaginacion>
        <Boton
          variant={pagina != 0 ? "outline-primary" : "secondary"}
          ejecutarFuncion={retroceder}
          nombre='<'
        />
        <Boton
          variant='outline-primary'
          ejecutarFuncion={regresarInicio}
          nombre='Inicio'
        />
        <Boton
          variant={
            determinarCantidadPaginas() !== pagina + 1
              ? "outline-primary"
              : "secondary"
          }
          ejecutarFuncion={avanzar}
          nombre='>'
        />
      </SDivContenedor>
    </Sdiv>
  );
};

export default Paginacion;
