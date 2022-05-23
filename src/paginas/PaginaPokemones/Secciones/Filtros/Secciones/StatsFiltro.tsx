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
const StatsFiltro: FC<IPropStatsFiltro> = ({
  informacionFiltrado,
  asignarValoresFiltro,
}) => {
  return (
    <>
      <SRow>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Espada} />
            <SCarateristicas>
              <Row>
                <Col>
                  <Sinput
                    value={informacionFiltrado.AtaqueMinimo}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"AtaqueMinimo"}
                  />
                </Col>
                /
                <Col>
                  <Sinput
                    value={informacionFiltrado.AtaqueMaximo}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"AtaqueMaximo"}
                  />
                </Col>
              </Row>
            </SCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={AtaqueEspecial} />
            <SCarateristicas>
              <Row>
                <Col>
                  <Sinput
                    value={informacionFiltrado.AtaqueEspecialMinimo}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"AtaqueEspecialMinimo"}
                  />
                </Col>
                /
                <Col>
                  <Sinput
                    value={informacionFiltrado.AtaqueEspecialMaximo}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"AtaqueEspecialMaximo"}
                  />
                </Col>
              </Row>
            </SCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Vida} />
            <SCarateristicas>
              <Row>
                <Col>
                  <Sinput
                    value={informacionFiltrado.VidaMinima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"VidaMinima"}
                  />
                </Col>
                /
                <Col>
                  <Sinput
                    value={informacionFiltrado.VidaMaxima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"VidaMaxima"}
                  />
                </Col>
              </Row>
            </SCarateristicas>
          </SDiv>
        </SCol>
      </SRow>
      <SRow>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Escudo} />
            <SCarateristicas>
              <Row>
                <Col>
                  <Sinput
                    value={informacionFiltrado.DefensaMinima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"DefensaMinima"}
                  />
                </Col>
                /
                <Col>
                  <Sinput
                    value={informacionFiltrado.DefensaMaxima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"DefensaMaxima"}
                  />
                </Col>
              </Row>
            </SCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={EscudoEspadas} />
            <SCarateristicas>
              <Row>
                <Col>
                  <Sinput
                    value={informacionFiltrado.DefensaEspecialMinima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"DefensaEspecialMinima"}
                  />
                </Col>
                /
                <Col>
                  <Sinput
                    value={informacionFiltrado.DefensaEspecialMaxima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"DefensaEspecialMaximo"}
                  />
                </Col>
              </Row>
            </SCarateristicas>
          </SDiv>
        </SCol>
        <SCol>
          <SDiv>
            <SImgCaracteristicas src={Velocidad} />
            <SCarateristicas>
              <Row>
                <Col>
                  <Sinput
                    value={informacionFiltrado.VelocidadMinima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"VelocidadMinima"}
                  />
                </Col>
                /
                <Col>
                  <Sinput
                    value={informacionFiltrado.VelocidadMaxima}
                    onChange={asignarValoresFiltro}
                    sizeH={18}
                    name={"VelocidadMaxima"}
                  />
                </Col>
              </Row>
            </SCarateristicas>
          </SDiv>
        </SCol>
      </SRow>
    </>
  );
};

export default StatsFiltro;
