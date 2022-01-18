import React, { useEffect, useState } from "react";

interface tipos {
  IdTipo: number;
  NombreTipo: string;
}

function PaginaPokemones() {
  // const [tipos, settipos] = useState<tipos[]>();

  // useEffect(() => {
  //   fetch("http://localhost:63107/api/PruebasPoke/InformacionDePruebas2")
  //     .then((response) => response.json())
  //     .then((data) => settipos(data));
  // }, []);
  return (
    <p>sadawdas</p>
    // <table>
    //   <tr>
    //     <th>Id</th>
    //     <th>Tipo</th>
    //   </tr>

    //   {tipos.map((x) => (
    //     <tr>
    //       <td>{x.IdTipo}</td>
    //       <td>{x.NombreTipo}</td>
    //     </tr>
    //   ))}
    // </table>
  );
}

export default PaginaPokemones;
