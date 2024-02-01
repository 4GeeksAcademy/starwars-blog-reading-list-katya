import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/starwars.css";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  const [isClicked, setIsClicked] = useState(false);

  function handleImageError(e) {
    e.target.src = "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937"
  };

  return (
      <div
        className="card m-3 mb-5 starwars-bg starwars-border-light"
        style={{ width: "20rem", height: "462px" }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`}
          className="card-img-top"
          alt="..."
          style={{ height: "250px" }}
          onError={handleImageError}
        />
        <div className="card-body">
          <h5 className="card-title starwars-text-active mb-3">{props.name}</h5>
          <div className="card-text red-text-active">
            <p>
              Population:{" "}
              <span className="starwars-text-active">{props.population}</span>
            </p>
            <p className="text-wrap">
              Terrain:{" "}
              <span className="starwars-text-active">{props.terrain}</span>
            </p>
          </div>
          <div className="position-absolute bottom-0 mb-3 start-50 translate-middle-x w-100">
            <Link to={`/planet/${props.id}`}>
              <button
                type="button"
                href="#"
                className="starwars-btn p-2 rounded mx-3"
                onClick={() => {
                  actions.openItem(props.id, setPlanetDetails, "planet", {
                    name: "name",
                    description: "description",
                    climate: "climate",
                    population: "population",
                    orbitalPeriod: "orbital_period",
                    rotationPeriod: "rotation_period",
                    diameter: "diameter",
                    uid: "uid"
                  })
                }}
              >
                Learn more
              </button>
            </Link>
            <button
              type="button"
              href="#"
              className="favorite-btn p-2 rounded mx-3"
              style={{ width: "40px" }}
              onClick={() => {
                actions.addToFavorites(props.id, "Planets");
                setIsClicked(true);
              }}
            >
              {isClicked ? (
              <i className="fas fa-heart text-danger"></i>
            ) : (
              <i className="far fa-heart text-danger"></i>
            )}
            </button>
          </div>
        </div>
      </div>
  );
};
