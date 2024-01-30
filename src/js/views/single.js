import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [characterName, setCharacterName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const id = params.id;
  console.log(id);

  useEffect(() => {
    actions.openCharacter(
      id,
      setCharacterName,
      setBirthYear,
      setGender,
      setHeight,
      setSkinColor,
      setHairColor,
      setEyeColor
    );
	console.log(id);
  }, []);

  return (
    <div>
      {store.loading ? (
        <p className="starwars-text">Loading...</p>
      ) :  (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="card mb-3 starwars-bg starwars-border-light"
            style={{ maxWidth: "1200px" }}
          >
            <div className="row g-0 flex-nowrap">
              <div className="col-md-4">
                <img
                  src={store.starsBg}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="card-body mt-3">
                <div className="d-flex justify-content-center">
                  <h5 className="card-title starwars-text-active">
                    {characterName}
                  </h5>
                  <p className="card-text starwars-text">Description</p>
                  <div className="d-flex flex-row card-text">
                    <div className="m-2">
                      <small className="red-text">Birth Year</small>
                      <p className="red-text-active">
                        {birthYear}
                      </p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Gender</small>
                      <p className="red-text-active">{gender}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Height</small>
                      <p className="red-text-active">{height}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Skin Color</small>
                      <p className="red-text-active">{skinColor}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Eye Color</small>
                      <p className="red-text-active">{eyeColor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) }
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
