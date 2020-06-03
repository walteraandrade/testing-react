import React, { useState, useEffect } from "react";
import App from "./App";

export function AppContainer(props) {
  const [slideAtual, slideChanger] = useState(props.fotos);

  useEffect(() => {
    slideChanger(slideAtual[0]);
  }, []);

  const nextSlide = () => {
    slideChanger(slideAtual[+1]);
    console.log(slideAtual);
  };
  const previousSlide = () => {
    slideChanger(slideAtual[-1]);
    console.log("works");
  };
  return (
    <div>
      <App
        slideAtual={slideAtual}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
      />
    </div>
  );
}

export default AppContainer;
