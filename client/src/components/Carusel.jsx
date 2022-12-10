import React from "react";
import "../style/Carusel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import caruselImg from "../Carusel-logyc/caruselImg";


export default function Carusel() {

  return (
    <div className="center">
      <div className="carusel_cont">
        <button className="btn" >
          {" "}
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="img_carusel_cont fade">
          <h2>{caruselImg[0].name}</h2>
          <img src={caruselImg[0].image} width="100%" alt="img" />
        </div>

        <button className="btn">
          {" "}
          <FontAwesomeIcon icon={faChevronRight} />{" "}
        </button>
      </div>
    </div>
  );
}
