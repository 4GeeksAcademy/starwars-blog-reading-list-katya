import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://cronkitenews.azpbs.org/wp-content/uploads/2021/07/navajo-star-wars-logo.png"
            alt="Logo"
            style={{ height: "40px" }}
            className="d-inline-block align-text-top img-thumbnail ms-5"
          />
        </a>
        <div className="btn-group dropstart me-5">
          <button
            type="button"
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My favorites
          </button>
          <ul className="dropdown-menu border-0">
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 text-warning">Characters</p>
              <li className="list-group-item p-0 rounded-0">
                <a className="dropdown-item" href="#">
                  Example of a character
                </a>
              </li>
            </ul>
            <ul className="list-group border-0">
              <p className="m-1 p-2 fs-6 text-warning">Planets</p>
              <li className="list-group-item p-0 rounded-0">
                <a className="dropdown-item" href="#">
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
