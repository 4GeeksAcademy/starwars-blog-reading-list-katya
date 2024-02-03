import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import "../../styles/starwars.css";
import "../../styles/searchBar.css";

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSuggestions(actions.getSuggestions(e.target.value))
  };

  const handleSearch = (e) => {
    const searchResult = actions.performSearch(searchTerm);
    if(searchResult[0].gender) {
      navigate(`/character/${searchResult[0].id}`)
    } else if(searchResult[0].population) {
      navigate(`/planet/${searchResult[0].id}`)
    } else {
      navigate(`/vehicle/${searchResult[0].id}`)
    }
    e.preventDefault();
    setSearchTerm("");
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <div className="suggestions">
        <input
          className="form-control starwars-border me-2 starwars-text"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="list-group suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="list-item suggestions-items text-white"
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
      <button className="starwars-btn rounded ms-2" type="submit">
        Search
      </button>
    </form>
  );
};
