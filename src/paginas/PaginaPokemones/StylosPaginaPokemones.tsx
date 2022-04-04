import styled from "styled-components";

export const SGenenarlPaginaPokemon = styled.div`
  margin-top: 2%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  height: 80%;
  width: 90%;
  border: 1px solid blue;
  box-shadow: 0px 0px 3px black;
  background-color: #f0f8ff;
  border-radius: 20px;
  padding: 40px;
`;

export const STitulo = styled.p`
  font-family: Poiret One;
  font-size: 40px;
`;

export const SRegistros = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  font-family: Indie Flower;
  font-size: 20px;
  text-align: center;
  transform: translate(-50%, -25%);
  opacity: 0.5;
  &:hover,
  &:focus {
    opacity: 1;
    transition: 1s;
    background-color: #87cefa;
  }
`;

export const SDivCantidadRegistros = styled.div`
  position: fixed;
  width: 210px;
  height: 60px;
  background-color: brown;
  left: 100%;
  transform: translate(-110%);
  border-radius: 5px;
  transition: 1s;
`;
export const SDivCortina = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  top: 0%;
  left: 0%;
  border-left: 150px Solid brown;
  &:hover,
  &:focus {
    transition: 1s;
    background-color: transparent;
  }
`;
