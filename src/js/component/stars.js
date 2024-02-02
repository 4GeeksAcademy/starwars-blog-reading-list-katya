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
      star.style.boxShadow = `0 0 50px rgba(217, 204, 204, 0.931)`;
      document.getElementById("starfield").appendChild(star);
    };

    function createStarfield() {
      for (let i = 0; i < 1300; i++) {
        createStar();
      }
    };

    createStarfield();
  }, []); 

  return (
    <div className="footer mt-auto py-3">
      <div className="starfield" id="starfield"></div>
    </div>
  );
};