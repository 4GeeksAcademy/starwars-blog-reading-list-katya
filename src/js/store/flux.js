const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      isInSingleView: false,
      isInPlantesView: false,
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
          const planetDetailsPromises = planets.results.map(
            async (planet) => {
              try {
                const planetResponse = await fetch(
                  `https://www.swapi.tech/api/planets/${planet.uid}`
                );
                if (!planetResponse.ok) {
                  throw Error(planetResponse.status);
                }
                const planetDetails = await planetResponse.json();
                console.log("Planet Details:", planetDetails.result.properties);
                setStore({
                  planets: store.planets.concat(planetDetails.result.properties),
                });
              } catch (error) {
                console.log("Error fetching planet details:", error);
              }
            }
          );

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
                console.log(
                  "Character Details:",
                  characterDetails.result.properties
                );
                setStore({
                  characters: store.characters.concat(
                    characterDetails.result.properties
                  ),
                });
              } catch (error) {
                console.log("Error fetching character details:", error);
              }
            }
          );

          await Promise.all([characterDetailsPromises, planetDetailsPromises]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },

      changeToSingleView: () => {
        setStore({ isInSingleView: true });
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
    },
  };
};

export default getState;
