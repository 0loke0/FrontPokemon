import React from "react";
import styled from "styled-components";

const colorPunterosInicial = "#0c20d1";
const SContenedor = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: #bbf5f2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SContorno = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: #bbb2b2;
  transform: translate(-50%, -50%);
`;

const SPunteros = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 45%;
  height: 5px;
  background-color: ${colorPunterosInicial};
  transform-origin: left;
  transform: rotate(-90deg);
`;

const Cronometro = () => {
  return (
    <div>
      <SContenedor>
        <SContorno />
        <SPunteros />
      </SContenedor>
    </div>
  );
};

export default Cronometro;
