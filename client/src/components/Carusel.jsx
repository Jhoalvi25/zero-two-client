import React from "react";
import "../style/Carusel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import caruselImg from "../Carusel-logyc/caruselImg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import defaultImg from '../img/defaultImg.jpg'
export default function Carusel() {
  const [currentImage, setImageCurrent] = React.useState(0);
  const animes = useSelector(state => state.animes);
  const amount = caruselImg?.length;

  if (!Array.isArray(caruselImg) || amount === 0) return;

  const nextImage = () => {
    setImageCurrent(currentImage === 0 ? amount - 1 : currentImage - 1);
  };

  const backImage = () => {
    setImageCurrent(currentImage === amount - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="center">
      <div className="carusel_cont">
        <button onClick={backImage} className="btn">
          {" "}
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="img_carusel_cont fade">
          {animes && animes.map((elem, index) => {
            return (
              <div key={index}>
                {currentImage === index && <h2 key={index}>{elem.name}</h2>}
              </div>
            );
          })}

          {animes && animes.map((elem, index) => {
            return (
              <div key={index} className='img-container'>
                {currentImage === index && (
                  <Link to={`/animes/${elem?.id}`}>
                    <img key={index} src={elem.coverImage ? elem.coverImage: defaultImg}  alt="img" />
                  </Link>
                  
                )}
              </div>
            );
          })}
        </div>

        <button onClick={nextImage} className="btn">
          {" "}
          <FontAwesomeIcon icon={faChevronRight} />{" "}
        </button>
      </div>
    </div>
  );
}
