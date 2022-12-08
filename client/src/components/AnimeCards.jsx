import React from "react";

import zero from "../img/zero11.jpg";

export default function AnimeCards(props) {
  console.log("rrr", props);
  return (
    <div>
      <image src={props.image} alt="image" />
      <strong>{props.name}</strong>
      {props.type}
      {props.rating}
    </div>
  );
}
