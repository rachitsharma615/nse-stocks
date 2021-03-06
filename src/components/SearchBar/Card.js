import React from "react";

function Card({ person }) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h4>{person.name}</h4>
      </div>
    </div>
  );
}

export default Card;
