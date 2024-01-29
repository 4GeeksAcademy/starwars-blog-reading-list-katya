import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/starwars.css";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {store.isInSingleView ? (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="card mb-3 starwars-bg starwars-border-light"
            style={{ maxWidth: "1200px" }}
          >
            <div className="row g-0 flex-nowrap">
              <div className="col-md-4">
                <img
                  src={store.starsBg}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="card-body mt-3">
                <div className="d-flex justify-content-center">
                  <h5 className="card-title starwars-text-active">
                    {props.name}
                  </h5>
                  <p className="card-text starwars-text">{props.description}</p>
                  <div className="d-flex flex-row card-text">
                    <div className="m-2">
                      <small className="red-text">Climate</small>
                      <p className="red-text-active">{props.climate}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Population</small>
                      <p className="red-text-active">{props.population}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Orbital Period</small>
                      <p className="red-text-active">{props.orbital_period}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Rotation Period</small>
                      <p className="red-text-active">{props.rotation_period}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Diameter</small>
                      <p className="red-text-active">{props.diameter}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
            <h5 className="card-title starwars-text-active mb-3">
              {props.name}
            </h5>
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
              <button
                type="button"
                href="#"
                className="starwars-btn p-2 rounded mx-3"
              >
                Learn more
              </button>
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
      )}
    </div>
  );
};
