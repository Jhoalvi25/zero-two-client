import React from "react";

import zero from "../img/zero11.jpg";

export default function AnimeCards(props) {
  return (
    <div>
      <div>
        {props.image ? (
          <img src={`${props.image}`} alt="img" />
        ) : (
          <img src={zero} alt="img"></img>
        )}
      </div>
      <br />
      <div>
        <div>
          <strong>{props.name}</strong>
        </div>

        <div>
          <strong>{props.type}</strong>
        </div>
        <div>
          <strong>{props.rating}</strong>
        </div>
      </div>
    </div>
  );
}
