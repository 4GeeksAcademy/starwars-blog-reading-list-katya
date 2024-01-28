import React from "react";
import { Link } from "react-router-dom";
import "../../styles/starwars.css";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark bg-gradient border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to={"/"}>
          <a className="navbar-brand" href="#">
            <img
              src="https://cronkitenews.azpbs.org/wp-content/uploads/2021/07/navajo-star-wars-logo.png"
              alt="Logo"
              style={{ height: "40px" }}
              className="d-inline-block align-text-top img-thumbnail ms-5 starwars"
            />
          </a>
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
              <a
                className="nav-link active starwars-text-active"
                aria-current="page"
                href="#"
              >
                Characters
              </a>
            </li>
            <li className="nav-item">
              
                <a className="nav-link starwars-text" href="#">
                  Planets
                </a>
              
            </li>
          </ul>
        </div>
        <div className="btn-group dropstart me-5">
          <button
            type="button"
            className="starwars-btn dropdown-toggle p-2 rounded"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My favorites (<strong style={{ fontSize: "14px" }}>2</strong>)
          </button>
          <ul className="dropdown-menu bg-dark bg-gradient p-0 starwars-border">
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 starwars-text-active">Characters</p>
              <li className="list-group-item bg-dark bg-gradient p-0 rounded-0">
                <a className="dropdown-item starwars-text fw-lighter" href="#">
                  Example of a character
                </a>
              </li>
            </ul>
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 starwars-text-active">Planets</p>
              <li className="list-group-item bg-dark bg-gradient p-0 rounded-0">
                <a className="dropdown-item starwars-text fw-lighter" href="#">
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
