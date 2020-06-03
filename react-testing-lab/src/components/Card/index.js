import React from "react";
import { CardContainer, Foto, InfoBox, Texto } from "./style";

export function Card(props) {
  return (
    <CardContainer>
      <Foto src={props.slideAtual.photo} alt="foto" />
      <InfoBox>
        <Texto variant="h3">Friedrich Nitzsche</Texto>
        <Texto variant="h3">Oct 15 1844</Texto>
      </InfoBox>
    </CardContainer>
  );
}

export default Card;
