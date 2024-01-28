import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/starwars.css";

export const ItemCard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {store.isInSingleView ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="card mb-3 starwars-bg starwars-border-light" style={{ maxWidth: "1200px" }}>
            <div className="row g-0 flex-nowrap">
              <div className="col-md-4">
                <img src="https://i.etsystatic.com/19757570/r/il/67af62/3423023845/il_570xN.3423023845_6v7h.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="card-body mt-3">
                <h5 className="card-title starwars-text-active">Character/Planet Name</h5>
                <p className="card-text starwars-text">
                  Description
                </p>
                <p className="card-text starwars-text">
                  <small className="starwars-text">
                    Other infromation
                  </small>
                </p>
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
            src="https://i.etsystatic.com/19757570/r/il/67af62/3423023845/il_570xN.3423023845_6v7h.jpg"
            className="card-img-top"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title starwars-text-active">Card title</h5>
            <div className="card-text starwars-text mb-3">
              <p>Name:</p>
              <p>Gender:</p>
              <p>Hair-Color:</p>
              <p>Eye-Color:</p>
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