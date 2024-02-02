import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/starwars.css";

export const SearchBar = () => {
  const { store, actions } = useContext(Context);

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control starwars-border me-2 starwars-text"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="starwars-btn rounded" type="submit">
        Search
      </button>
    </form>
  );
};
