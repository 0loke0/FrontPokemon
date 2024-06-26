import styled from "styled-components";

export const SDivCantidadRegistros = styled.div`
  position: fixed;
  width: 3%;
  height: 4%;
  top: 13%;
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
  width: 62px;
  height: 42px;
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
  width: 60px;
  height: 40px;
  top: 175%;
  left: -10%;
  font-family: Poiret One;
  font-size: 28px;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  transform: translate(-50%, -50%);

  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(40, 110, 227, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  transition: 1.5s;
`;
