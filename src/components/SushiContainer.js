import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onNext, onEatSushi, budget }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          onEatSushi={onEatSushi}
          budget={budget}
        />
      ))}

      <MoreButton onNext={onNext} />
    </div>
  );
}

export default SushiContainer;
