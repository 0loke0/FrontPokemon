import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";
import Boton from "../../../../Componentes/Boton";

interface IPropPlayer {
  url: string;
}
const SPlayer = styled.div`
  width: 100px;
  height: 200px;
  background-color: red;
`;
const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player: FC<IPropPlayer> = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <SPlayer>
      <Boton variant='outline-primary' ejecutarFuncion={toggle} nombre='Inicio'>
        {playing ? "Pause" : "Play"}
      </Boton>
    </SPlayer>
  );
};

export default Player;
