import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/starwars.css";
import "../../styles/searchBar.css"

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  actions.performSearch("darth vader")

  return (
    <form className="d-flex" role="search">
      <div className="autocomplete" style={{width: "300px"}}>
        <input
          className="form-control starwars-border me-2 starwars-text"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <button className="starwars-btn rounded ms-2" type="submit">
        Search
      </button>
    </form>
  );
};
