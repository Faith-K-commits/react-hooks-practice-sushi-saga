import React, { useState } from "react";

function Sushi({ sushi, onEatSushi, budget }) {
  const [isEaten, setIsEaten] = useState(false);

  const handleEatenSushi = () => {
    if (budget >= sushi.price) {
      setIsEaten(true);
      onEatSushi(sushi.id);
    }
  };
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenSushi}>
        {isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
