import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState({
    name: "",
    birthYear: "",
    gender: "",
    height: "",
    skinColor: "",
    eyeColor: "",
    description: "",
  });

  
  useEffect(() => {
    console.log("I am ID from single view", id)
    actions.openCharacter(id);
  }, [])

  return (
    <div>
      {store.loading ? (
        <p className="starwars-text">Loading...</p>
      ) : (
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
                    {characterDetails.name}
                  </h5>
                  <p className="card-text starwars-text">Description</p>
                  <div className="d-flex flex-row card-text">
                    <div className="m-2">
                      <small className="red-text">Birth Year</small>
                      <p className="red-text-active">{characterDetails.birthYear}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Gender</small>
                      <p className="red-text-active">{characterDetails.gender}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Height</small>
                      <p className="red-text-active">{characterDetails.height}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Skin Color</small>
                      <p className="red-text-active">{characterDetails.skinColor}</p>
                    </div>
                    <div className="m-2">
                      <small className="red-text">Eye Color</small>
                      <p className="red-text-active">{characterDetails.eyeColor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};