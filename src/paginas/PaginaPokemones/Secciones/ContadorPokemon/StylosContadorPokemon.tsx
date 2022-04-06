import styled from "styled-components";

export const SDivCantidadRegistros = styled.div`
  position: absolute;
  width: 100px;
  height: 60px;
  background-color: brown;
  left: 100%;
  transform: translate(-120%);
  border-radius: 5px;
  transition: 1s;
`;

export const SDivCortina = styled.div`
  position: absolute;
  width: 102px;
  height: 62px;
  left: 50%;
  top: 50%;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid;
  transform: translate(-50%, -50%);
  &:hover,
  &:focus {
    transition: 1s;
  }
`;

export const SImg = styled.img`
  height: 200px;
  width: 200px;
`;

export const SRegistros = styled.div`
  position: absolute;
  width: 100px;
  height: 60px;
  left: 50%;
  top: 50%;
  font-family: Poiret One;
  font-size: 22px;
  text-align: center;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  border-left: 100px solid rgba(0, 212, 255, 1);
  transition: 1s;
  clip-path: inset(0 0 0 0);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(40, 110, 227, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  transition: 1.5s;
  &:hover,
  &:focus {
    transition: 1.5s;
    border-left: 0px solid rgba(40, 110, 227, 1);
    background-color: #d4fad9;
  }
`;
