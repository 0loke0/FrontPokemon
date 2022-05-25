import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SCol,
  SDiv,
  SImgCaracteristicas,
  Sinput,
  SCarateristicas,
  SRow,
} from "./StyledStatsFiltro";

import { IFiltradoPaginacion } from "../../../../../Interface/Pokemones";

import Vida from "../../../../../Multimedia/Pokemon/Card/Vida.png";
import Velocidad from "../../../../../Multimedia/Pokemon/Card/Velocidad.png";
import Espada from "../../../../../Multimedia/Pokemon/Card/Espada.png";
import EscudoEspadas from "../../../../../Multimedia/Pokemon/Card/EscudoEspadas.png";
import Escudo from "../../../../../Multimedia/Pokemon/Card/Escudo.png";
import AtaqueEspecial from "../../../../../Multimedia/Pokemon/Card/AtaqueEspecial.png";

interface IPropStatsFiltro {
  informacionFiltrado: IFiltradoPaginacion;
  asignarValoresFiltro: (e: any) => void;
}
interface IEstructuraStatsFiltro {
  imagen: string;
  stat: {
    minimo:
      | "AtaqueMinimo"
      | "AtaqueEspecialMinimo"
      | "VidaMinima"
      | "DefensaMinima"
      | "DefensaEspecialMinima"
      | "VelocidadMinima";
    maximo:
      | "AtaqueMaximo"
      | "AtaqueEspecialMaximo"
      | "VidaMaxima"
      | "DefensaMaxima"
      | "DefensaEspecialMaxima"
      | "VelocidadMaxima";
  };
}

const estructuraStatsFiltro: IEstructuraStatsFiltro[] = [
  { imagen: Espada, stat: { minimo: "AtaqueMinimo", maximo: "AtaqueMaximo" } },
  {
    imagen: AtaqueEspecial,
    stat: { minimo: "AtaqueEspecialMinimo", maximo: "AtaqueEspecialMaximo" },
  },
  { imagen: Vida, stat: { minimo: "VidaMinima", maximo: "VidaMaxima" } },
  {
    imagen: Escudo,
    stat: { minimo: "DefensaMinima", maximo: "DefensaMaxima" },
  },
  {
    imagen: EscudoEspadas,
    stat: { minimo: "DefensaEspecialMinima", maximo: "DefensaEspecialMaxima" },
  },
  {
    imagen: Velocidad,
    stat: { minimo: "VelocidadMinima", maximo: "VelocidadMaxima" },
  },
];

const StatsFiltro: FC<IPropStatsFiltro> = ({
  informacionFiltrado,
  asignarValoresFiltro,
}) => {
  return (
    <>
      <SRow>
        {estructuraStatsFiltro.map((x, index) => {
          return (
            index < 3 && (
              <SCol>
                <SDiv>
                  <SImgCaracteristicas src={x.imagen} />
                  <SCarateristicas>
                    <Row>
                      <Col>
                        <Sinput
                          value={informacionFiltrado[x.stat.minimo]}
                          onChange={asignarValoresFiltro}
                          sizeH={18}
                          name={x.stat.minimo}
                        />
                      </Col>
                      /
                      <Col>
                        <Sinput
                          value={informacionFiltrado[x.stat.maximo]}
                          onChange={asignarValoresFiltro}
                          sizeH={18}
                          name={x.stat.maximo}
                        />
                      </Col>
                    </Row>
                  </SCarateristicas>
                </SDiv>
              </SCol>
            )
          );
        })}
      </SRow>
      <SRow>
        {estructuraStatsFiltro.map((x, index) => {
          return (
            index >= 3 && (
              <SCol>
                <SDiv>
                  <SImgCaracteristicas src={x.imagen} />
                  <SCarateristicas>
                    <Row>
                      <Col>
                        <Sinput
                          value={informacionFiltrado[x.stat.minimo]}
                          onChange={asignarValoresFiltro}
                          sizeH={18}
                          name={x.stat.minimo}
                        />
                      </Col>
                      /
                      <Col>
                        <Sinput
                          value={informacionFiltrado[x.stat.maximo]}
                          onChange={asignarValoresFiltro}
                          sizeH={18}
                          name={x.stat.minimo}
                        />
                      </Col>
                    </Row>
                  </SCarateristicas>
                </SDiv>
              </SCol>
            )
          );
        })}
      </SRow>
    </>
  );
};

export default StatsFiltro;
