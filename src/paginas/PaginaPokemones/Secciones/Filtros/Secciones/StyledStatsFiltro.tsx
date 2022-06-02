import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  sizeW?: number;
  sizeH?: number;
}

export const SCol = styled(Col)`
  height: 50px;
  padding: 2px;
`;
export const SRow = styled(Row)`
  position: relative;
  margin-top: 5px;
  margin: 1% 0% 0% 0%;
  padding: 2px;
  height: 120px;
`;

export const SDiv = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 150px;
  height: 45px;

  border: 1px solid #0783ff;
  border-radius: 10px;
  background-color: transparent;
`;

export const SImgCaracteristicas = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  left: 50%;
  transform: translate(-50%, -20%);
`;

export const Sinput = styled.input`
  position: relative;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
  left: 50%;
  width: ${(p: IProps) => (p.sizeW ? p.sizeW + `px` : "30px")};
  height: ${(p: IProps) => (p.sizeH ? p.sizeH + `px` : "auto")};
  border-radius: 5px;
  border: 0.5px solid #42a9fd;
  text-align: center;
  transform: translate(-50%);
  &:focus {
    outline: none;
    border: none;
    box-shadow: 0px 0px 5px #a0bad3;
  }
`;

export const SCarateristicas = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, 0%);
  text-align: center;
  font-family: Righteous;
`;
