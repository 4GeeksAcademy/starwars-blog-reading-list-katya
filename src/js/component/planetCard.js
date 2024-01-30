import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/starwars.css";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div
        className="card m-3 mb-5 starwars-bg starwars-border-light"
        style={{ width: "20rem", height: "462px" }}
      >
        <img
          src={store.starsBg}
          className="card-img-top"
          alt="..."
          style={{ height: "250px" }}
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
                  actions.openPlanet(props.id);
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
            >
              <i className="fas fa-heart text-danger"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
