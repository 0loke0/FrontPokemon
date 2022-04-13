export const determinarColorSegunRareza = (rareza: string) => {
  switch (rareza) {
    case "Comun":
      return `linear-gradient(0deg, #ffffff 0%,#b0b6af  100%);`;
    case "Poco comun":
      return `linear-gradient(0deg, #D1E8E4 0%, #72c86a 100%);`;
    case "Rara":
      return `linear-gradient(0deg, #D1E8E4 0%, #277acf  100%);`;
    case "Epica":
      return `linear-gradient(0deg, #ecdcec 0%, #e236e2 100%);`;
    case "Epica Singular":
      return `linear-gradient(0deg, #FFE8E8 0%, #9712b5 100%);`;
    case "Legendaria":
      return `linear-gradient(0deg, #e2dcac 0%, #e77a36 100%);`;
    default:
      return `linear-gradient(0deg, #d3fcff 0%, #feffff 100%);`;
  }
};
