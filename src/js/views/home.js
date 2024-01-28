import React from "react";
import { ItemsCarousel } from "../component/itemsCarousel";
import "../../styles/home.css";

export const Home = () => (
  <div>
    <div className="d-flex justify-content-center">
      <div className="text-center mt-5 d-flex flex-row">
        <ItemsCarousel />
      </div>
    </div>
  </div>
);
