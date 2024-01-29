import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ItemsCarousel } from "../component/itemsCarousel";
import "../../styles/home.css";

export const Characters = () => {
  const { store, actions } = useContext(Context);

  console.log(store.characters)
  console.log(store.planets)

  useEffect(() => {
    actions.loadSomeData();
    if (store.isInPlanetsView) {
      actions.toggleViews()
    }
  },[])

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="text-center mt-5 d-flex flex-column">
          <ItemsCarousel />
        </div>
      </div>
    </div>
  );
};

