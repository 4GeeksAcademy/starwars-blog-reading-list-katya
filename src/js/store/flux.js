const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      favoritePlanets: [],
      favoriteCharacters: [],
      loading: true,
      isInPlanetsView: false,
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

          const charactersWithDetails = await Promise.all(
            characterDetailsPromises
          );
          const planetsWithDetails = await Promise.all(
            planetDetailsPromises
          );

          setStore({
            characters: store.characters.concat(charactersWithDetails),
            planets: store.planets.concat(planetsWithDetails)
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }

        setStore({ loading: false });
      },

      toggleViews: () => {
        const store = getStore();
        setStore({ isInPlanetsView: !store.isInPlanetsView });
      },

      groupItems: (itemsList, numberToGroup) => {
        const groupedItems = [];
        for (let i = 0; i < itemsList.length; i += numberToGroup) {
          groupedItems.push(itemsList.slice(i, i + numberToGroup));
        }
        return groupedItems;
      },

      openCharacter: (
        id,
        setCharacterDetails
      ) => {
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
        setStore({loading: false})
      },

      openPlanet: (id, setPlanetDetails) => {
        const store = getStore();
        const planet = store.planets.find(
          (planet) => planet.id === id
        );
        setPlanetDetails({
          name: planet.name,
          description: planet.description,
          climate: planet.climate,
          population: planet.population,
          orbital_period: planet.orbital_period,
          rotation_period: planet.rotation_period,
          diameter: planet.diameter
        })
        setStore({loading: false})
      },

      addToFavorites: () => {},
    },
  };
};

export default getState;
