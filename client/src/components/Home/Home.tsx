import { useEffect } from "react";
import Carousel from "./Carousel";
import SectionHomeUno from "./SectionHomeUno";
import SectionHomeDos from "./SectionHomeDos";
import { useAppDispatch } from "../../redux/hooks";
import {
  getAnimeNewest,
  getAnimes,
  getAnimeTrending,
} from "../../redux/actions";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnimes(""));
    dispatch(getAnimeNewest("?page=1"));
    dispatch(getAnimeTrending("?page=1"));
  });
  return (
    <div>
      <Carousel />
      <SectionHomeUno />
      <SectionHomeDos />
    </div>
  );
}
