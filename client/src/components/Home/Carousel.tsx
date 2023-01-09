import React from "react";
import style from "../../style/Home/Carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import defaultImg from "../../img/defaultImg.jpg";
import { useAppSelector } from "../../redux/hooks";

export default function Carousel() {
  const nextImage = () => {
    setImageCurrent(currentImage === 0 ? amount - 1 : currentImage - 1);
  };

  const backImage = () => {
    setImageCurrent(currentImage === amount - 1 ? 0 : currentImage + 1);
  };

  const [currentImage, setImageCurrent] = React.useState(0);


  const animes = useAppSelector((state) => state.animesTrending);


  const amount: number = animes?.rows.length;

  if (!Array.isArray(animes.rows) || amount === 0)
    return (
      <div>
        <p>Sin info</p>
      </div>
    );

  return (
    <div className={style.center}>
      <section className={style.header}>
        <h1>
          What´s being <span>watched</span> now?
        </h1>
        <div className={style.carusel_cont}>
          <button onClick={backImage} className={style.btn}>
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className={style["img_carusel_cont"]}>
            {animes.rows &&
              animes.rows.map((elem, index) => {
                return (
                  <div key={index}>
                    {currentImage === index && <h2 key={index}>{elem.name}</h2>}
                  </div>
                );
              })}

            {animes.rows &&
              animes.rows.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className={style["img-container"] + " " + style["fade"]}
                  >
                    {currentImage === index && (
                      <Link to={`/watch/${elem?.id}`}>
                        <img
                          key={index}
                          src={elem.coverImage ? elem.coverImage : defaultImg}
                          alt="img"
                        />
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>

          <button onClick={nextImage} className={style["btn"]}>
            {" "}
            <FontAwesomeIcon icon={faChevronRight} />{" "}
          </button>
        </div>
      </section>
    </div>
  );
}
