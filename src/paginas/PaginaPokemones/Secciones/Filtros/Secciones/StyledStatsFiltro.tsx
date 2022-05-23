import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  sizeW?: number;
  sizeH?: number;
}

export const SCol = styled(Col)`
  height: 50px;
  margin: 2px 30px;
  border: 1px solid #0783ff;
  border-radius: 10px;
  background-color: transparent;
`;

export const SDiv = styled.div`
  position: relative;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
`;

export const SImgCaracteristicas = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  top: 23%;
  width: 300%;
  transform: translate(-50%, 0%);
  text-align: center;
  font-family: Righteous;
`;

export const SRow = styled(Row)`
  position: relative;
  margin-top: 5px;
  margin: 1% 0% 0% 0%;
`;
