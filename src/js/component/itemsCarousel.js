import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "./characterCard";
import { PlanetCard } from "./planetCard";
import "../../styles/starwars.css";

export const ItemsCarousel = () => {
  const { store, actions } = useContext(Context);

  const groupedCharacters = actions.groupItems(store.characters, 4);
  const groupedPlanets = actions.groupItems(store.planets, 4);

  return (
    <div id="carouselIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {!store.isInPlanetsView ? (
          groupedCharacters.map((group, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex flex-row">
              {group.map((character, index) => (
                <CharacterCard key={index} name={character.name} id={character.uid} />
              ))}
            </div>
          </div>
        ))
        ) : (
          groupedPlanets.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex flex-row">
                {group.map((planet, index) => (
                  <PlanetCard key={index} name={planet.name} id={planet.uid} />
                ))}
              </div>
            </div>
          ))
        )}
        {}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
        style={{ width: "1.5%" }}
      >
        <span
          id="carousel-arrow-prev"
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
        style={{ width: "1.5%" }}
      >
        <span
          id="carousel-arrow-next"
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
