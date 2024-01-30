import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import "../../styles/starwars.css";

export const Favorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <ul className="nav nav-pills mb-3" id="favorite-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="favorite-characters-tab"
              data-bs-toggle="pill"
              data-bs-target="#favorite-characters"
              type="button"
              role="tab"
              aria-controls="favorite-characters"
              aria-selected="true"
            >
              Characters
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="favorite-planets-tab"
              data-bs-toggle="pill"
              data-bs-target="#favorite-planets"
              type="button"
              role="tab"
              aria-controls="favorite-planets"
              aria-selected="false"
            >
              Planets
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="favorite-tabContent">
        <div
          className="tab-pane fade show active"
          id="favorite-characters"
          role="tabpanel"
          aria-labelledby="favorite-characters-tab"
          tabIndex="0"
        >
          {" "}
          <div className="row justify-content-center">
            <div className="col-9 overflow-x-auto d-flex flex-row">
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="favorite-planets"
          role="tabpanel"
          aria-labelledby="favorite-planets-tab"
          tabIndex="0"
        >
          <div className="row justify-content-center">
            <div className="col-9 overflow-x-auto d-flex flex-row">
              <PlanetCard />
              <PlanetCard />
              <PlanetCard />
              <PlanetCard />
              <PlanetCard />
              <PlanetCard />
              <PlanetCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
