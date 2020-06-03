import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const SlidePanel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1920px;
`;

export const BotaoDireita = styled(ArrowForwardIosIcon)`
  height: 80vh;
  width: 20vw;
  background-color: grey;
  transform: scale(5);
  position: relative;
  right: 100px;
  top: 300px;
  cursor: pointer;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 0.4;
`;

export const BotaoEsquerda = styled(ArrowBackIosIcon)`
  height: 80vh;
  width: 20vw;
  background-color: grey;
  transform: scale(5);
  position: relative;
  left: 100px;
  top: 300px;
  cursor: pointer;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 0.4;
`;
