import React, { useEffect } from "react";
import "../../styles/stars.css";

export const Stars = () => {

  useEffect(() => {
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function createStar() {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${getRandomInt(0, 100)}%`;
      star.style.top = `${getRandomInt(0, 100)}%`;
      star.style.boxShadow = `0 0 5px rgba(255, 255, 255, 0.8)`;
      document.getElementById("starfield").appendChild(star);
    };

    function createStarfield() {
      for (let i = 0; i < 150; i++) {
        createStar();
      }
    };

    createStarfield();
  }, []); 

  return (
    <div className="mt-auto py-3">
      <div className="starfield" id="starfield"></div>
    </div>
  );
};