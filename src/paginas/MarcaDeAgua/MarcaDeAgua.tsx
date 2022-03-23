import React from "react";
import styled from "styled-components";

/*height: 3512px;
  width: 2480px;*/
const SContenedorImagen = styled.div`
  background-color: #ffffff;
  height: 1756px;
  width: 1240px;
  clip-path: inset(0 0 0 0);
  /* border: 1px solid red; */
`;

const SContenedorMarca1 = styled.div`
  position: absolute;
  background-color: transparent;
  border-radius: 50%;
  height: 600px;
  width: 600px;
  border: 20px solid #f7f8f8;
  left: 40%;
  top: 10%;
`;

const SContenedorMarca1A = styled.div`
  position: absolute;
  background-color: transparent;
  border-radius: 50%;
  height: 80%;
  width: 80%;
  border: 20px solid #f7f8f8;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SContenedorMarca2 = styled.div`
  position: absolute;
  background-color: transparent;
  border-radius: 50%;
  height: 1000px;
  width: 1000px;
  border: 35px solid #f7f8f8;
  left: -8%;
  top: 50%;
`;

const SContenedorMarca2A = styled.div`
  position: absolute;
  background-color: transparent;
  border-radius: 50%;
  height: 80%;
  width: 80%;
  border: 35px solid #f7f8f8;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const MarcaDeAgua = () => {
  return (
    <SContenedorImagen>
      <SContenedorMarca1>
        <SContenedorMarca1A />
      </SContenedorMarca1>
      <SContenedorMarca2>
        <SContenedorMarca2A />
      </SContenedorMarca2>
    </SContenedorImagen>
  );
};
