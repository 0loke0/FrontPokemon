import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";
import SongOn from "../../../../Multimedia/Pokemon/Song/SongOn.png";
import SongOff from "../../../../Multimedia/Pokemon/Song/SongOff.png";

interface IPropPlayer {
  url: string;
}

const SButton = styled.button`
  background-color: transparent;
  position: relative;
  height: 40px;
  width: 40px;
  border: 1px solid transparent;
  border-radius: 0%;
`;

const SImg = styled.img`
  position: relative;
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SMusicaGeneral = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 99%;
  top: 98%;
  transform: translate(-100%, -100%);
`;

const MusicaGeneral: FC<IPropPlayer> = ({ url }) => {
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
  return (
    <SMusicaGeneral>
      <SButton onClick={toggle}>
        <SImg src={playing ? SongOn : SongOff} alt='Delete' />
      </SButton>
    </SMusicaGeneral>
  );
};

export default MusicaGeneral;
