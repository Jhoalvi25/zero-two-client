import React from "react";
import style from "../style/NotFound.module.css";
import zeroTwo from "../img/pensando.gif"

export default function NotFound(){
  return (
    <div>
        <h1>Not Found 404</h1>
      <img src={zeroTwo} alt="Sin Resultado" width={"450px"}></img>
    </div>
  );
};
