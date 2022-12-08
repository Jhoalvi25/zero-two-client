import React from "react";
import AnimeCards from "./AnimeCards";
import { useEffect } from "react";
import { getAnimes } from "../redux/Animes/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);

  useEffect(() => {
    dispatch(getAnimes());
  }, []);
  console.log("ddddd", animes.data);
  animes.data.length > 0 && animes.data.map((a) => console.log("rrr", a));
  return (
    <div>
      {animes.length > 0 &&
        animes.map((a) => {
          return (
            <AnimeCards
              image={a.attributes.posterImage.small}
              name={a.attributes.slug}
              type={a.attributes.type}
              rating={a.attributes.averageRating}
            />
          );
        })}
    </div>
  );
};
export default Dashboard;
