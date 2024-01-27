import React from "react";
import { ItemCard } from "../component/itemCard";
import "../../styles/home.css";

export const Home = () => (
  <div>
    <div className="d-flex justify-content-center">
      <div className="text-center mt-5 overflow-x-auto d-flex flex-row col-9">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  </div>
);
