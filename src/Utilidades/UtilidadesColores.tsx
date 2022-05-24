export const determinarColorSegunRareza = (rareza: string) => {
  switch (rareza) {
    case "Común":
      return `linear-gradient(0deg, #ffffff 0%,
        ${determinarColorMateSegunRareza(rareza)} 100%);`;
    case "Poco Común":
      return `linear-gradient(0deg, #D1E8E4 0%, 
        ${determinarColorMateSegunRareza(rareza)} 100%);`;
    case "Rara":
      return `linear-gradient(0deg, #D1E8E4 0%, 
        ${determinarColorMateSegunRareza(rareza)}  100%);`;
    case "Épica":
      return `linear-gradient(0deg, #ecdcec 0%, 
        ${determinarColorMateSegunRareza(rareza)} 100%);`;
    case "Épica Singular":
      return `linear-gradient(0deg, #FFE8E8 0%, 
        ${determinarColorMateSegunRareza(rareza)} 100%);`;
    case "Legendaria":
      return `linear-gradient(0deg, #e2dcac 0%, 
        ${determinarColorMateSegunRareza(rareza)} 100%);`;
    default:
      return `linear-gradient(0deg, #d3fcff 0%, 
        ${determinarColorMateSegunRareza(rareza)} 100%);`;
  }
};

export const determinarColorMateSegunRareza = (rareza: string) => {
  switch (rareza) {
    case "Común":
      return `#b0b6af`;
    case "Poco Común":
      return `#72c86a`;
    case "Rara":
      return `#277acf`;
    case "Épica":
      return `#e236e2`;
    case "Épica Singular":
      return `#9712b5`;
    case "Legendaria":
      return `#e77a36`;
    default:
      return `#feffff`;
  }
};

let coloresTipos = (idTipo: number) => {
  switch (idTipo) {
    case 1:
      return `#9e9aa5 `;
    case 2:
      return `#309afc`;
    case 3:
      return `#a8b82c`;
    case 4:
      return `#7e6ad4`;
    case 5:
      return `#ffe199`;
    case 6:
      return `#7474ae`;
    case 7:
      return `#ed4c2f`;
    case 8:
      return `#feaaff`;
    case 9:
      return `#7adbfb`;
    case 10:
      return `#b85742`;
    case 11:
      return `#bcbbab`;
    case 12:
      return `#7ec958`;
    case 13:
      return `#de6590`;
    case 14:
      return `#bfab68`;
    case 15:
      return `#6a574c`;
    case 16:
      return `#dbbf55`;
    case 17:
      return `#a65e9a`;
    case 18:
      return `#7199e0`;
    default:
      return `#67a290`;
  }
};
