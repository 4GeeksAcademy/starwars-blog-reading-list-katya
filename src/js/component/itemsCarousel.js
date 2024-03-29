import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "./characterCard";
import { PlanetCard } from "./planetCard";
import { VehicleCard } from "./vehicleCard";
import "../../styles/starwars.css";

export const ItemsCarousel = () => {
  const { store, actions } = useContext(Context);

  const groupedCharacters = actions.groupItems(store.characters, 4);
  const groupedPlanets = actions.groupItems(store.planets, 4);
  const groupedVehicles = actions.groupItems(store.vehicles, 4);

  return (
    <div id="carouselIndicators" className="carousel slide">
      <div className="carousel-inner">
        {!store.planetView &&
          !store.vehicleView &&
          groupedCharacters.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex flex-row">
                {group.map((character, index) => (
                  <CharacterCard
                    key={index}
                    name={character.name}
                    id={character.id}
                    gender={character.gender}
                    hair_color={character.hair_color}
                    eye_color={character.eye_color}
                    uid = {character.uid}
                  />
                ))}
              </div>
            </div>
          ))}
        {store.planetView &&
          !store.vehicleView &&
          groupedPlanets.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex flex-row">
                {group.map((planet, index) => (
                  <PlanetCard
                    key={index}
                    name={planet.name}
                    id={planet.id}
                    population={planet.population}
                    terrain={planet.terrain}
                    uid = {planet.uid}
                  />
                ))}
              </div>
            </div>
          ))}
          {!store.planetView &&
          store.vehicleView &&
          groupedVehicles.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex flex-row">
                {group.map((vehicle, index) => (
                  <VehicleCard
                    key={index}
                    name={vehicle.name}
                    id={vehicle.id}
                    model={vehicle.model}
                    vehicle_class={vehicle.vehicle_class}
                    uid={vehicle.uid}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
      <button
        className="carousel-control-prev position-absolute top-50 start-0 translate-middle"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        {" "}
        <i
          aria-hidden="true"
          id="carousel-arrow-prev"
          className="fas fa-chevron-circle-left fs-3"
        ></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next position-absolute top-50 start-100 translate-middle"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        {" "}
        <i
          aria-hidden="true"
          id="carousel-arrow-next"
          className="fas fa-chevron-circle-right fs-3"
        ></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
