import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/starwars.css";

export const CharacterCard = (props) => {
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
                    <p className="card-text starwars-text">
                      {props.description}
                    </p>
                    <div className="d-flex flex-row card-text">
                      <div className="m-2">
                        <small className="red-text">Birth Year</small>
                        <p className="red-text-active">
                          Example{props.birth_year}
                        </p>
                      </div>
                      <div className="m-2">
                        <small className="red-text">Gender</small>
                        <p className="red-text-active">{props.gender}</p>
                      </div>
                      <div className="m-2">
                        <small className="red-text">Height</small>
                        <p className="red-text-active">{props.height}</p>
                      </div>
                      <div className="m-2">
                        <small className="red-text">Skin Color</small>
                        <p className="red-text-active">{props.skin_color}</p>
                      </div>
                      <div className="m-2">
                        <small className="red-text">Eye Color</small>
                        <p className="red-text-active">{props.eye_color}</p>
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
          style={{ minWidth: "20rem" }}
        >
          <img
            src={store.starsBg}
            className="card-img-top"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title starwars-text-active">{props.name}</h5>
            <div className="card-text starwars-text mb-3">
              <p>Gender: {props.gender}</p>
              <p>Hair-Color: {props.hairColor}</p>
              <p>Eye-Color: {props.eyeColor}</p>
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                href="#"
                className="starwars-btn p-2 rounded"
              >
                Learn more
              </button>
              <button
                type="button"
                href="#"
                className="favorite-btn p-2 rounded"
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
