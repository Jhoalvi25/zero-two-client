import React from "react";

import Carousel from "./Carousel";
import SectionHomeUno from "./SectionHomeUno";
import SectionHomeDos from "./SectionHomeDos";

export default function Home() {
  return (
    <div>
      <Carousel />
      <SectionHomeUno />
      <SectionHomeDos />
    </div>
  );
}
