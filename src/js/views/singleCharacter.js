import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [characterDetails, setCharacterDetails] = useState({
    name: "",
    description: "",
    birthYear: "",
    gender: "",
    height: "",
    skinColor: "",
    eyeColor: "",
  });

  useEffect(() => {
    if (store.characters.length > 0) {
      actions.openItem(id, setCharacterDetails, "character", {
        name: "name",
        description: "description",
        birthYear: "birth_year",
        gender: "gender",
        height: "height",
        skinColor: "skin_color",
        eyeColor: "eye_color",
        uid: "uid",
      });
      setIsFavorite(actions.checkFavorites(id, "Characters"));
    } else {
      actions.loadSomeData();
    }
  }, [store.characters, store.favoriteCharacters]);

  return (
    <div className="d-flex justify-content-center mt-5">
      {store.loading ? (
        <p className="starwars-text">Loading...</p>
      ) : (
        <div
          className="card mb-3 starwars-bg starwars-border-light"
          style={{ maxWidth: "1200px" }}
        >
          <div className="row g-0 flex-nowrap">
            <div className="col-md-4 m-4 mt-5">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${characterDetails.uid}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="card-body mt-3">
              <div className="d-flex justify-content-center flex-column">
                <h2 className="card-title starwars-text-active">
                  {characterDetails.name}
                </h2>
                <p className="card-text starwars-text me-2">
                  {characterDetails.description} Lorem ipsum dolor sit amet
                  consectetur adipiscing elit congue aptent interdum in nisi,
                  fringilla donec ad at aliquet semper velit praesent ornare
                  eros vulputate. Vitae nullam eu curabitur at phasellus
                  fringilla volutpat aptent sem, augue quam inceptos lobortis
                  porta mattis venenatis nostra. Sollicitudin sodales gravida
                  pharetra purus sociosqu sem taciti etiam, tortor aliquet
                  mauris curabitur elementum luctus porttitor, enim laoreet
                  curae lacinia molestie facilisis volutpat. Donec risus sed
                  ultrices per cursus netus in mattis, sollicitudin sem class
                  nisl semper magnis aenean dignissim libero, est ante tempus
                  eros vestibulum ut elementum. Litora ornare fusce sed purus
                  tristique eget eu ultrices, nec molestie sodales aliquet
                  praesent quis accumsan himenaeos, nullam faucibus mus viverra
                  ut varius facilisi. Vel fermentum egestas ad praesent senectus
                  suspendisse platea litora, erat lacinia in malesuada sociis
                  venenatis primis leo, aptent turpis diam porttitor mollis orci
                  viverra.
                </p>
                <div className="d-flex flex-row card-text">
                  <div className="m-2 ms-0">
                    <small className="red-text">Birth Year</small>
                    <p className="red-text-active">
                      {characterDetails.birthYear}
                    </p>
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
                    <p className="red-text-active">
                      {characterDetails.skinColor}
                    </p>
                  </div>
                  <div className="m-2">
                    <small className="red-text">Eye Color</small>
                    <p className="red-text-active">
                      {characterDetails.eyeColor}
                    </p>
                  </div>
                  <button
                    type="button"
                    href="#"
                    className="favorite-btn p-2 rounded mx-3 mt-3"
                    style={{ width: "40px", height: "40px" }}
                    onClick={() => {
                      if (isFavorite) {
                        actions.removeFromFavorites(id, "Characters");
                      } else {
                        actions.addToFavorites(id, "Characters");
                      }
                    }}
                  >
                    {" "}
                    <i
                      className={
                        (isFavorite ? "fas" : "far") + " fa-heart text-danger"
                      }
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
