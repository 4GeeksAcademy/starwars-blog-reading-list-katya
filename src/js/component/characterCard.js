import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/starwars.css";

export const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);

  console.log("I am ID from characterCard", props.id)

  return (
    <div
      className="card m-3 mb-5 starwars-bg starwars-border-light"
      style={{ minWidth: "20rem", height: "492px" }}
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
            Gender: <span className="starwars-text-active">{props.gender}</span>
          </p>
          <p>
            Hair color:{" "}
            <span className="starwars-text-active">{props.hair_color}</span>
          </p>
          <p>
            Eye color:{" "}
            <span className="starwars-text-active">{props.eye_color}</span>
          </p>
        </div>
        <div className="position-absolute bottom-0 mb-3 start-50 translate-middle-x w-100">
          <Link to={`/single/${props.id}`}>
            <button
              type="button"
              href="#"
              className="starwars-btn p-2 rounded mx-3"
              onClick={() => {
                actions.openCharacter(props.id);
                console.log("I am here")
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
  );
};
