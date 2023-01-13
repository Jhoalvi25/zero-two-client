import { Link } from "react-router-dom";
import Tag from "../UtilsComponents/Tag";
import style from "../../style/AnimesPage/Animecard.module.css";
import { Anime } from "../../types/types";

export default function AnimeCards({
  posterImage,
  name,
  id,
  showType,
  status,
}: Anime) {
  return (
    <div className={style["cardAnime loading"]}>
      <div className={style["cardAnime-image-container loading"]}>
        <Link to={`/watch/${id}`}>
          <img
            loading="lazy"
            src={posterImage}
            alt={`img ${name}`}
            backdrop-filter="blur"
            className={style["anime-img loading"]}
          />
        </Link>
      </div>
      <div className={style["cardAnime-content-container loading"]}>
        <h4>{name}</h4>
        <Tag title={showType} bgColor="white" color="#5519B6" />
        <Tag title={status} bgColor="#5519B6" color="white" />
      </div>
    </div>
  );
}
