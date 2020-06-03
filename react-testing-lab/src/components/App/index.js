import React, { useState, useEffect } from "react";
import Card from "../Card";
import { SlidePanel, BotaoEsquerda, BotaoDireita } from "./style";

export function App(props) {
  return (
    <SlidePanel>
      <BotaoEsquerda onClick={props.previousSlide}></BotaoEsquerda>
      <Card fotos={props.fotos} slideAtual={props.slideAtual} />
      <BotaoDireita onClick={props.nextSlide}></BotaoDireita>
    </SlidePanel>
  );
}

export default App;
