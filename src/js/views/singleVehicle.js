import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState({
    name: "",
    description: "",
    model: "",
    vehicleClass: "",
    manufacturer: "",
    length: "",
    passengers: "",
  });

  useEffect(() => {
    if (store.vehicles.length > 0) {
      actions.openItem(id, setVehicleDetails, "vehicle", {
        name: "name",
        description: "description",
        model: "model",
        vehicleClass: "vehicle_class",
        manufacturer: "manufacturer",
        length: "length",
        passengers: "passengers",
        uid: "uid",
      });
      setIsFavorite(actions.checkFavorites(id, "Vehicles"));
    } else {
      actions.loadSomeData();
    }
  }, [store.vehicles, store.favoriteVehicles, id]);

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
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleDetails.uid}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="card-body mt-3">
              <div className="d-flex justify-content-center flex-column">
                <h2 className="card-title starwars-text-active">
                  {vehicleDetails.name}
                </h2>
                <p className="card-text starwars-text me-2">
                  {vehicleDetails.description} Lorem ipsum dolor sit amet
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
                    <small className="red-text">Model</small>
                    <p className="red-text-active">{vehicleDetails.model}</p>
                  </div>
                  <div className="m-2">
                    <small className="red-text">Class</small>
                    <p className="red-text-active">
                      {vehicleDetails.vehicleClass}
                    </p>
                  </div>
                  <div className="m-2">
                    <small className="red-text">Manufacturer</small>
                    <p className="red-text-active">
                      {vehicleDetails.manufacturer}
                    </p>
                  </div>
                  <div className="m-2">
                    <small className="red-text">Length</small>
                    <p className="red-text-active">{vehicleDetails.length}</p>
                  </div>
                  <div className="m-2">
                    <small className="red-text">Passengers</small>
                    <p className="red-text-active">
                      {vehicleDetails.passengers}
                    </p>
                  </div>
                  <button
                    type="button"
                    href="#"
                    className="favorite-btn p-2 rounded mx-3 mt-3"
                    style={{ width: "40px", height: "40px" }}
                    onClick={() => {
                      if (isFavorite) {
                        actions.removeFromFavorites(id, "Vehicles");
                      } else {
                        actions.addToFavorites(id, "Vehicles");
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
