
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import SectionHomeUno from "./SectionHomeUno";
import SectionHomeDos from "./SectionHomeDos";
import { useAppDispatch } from "../../redux/hooks";
import { getAllAnimes, getAnimeNewest, getAnimes, getAnimeTrending } from "../../redux/actions";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(getAllAnimes(''));
    dispatch(getAnimes(''));
    dispatch(getAnimeNewest('page=1'));
    dispatch(getAnimeTrending())
  })
  return (
    <div>
      <Carousel />
      <SectionHomeUno />
      <SectionHomeDos />
    </div>
  );
}
