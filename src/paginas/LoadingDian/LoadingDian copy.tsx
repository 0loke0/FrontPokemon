import React from "react";
import styled, { keyframes } from "styled-components";
// import LogoDian from "../../Multimedia/LogoDian.png";
// import LogoRE from "../../Multimedia/LogoRE.jpg";

const animacionLogoRe = keyframes`
  0% { filter: grayscale(0%); }
 20% { filter: grayscale(0%); }
 40% { filter: grayscale(0%); } 
 50% { filter: grayscale(100%); } 
 60% { filter: grayscale(100%); }    
 80% { filter: grayscale(100%); } 
`;
const animacionLogoDian = keyframes`
  0% { filter: grayscale(100%); }
 20% { filter: grayscale(100%); }
 40% { filter: grayscale(100%); }
 50% { filter: grayscale(0%); } 
 60% { filter: grayscale(0%); }    
 80% { filter: grayscale(0%); } 
`;
const animacionCirculo1 = keyframes`
    0% { box-shadow: 
    100px 100px 0px #1a6a9d, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
    }
    10% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #1a6a9d, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    20% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #1a6a9d,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    30% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #1a6a9d,
    700px 100px 0px #bab9be;
     }
    40% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #1a6a9d;
     }
     50% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #1a6a9d;
     }
     60% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #1a6a9d,
    700px 100px 0px #bab9be;
     }
     70% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #1a6a9d,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
     80% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #1a6a9d, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    
`;

const animacionCirculo2 = keyframes`
    0% { box-shadow: 
    100px 100px 0px #1a6a9d, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
    }
    20% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #1a6a9d, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    40% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #1a6a9d,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    60% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #1a6a9d,
    700px 100px 0px #bab9be;
     }
     80% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #1a6a9d;
     }
     }
    
`;

const animacionCirculo3 = keyframes`
    0% { box-shadow: 
    100px 50px 0px #1a6a9d, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
    }
    10% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 50px 0px #1a6a9d, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    20% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 50px 0px #1a6a9d,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    30% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 50px 0px #1a6a9d,
    700px 100px 0px #bab9be;
     }
    40% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 50px 0px #1a6a9d;
     }
     50% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 50px 0px #1a6a9d;
     }
     60% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 100px 0px #bab9be,
    550px 50px 0px #1a6a9d,
    700px 100px 0px #bab9be;
     }
     70% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 100px 0px #bab9be, 
    400px 50px 0px #1a6a9d,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
     80% { box-shadow: 
    100px 100px 0px #bab9be, 
    250px 50px 0px #1a6a9d, 
    400px 100px 0px #bab9be,
    550px 100px 0px #bab9be,
    700px 100px 0px #bab9be;
     }
    
`;

const SContenedorLogoRE1 = styled.img`
  position: absolute;
  top: 0px;
  left: 10px;
  height: 400px;
  width: 400px;
  filter: grayscale(0%);
  animation-name: ${animacionLogoRe};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
const SContenedorLogoDian1 = styled.img`
  position: absolute;
  height: 400px;
  width: 400px;
  left: 1200px;
  top: 0px;
  filter: grayscale(0%);
  animation-name: ${animacionLogoDian};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
const SContenedorLogoRE2 = styled.img`
  position: absolute;
  top: 600px;
  left: 10px;
  height: 400px;
  width: 400px;
  filter: grayscale(0%);
  animation-name: ${animacionLogoRe};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
const SContenedorLogoDian2 = styled.img`
  position: absolute;
  height: 400px;
  width: 400px;
  left: 1200px;
  top: 600px;
  filter: grayscale(0%);
  animation-name: ${animacionLogoDian};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

const SContenedorLogoRE3 = styled.img`
  position: absolute;
  top: 1200px;
  left: 10px;
  height: 400px;
  width: 400px;
  filter: grayscale(0%);
`;
const SContenedorLogoDian3 = styled.img`
  position: absolute;
  height: 400px;
  width: 400px;
  left: 1200px;
  top: 1200px;
  filter: grayscale(0%);
`;

const SContenedorLogoRE4 = styled.img`
  position: absolute;
  top: 1800px;
  left: 10px;
  height: 400px;
  width: 400px;
  filter: grayscale(0%);
`;
const SContenedorLogoDian4 = styled.img`
  position: absolute;
  height: 400px;
  width: 400px;
  left: 1200px;
  top: 1800px;
  filter: grayscale(0%);
`;

const SCirculos1 = styled.div`
  position: absolute;
  top: 50px;
  left: 350px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 100px 100px 0px #1a6a9d, 250px 100px 0px #bab9be,
    400px 100px 0px #bab9be, 550px 100px 0px #bab9be, 700px 100px 0px #bab9be;
  animation-name: ${animacionCirculo1};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

const SCirculos2 = styled.div`
  position: absolute;
  top: 650px;
  left: 350px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 100px 100px 0px #1a6a9d, 250px 100px 0px #bab9be,
    400px 100px 0px #bab9be, 550px 100px 0px #bab9be, 700px 100px 0px #bab9be;
  animation-name: ${animacionCirculo1};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

const SCirculos3 = styled.div`
  position: absolute;
  top: 1250px;
  left: 350px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 100px 100px 0px #1a6a9d, 250px 100px 0px #bab9be,
    400px 100px 0px #bab9be, 550px 100px 0px #bab9be, 700px 100px 0px #bab9be;
  animation-name: ${animacionCirculo2};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

const SCirculos4 = styled.div`
  position: absolute;
  top: 1850px;
  left: 350px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 100px 50px 0px #1a6a9d, 250px 100px 0px #bab9be,
    400px 100px 0px #bab9be, 550px 100px 0px #bab9be, 700px 100px 0px #bab9be;
  animation-name: ${animacionCirculo3};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
const SContenedor = styled.div``;
const LoadingDian2 = () => {
  return (
    <>
      {/* <SContenedorLogoRE1 src={LogoRE} alt='Logo' />
      <SContenedorLogoDian1 src={LogoDian} alt='Logo' />
      <SCirculos1 />

      <SContenedorLogoRE2 src={LogoRE} alt='Logo' />
      <SContenedorLogoDian2 src={LogoDian} alt='Logo' />
      <SCirculos2 /> */}

      {/* <SContenedorLogoRE3 src={LogoRE} alt='Logo' />
      <SContenedorLogoDian3 src={LogoDian} alt='Logo' />
      <SCirculos3 /> */}

      {/* <SContenedorLogoRE4 src={LogoRE} alt='Logo' />
      <SContenedorLogoDian4 src={LogoDian} alt='Logo' />
      <SCirculos4 /> */}
    </>
  );
};

export default LoadingDian2;
