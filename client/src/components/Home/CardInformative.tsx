import { PropsWithRef } from "react";
import { Link } from "react-router-dom";
import style from "../../style/Home/CardInformative.module.css";
import Tag from "../UtilsComponents/Tag";
import formatDate from "../../utils/formatDate";
import { Anime } from "../../types/types";

export default function CardInformative({
  name,
  posterImage,
  id,
  synopsis,
  showType,
  status,
  startDate,
}: PropsWithRef<Anime>) {
  return (
    <div className={style["cardInformative"]} key={name + id}>
      <div className={style["cardInformative-first"]}>
        <div className={style["cardInformative-image-container"]}>
          <img
            src={posterImage}
            alt="anime about alt"
            className={style["anime-img"]}
          />
        </div>
        <div className={style["about"]}>
          <Link to={"/animes/" + id}>
            <h4>{name}</h4>
          </Link>
        </div>
      </div>
      <div className={style["cardInformative-second"]}>
        <h4>Description</h4>
        <div className={style["description"]}>
          <p>{synopsis}</p>
          <Link to={`/animes/${id}`} className={style["read-more"]}>
            read more
          </Link>
        </div>
        <span className={style["date"]}>
          {startDate ? formatDate(startDate) : null}
        </span>

        <div className={style["tags"]}>
          <Tag title={showType} bgColor={"white"} color={"#5519B6"} />
          <Tag title={status} color={"white"} bgColor={"#5519B6"} />
        </div>
      </div>
    </div>
  );
}
