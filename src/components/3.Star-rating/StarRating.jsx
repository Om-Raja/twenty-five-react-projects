import React, { useState } from "react";
import "./starRating.css";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rate, setRate] = useState(0);
  const [hoverPosition, setHoverPosition] = useState(0);

  function handleRating(Rating) {
    setRate(Rating);
  }
  function handleMouseHover(index) {
    setHoverPosition(index);
  }
  function handleMouseLeave() {
    setHoverPosition(rate);
  }

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= hoverPosition ? "active" : "inActive"}
            onClick={() => handleRating(index)}
            onMouseEnter={() => handleMouseHover(index)}
            onMouseLeave={handleMouseLeave}
            style={{fontSize:"5em"}}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
