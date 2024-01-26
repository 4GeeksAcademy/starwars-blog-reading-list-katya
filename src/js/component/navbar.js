import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark bg-gradient border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://cronkitenews.azpbs.org/wp-content/uploads/2021/07/navajo-star-wars-logo.png"
            alt="Logo"
            style={{ height: "40px" }}
            className="d-inline-block align-text-top img-thumbnail ms-5 starwars"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link active starwars-text-active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link starwars-text" href="#">
                Characters
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link starwars-text" href="#">
                Planets
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group dropstart me-5">
          <button
            type="button"
            className="starwars dropdown-toggle p-2 rounded"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My favorites
          </button>
          <ul className="dropdown-menu bg-dark bg-gradient p-0 starwars-border">
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 text-warning">Characters</p>
              <li className="list-group-item bg-dark bg-gradient p-0 rounded-0">
                <a className="dropdown-item text-warning fw-lighter" href="#">
                  Example of a character
                </a>
              </li>
            </ul>
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 text-warning">Planets</p>
              <li className="list-group-item bg-dark bg-gradient p-0 rounded-0">
                <a className="dropdown-item text-warning fw-lighter" href="#">
                  Example of a planets
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};
