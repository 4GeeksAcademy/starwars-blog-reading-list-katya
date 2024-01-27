import React from "react";
import "../../styles/starwars.css";

export const ItemCard = () => {
  return (
    <div
      className="card m-3 mb-5 starwars-bg starwars-border-light"
      style={{ minWidth: "20rem" }}
    >
      <img
        src="https://i.etsystatic.com/19757570/r/il/67af62/3423023845/il_570xN.3423023845_6v7h.jpg"
        className="card-img-top"
        alt="..."
        style={{height: "250px"}}
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
          <button type="button" href="#" className="starwars-btn p-2 rounded">
            Learn more
          </button>
          <button type="button" href="#" className="btn btn-outline-danger p-2" style={{width: "40px"}}>
          <i className="far fa-heart text-danger"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
