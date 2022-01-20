import React, { FC, useEffect } from "react";

export interface IAppProps {
  info: string;
}

const SeccionPokemones: FC<IAppProps> = ({ info }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <p>info</p>
    </div>
  );
};
export default SeccionPokemones;
