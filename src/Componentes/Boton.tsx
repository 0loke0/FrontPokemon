import { Button } from "react-bootstrap";
import styled from "styled-components";
import React from "react";
import { FC } from "react";

interface IPropBoton {
  nombre?: string;
  variant?: string;
  ejecutarFuncion: any;
}
const BotonPersonalizado = styled(Button)`
  margin: 5px 0px;
`;

const Boton: FC<IPropBoton> = ({ nombre, variant, ejecutarFuncion }) => {
  return (
    <BotonPersonalizado variant={variant} onClick={ejecutarFuncion}>
      {nombre}
    </BotonPersonalizado>
  );
};

export default Boton;
