import styled from "styled-components";
import Background from "../../Multimedia/Pokemon/PaginaPokemon/Background.png";

export const SGeneralPaginaPokemon = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  height: 100%;
  border: 1px solid blue;
  box-shadow: 0px 0px 3px black;
  background-color: #9dcbfaac;
  border-radius: 20px;
  padding: 40px;
`;

export const STitulo = styled.p`
  font-family: Poiret One;
  font-size: 40px;
`;

export const SPaginaPokemones = styled.div`
  background-image: url(${Background});
  height: 899px;
  width: 100%;
  padding: 2% 5%;
`;
