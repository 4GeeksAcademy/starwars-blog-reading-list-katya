import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ItemsCarousel } from "../component/itemsCarousel";
import "../../styles/home.css";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if( !store.planetView) {
      actions.togglePlanetView();
      
    }
  },[])

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        {store.loading ? (
          <p className="starwars-text">Loading...</p>
        ) : (
          <div className="text-center mt-5 d-flex flex-column">
            <ItemsCarousel />
          </div>
        )}
      </div>
    </div>
  );
};
