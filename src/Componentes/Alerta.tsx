import React, { FC, useState } from "react";
import { Alert, Button } from "react-bootstrap";

interface IPropAlerta {
  tipo: string;
  titulo: string;
  cuerpo: string;
}

export const Alerta: FC<IPropAlerta> = ({ tipo, titulo, cuerpo }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={tipo} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{titulo}</Alert.Heading>
        <p>{cuerpo}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};
