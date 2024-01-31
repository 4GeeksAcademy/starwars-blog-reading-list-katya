const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      vehicles: [],
      favoritePlanets: [],
      favoriteCharacters: [],
      favoriteVehicles: [],
      loading: true,
      planetView: false,
      vehicleView: false,
      starsBg:
        "https://i.etsystatic.com/19757570/r/il/67af62/3423023845/il_570xN.3423023845_6v7h.jpg",
    },
    actions: {
      loadSomeData: async () => {
        const store = getStore();

        try {
          // Planets
          const planetsResponse = await fetch(
            "https://www.swapi.tech/api/planets/"
          );
          if (!planetsResponse.ok) {
            throw Error(planetsResponse.status);
          }
          const planets = await planetsResponse.json();

          // Details for each planet
          const planetDetailsPromises = planets.results.map(async (planet) => {
            try {
              const planetResponse = await fetch(
                `https://www.swapi.tech/api/planets/${planet.uid}`
              );
              if (!planetResponse.ok) {
                throw Error(planetResponse.status);
              }
              const planetDetails = await planetResponse.json();
              return {
                ...planetDetails.result.properties,
                description: planetDetails.result.description,
                id: planetDetails.result._id,
                uid: planetDetails.result.uid,
              };
            } catch (error) {
              console.log("Error fetching planet details:", error);
            }
          });

          // Characters
          const charactersResponse = await fetch(
            "https://www.swapi.tech/api/people/"
          );
          if (!charactersResponse.ok) {
            throw Error(charactersResponse.status);
          }
          const characters = await charactersResponse.json();

          // Details for each character
          const characterDetailsPromises = characters.results.map(
            async (character) => {
              try {
                const characterResponse = await fetch(
                  `https://www.swapi.tech/api/people/${character.uid}`
                );
                if (!characterResponse.ok) {
                  throw Error(characterResponse.status);
                }
                const characterDetails = await characterResponse.json();

                return {
                  ...characterDetails.result.properties,
                  description: characterDetails.result.description,
                  id: characterDetails.result._id,
                  uid: characterDetails.result.uid,
                };
              } catch (error) {
                console.log("Error fetching character details:", error);
              }
            }
          );

          // Vehicles
          const vehiclesResponse = await fetch(
            "https://www.swapi.tech/api/vehicles/"
          );
          if (!vehiclesResponse.ok) {
            throw Error(vehiclesResponse.status);
          }
          const vehicles = await vehiclesResponse.json();

          // Details for each vehicle
          const vehicleDetailsPromises = vehicles.results.map(
            async (vehicle) => {
              try {
                const vehicleResponse = await fetch(
                  `https://www.swapi.tech/api/vehicles/${vehicle.uid}`
                );
                if (!vehicleResponse.ok) {
                  throw Error(vehicleResponse.status);
                }
                const vehicleDetails = await vehicleResponse.json();

                return {
                  ...vehicleDetails.result.properties,
                  description: vehicleDetails.result.description,
                  id: vehicleDetails.result._id,
                  uid: vehicleDetails.result.uid,
                };
              } catch (error) {
                console.log("Error fetching vehicle details:", error);
              }
            }
          );

          const charactersWithDetails = await Promise.all(
            characterDetailsPromises
          );
          const planetsWithDetails = await Promise.all(planetDetailsPromises);
          const vehiclesWithDetails = await Promise.all(vehicleDetailsPromises);

          setStore({
            characters: store.characters.concat(charactersWithDetails),
            planets: store.planets.concat(planetsWithDetails),
            vehicles: store.vehicles.concat(vehiclesWithDetails),
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }

        setStore({ loading: false });
      },

      togglePlanetView: () => {
        const store = getStore();
        setStore({ planetView: !store.planetView });
      },

      toggleVehicleView: () => {
        const store = getStore();
        setStore({ vehicleView: !store.vehicleView });
      },

      groupItems: (itemsList, numberToGroup) => {
        const groupedItems = [];
        for (let i = 0; i < itemsList.length; i += numberToGroup) {
          groupedItems.push(itemsList.slice(i, i + numberToGroup));
        }
        return groupedItems;
      },

      openCharacter: (id, setCharacterDetails) => {
        const store = getStore();
        const character = store.characters.find(
          (character) => character.id === id
        );
        setCharacterDetails({
          name: character.name,
          description: character.description,
          birthYear: character.birth_year,
          gender: character.gender,
          height: character.height,
          skinColor: character.skin_color,
          eyeColor: character.eye_color,
        });
        setStore({ loading: false });
      },

      openItem: (id, setDetails, itemType, itemPropertyMap) => {
        const store = getStore();
        const item = store[itemType + 's'].find((item) => item.id === id);

        const details = {};
        for (const [key, value] of Object.entries(itemPropertyMap)) {
          details[key] = item[value];
        }
      
        setDetails(details);
        setStore({ loading: false });

      },

      addToFavorites: () => {},
    },
  };
};

export default getState;
