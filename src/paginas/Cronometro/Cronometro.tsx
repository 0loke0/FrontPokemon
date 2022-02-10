import React from "react";
import styled, { keyframes } from "styled-components";

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
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

const SldsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const SldsRingDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
`;

const Otro = styled.svg`
  width: 200px;
  height: 200px;
  & .path {
    stroke: #bf9052;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: 2;
    /* animation: dash 60s linear infinite; */
  }
`;
const StyledSpinner = styled.svg`
  /* animation: rotate 60s linear infinite; */
  margin: 0px 0 0 -0px;
  width: 100px;
  height: 100px;
  /* transform: rotate(270deg); */

  transform: rotate(270deg);
  & .path {
    stroke: #38becf;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: 125;
    stroke-dashoffset: 10;
    animation: dash 10s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    50% {
      stroke-dasharray: 0;
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dasharray: 125;
      stroke-dashoffset: 0;
    }
  }
`;

const Cronometro = () => {
  return (
    <div>
      <StyledSpinner viewBox='0 0 50 50'>
        <circle
          className='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='1'>
          50
        </circle>
        <>dsadwwas</>
      </StyledSpinner>
      <Otro>
        <circle className='path' />
      </Otro>
    </div>
  );
};

export default Cronometro;
