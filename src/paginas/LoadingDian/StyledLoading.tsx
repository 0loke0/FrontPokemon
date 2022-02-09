import styled, { keyframes } from "styled-components";

//Cambia el tamaño
const multiplicadorTamaño: number = 50;
//Tiempo de para ciclo de animacion
const segundosAnimacion: number = 3;
//Color del punto que da efecto de movimiento
const colorMovimiento: string = `#1a6a9d`;
//Color del punto estatico para señalar el recorrido
const colorEstatico: string = `#bab9be`;

const tamañoAncho = () => {
  let width = (1600 * multiplicadorTamaño) / 100;
  return `${width}px`;
};

const tamañoAlto = () => {
  let height = (400 * multiplicadorTamaño) / 100;
  return `${height}px`;
};

const escalar = (pixeles: number) => {
  let valorEscalado = (pixeles * multiplicadorTamaño) / 100;
  return valorEscalado;
};

const circulo1: string = `${escalar(100)}px ${escalar(100)}px ${escalar(0)}px`;
const circulo2: string = `${escalar(250)}px ${escalar(100)}px ${escalar(0)}px`;
const circulo3: string = `${escalar(400)}px ${escalar(100)}px ${escalar(0)}px`;
const circulo4: string = `${escalar(550)}px ${escalar(100)}px ${escalar(0)}px`;
const circulo5: string = `${escalar(700)}px ${escalar(100)}px ${escalar(0)}px`;

const animacionCirculo = keyframes`
      0% { box-shadow: 
      ${circulo1}  ${colorMovimiento}, 
      ${circulo2}  ${colorEstatico}, 
      ${circulo3}  ${colorEstatico}, 
      ${circulo4}  ${colorEstatico}, 
      ${circulo5}  ${colorEstatico};
      }
    10% { box-shadow: 
      ${circulo1} ${colorEstatico}, 
      ${circulo2} ${colorMovimiento}, 
      ${circulo3} ${colorEstatico}, 
      ${circulo4} ${colorEstatico} ,
      ${circulo5} ${colorEstatico} ;
     }
    20% { box-shadow: 
      ${circulo1} ${colorEstatico} , 
      ${circulo2} ${colorEstatico} , 
      ${circulo3} ${colorMovimiento}, 
      ${circulo4} ${colorEstatico} ,
      ${circulo5} ${colorEstatico} ;
     }
    30% { box-shadow: 
      ${circulo1} ${colorEstatico} , 
      ${circulo2} ${colorEstatico} , 
      ${circulo3} ${colorEstatico} ,
      ${circulo4} ${colorMovimiento}, 
      ${circulo5} ${colorEstatico} ;
     }
    40% { box-shadow: 
      ${circulo1} ${colorEstatico} , 
      ${circulo2} ${colorEstatico} , 
      ${circulo3} ${colorEstatico} ,
      ${circulo4} ${colorEstatico} ,
      ${circulo5} ${colorMovimiento};
     }
     50% { box-shadow: 
      ${circulo1} ${colorEstatico} , 
      ${circulo2}  ${colorEstatico} , 
      ${circulo3} ${colorEstatico} ,
      ${circulo4} ${colorEstatico} ,
      ${circulo5} ${colorMovimiento};
     }
     60% { box-shadow: 
      ${circulo1} ${colorEstatico} , 
      ${circulo2} ${colorEstatico} , 
      ${circulo3} ${colorEstatico} ,
      ${circulo4} ${colorMovimiento}, 
      ${circulo5} ${colorEstatico} ;
     }
     70% { box-shadow: 
      ${circulo1} ${colorEstatico} , 
      ${circulo2} ${colorEstatico} , 
      ${circulo3} ${colorMovimiento}, 
      ${circulo4} ${colorEstatico} ,
      ${circulo5} ${colorEstatico} ;
     }
     80% { box-shadow: 
      ${circulo1} ${colorEstatico} , 
      ${circulo2} ${colorMovimiento}, 
      ${circulo3} ${colorEstatico} ,
      ${circulo4} ${colorEstatico} ,
      ${circulo5} ${colorEstatico} ;
     }
     90% { box-shadow: 
      ${circulo1} ${colorMovimiento}, 
      ${circulo2} ${colorEstatico} , 
      ${circulo3} ${colorEstatico} ,
      ${circulo4} ${colorEstatico} ,
      ${circulo5} ${colorEstatico} ;
     }
    
`;

export const SContenedorLogoRE = styled.img`
  position: absolute;
  height: 100%;
  width: 25%;
`;
export const SContenedorLogoDian = styled.img`
  position: absolute;
  height: 100%;
  width: 25%;
  left: 75%;
`;
export const SCirculos = styled.div`
  position: absolute;
  top: 12.5%;
  left: 22.5%;
  height: 25%;
  width: 6.25%;
  border-radius: 50%;
  box-shadow: ${circulo1} ${colorMovimiento}, ${circulo2} ${colorEstatico},
    ${circulo3} ${colorEstatico}, ${circulo4} ${colorEstatico},
    ${circulo5} ${colorEstatico};
  animation-name: ${animacionCirculo};
  animation-duration: ${segundosAnimacion}s;
  animation-iteration-count: infinite;
`;
export const Scontenedor = styled.div`
  position: relative;
  width: ${tamañoAncho};
  height: ${tamañoAlto};
`;
