import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import { Row } from "react-bootstrap";

let coloresTipos = (idTipo: number) => {
  switch (idTipo) {
    case 1:
      return `#9e9aa5 `;
    case 2:
      return `#309afc`;
    case 3:
      return `#a8b82c`;
    case 4:
      return `#7e6ad4`;
    case 5:
      return `#ffe199`;
    case 6:
      return `#7474ae`;
    case 7:
      return `#ed4c2f`;
    case 8:
      return `#feaaff`;
    case 9:
      return `#7adbfb`;
    case 10:
      return `#b85742`;
    case 11:
      return `#bcbbab`;
    case 12:
      return `#7ec958`;
    case 13:
      return `#de6590`;
    case 14:
      return `#bfab68`;
    case 15:
      return `#6a574c`;
    case 16:
      return `#dbbf55`;
    case 17:
      return `#a65e9a`;
    case 18:
      return `#7199e0`;
    default:
      return `#67a290`;
  }
};

export const SDivTitulo = styled.div`
  text-align: left;
  margin: 2% 0% 0% 10%;
  font-family: monospace;
  font-size: x-large;
`;
export const SDivIdentificador = styled.div`
  top: 2%;
  left: 2%;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: #9dccfa;
  color: #ffffff;
`;

export const SCol = styled(Col)`
  margin: 1% 4%;
  width: 20%;
  height: 50px;
  text-align: center;
  border: 1px solid #29c5f1;
  border-radius: 10% 10% 10% 10%;
  background-color: white;
`;

export const SRow = styled(Row)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin: 1% 0% 0% 0%;
`;
export const SContenedorImagen = styled.div`
  margin-top: 5%;
  position: relative;
  top: 0%;
  left: 50%;
  width: 95%;
  height: 200px;
  background-color: #ddedf4;
  border-radius: 5%;
  border: 3px Solid black;
  transform: translate(-50%, 0%);
`;

export const SContenedorTipo = styled.div<{ tipo: number; posicion: string }>`
  position: relative;
  top: -102%;
  width: 30%;
  height: 15%;
  background-color: ${({ tipo }) => {
    return coloresTipos(tipo);
  }};
  border-radius: 50px;
  border: 1px Solid black;
  transform: ${({ posicion }) => {
    switch (posicion) {
      case "Primaria":
        return `translate(-25%, -50%)`;
      case "Secundaria":
        return `translate(80%, -150%)`;
      default:
        return `translate(0%, 0%)`;
    }
  }};
  text-align: center;
  color: #ffffff;
`;

export const StyledCard = styled(Card)<{ rareza: string }>`
  padding: 5px;
  border-radius: 10px;
  border: 4px solid #9dccfa;
  box-shadow: 5px 5px 10px #7d7d7d;
  background-color: #ffdee9;
  background-image: ${({ rareza }) => {
    switch (rareza) {
      case "Comun":
        return `linear-gradient(0deg, #474747 0%, #afafaf 100%);`;
      case "Poco comun":
        return `linear-gradient(0deg, #2f3663 0%, #3e54c9 100%);`;
      case "Rara":
        return `linear-gradient(0deg, #402c63 0%, #6a3cc7 100%);`;
      case "Epica":
        return `linear-gradient(0deg, #5a2562 0%, #a627b3 100%);`;
      case "Epica Singular":
        return `linear-gradient(0deg, #5d2f2e 0%, #b43e40 100%);`;
      case "Legendaria":
        return `linear-gradient(0deg, #5f5817 0%, #c4a909 100%);`;
      default:
        return `linear-gradient(0deg, #d3fcff 0%, #feffff 100%);`;
    }
  }};
`;

export const SImg = styled.img`
  position: relative;
  width: 100%;
  height: 195px;
  border-radius: 5%;
`;

export const SDivTipos = styled.div`
  position: absolute;
  width: 100%;
`;
