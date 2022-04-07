import styled from "styled-components";

export const SDivCantidadRegistros = styled.div`
  position: absolute;
  width: 50px;
  height: 30px;
  top: 15%;
  right: 0%;
  transform: translate(-100%);
  border-radius: 5px;
  transition: 1s;
  z-index: 1;
`;

export const SImgPikachu = styled.img`
  top: 50%;
  left: 50%;
  height: 150px;
  width: 150px;
  transform: translate(-50%, -50%);
`;
export const SImgPikachuManos = styled.img`
  height: 150px;
  width: 150px;
  transform: translate(-50%, -150%);
`;

export const SDivCortina = styled.div`
  position: absolute;
  width: 52px;
  height: 32px;
  top: 175%;
  left: -10%;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid;
  transform: translate(-50%, -50%);
  &:hover,
  &:focus {
    transition: 1s;
  }
`;

export const SRegistros = styled.div`
  position: absolute;
  width: 50px;
  height: 30px;
  top: 175%;
  left: -10%;
  font-family: Poiret One;
  font-size: 22px;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  transform: translate(-50%, -50%);

  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(40, 110, 227, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  transition: 1.5s;
`;
