import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/starwars.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const numberOfFavorites =
    store.favoritePlanets.length +
    store.favoriteCharacters.length +
    store.favoriteVehicles.length;


  return (
    <nav
      className="navbar navbar-expand-lg bg-dark bg-gradient border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to={"/"}>
          <img
            src="https://cronkitenews.azpbs.org/wp-content/uploads/2021/07/navajo-star-wars-logo.png"
            alt="Logo"
            style={{ height: "40px" }}
            className="d-inline-block align-text-top img-thumbnail ms-5 starwars"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                to={"/"}
                className="nav-link starwars-text-active"
                aria-current="page"
              >
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/planets"} className="nav-link starwars-text">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/vehicles"} className="nav-link starwars-text">
                Vehicles
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn-group dropstart me-5">
          <button
            type="button"
            className="starwars-btn dropdown-toggle p-2 rounded d-flex align-items-center"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My favorites{" "}
            <span className="badge text-bg-warning ms-1">
              {numberOfFavorites}
            </span>
          </button>
          <ul className="dropdown-menu bg-dark bg-gradient p-0 starwars-border">
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 starwars-text-active">Characters</p>
              <li className="list-group-item bg-dark bg-gradient p-0 rounded-0">
                {store.favoriteCharacters.length == 0 ? (
                  <p className="dropdown-item starwars-text fw-lighter">
                    Add characters
                  </p>
                ) : (
                  store.favoriteCharacters.map((character, index) => (
                    <div
                      className="d-flex flex-row align-items-center"
                      key={index}
                    >
                      <Link
                        to={`character/${character.id}`}
                        className="dropdown-item starwars-text fw-lighter"
                      >
                        {character.name}
                      </Link>

                      <i
                        onClick={(e) => {
                          e.stopPropagation();
                          actions.removeFromFavorites(character.id, "Characters");
                        }}
                        className="fas fa-trash starwars-text-active me-2"
                      ></i>
                    </div>
                  ))
                )}
              </li>
            </ul>
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 starwars-text-active">Planets</p>
              <li className="list-group-item bg-dark bg-gradient p-0 rounded-0">
                {store.favoritePlanets.length == 0 ? (
                  <p className="dropdown-item starwars-text fw-lighter">
                    Add planets
                  </p>
                ) : (
                  store.favoritePlanets.map((planet, index) => (
                    <div
                      className="d-flex flex-row align-items-center"
                      key={index}
                    >
                      <Link
                        to={`planet/${planet.id}`}
                        className="dropdown-item starwars-text fw-lighter"
                      >
                        {planet.name}
                      </Link>
                      <i className="fas fa-trash starwars-text-active me-2"></i>
                    </div>
                  ))
                )}
              </li>
            </ul>
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 starwars-text-active">Vehicles</p>
              <li className="list-group-item bg-dark bg-gradient p-0 rounded-0">
                {store.favoriteVehicles.length == 0 ? (
                  <p className="dropdown-item starwars-text fw-lighter">
                    Add vehicles
                  </p>
                ) : (
                  store.favoriteVehicles.map((vehicle, index) => (
                    <div
                      className="d-flex flex-row align-items-center"
                      key={index}
                    >
                      <Link
                        to={`vehicle/${vehicle.id}`}
                        className="dropdown-item starwars-text fw-lighter"
                      >
                        {vehicle.name}
                      </Link>
                      <i className="fas fa-trash starwars-text-active me-2"></i>
                    </div>
                  ))
                )}
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};
