import styled from "styled-components";
import Background from "../../Multimedia/Pokemon/PaginaPokemon/Background.png";
import { ContadorPokemon } from "./Secciones/ContadorPokemon/ContadorPokemon";
import MusicaGeneral from "./Secciones/Musica/MusicaGeneral";

export const SGeneralPaginaPokemon = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  height: 100%;
  border: 1px solid blue;
  box-shadow: 0px 0px 8px black;
  background-color: #9dcbfaac;
  border-radius: 30px;
  padding: 40px;
  top: 2%;
`;

export const STitulo = styled.img`
  position: relative;
  white: 18%;
  height: 18%;
  left: 0%;
  transform: translate(-40%, -75%);
  top: 0%;
`;

export const SPaginaPokemones = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 899px;
  width: 100%;
  padding: 2% 5%;
`;
