import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { blueGrey } from "@material-ui/core/colors";

const corTexto = blueGrey[50];
export const CardContainer = styled.div`
  height: 60vh;
  width: 60vw;
  margin: 100px auto;
  position: relative;
`;

export const Foto = styled.img`
  height: 100%;
  width: 100%;
`;

export const InfoBox = styled.div`
  background-color: #262626;
  position: relative;
  width: 100%;
  bottom: 120px;
  /* height: 30%; */
  opacity: 0.7;
  transition: 1800ms;
  clip-path: circle(50px at 90% 50%);
  transition: 500ms ease-in-out;
  &:hover {
    clip-path: circle(1200px at 100% -20%);
  }
`;

export const Texto = styled(Typography)`
  color: ${corTexto};
  font-weight: bold;
`;
