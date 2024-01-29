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
          const planetsResponse = await fetch("https://www.swapi.tech/api/planets/");
          if (!planetsResponse.ok) {
            throw Error(planetsResponse.status);
          }
          const planets = await planetsResponse.json();
          console.log("Planets:", planets.results);
      
          // Characters
          const charactersResponse = await fetch("https://www.swapi.tech/api/people/");
          if (!charactersResponse.ok) {
            throw Error(charactersResponse.status);
          }
          const characters = await charactersResponse.json();
          console.log("Characters:", characters.results);
      
          // Details for each character
          const characterDetailsPromises = characters.results.map(async (character) => {
            try {
              const characterResponse = await fetch(`https://www.swapi.tech/api/people/${character.uid}`);
              if (!characterResponse.ok) {
                throw Error(characterResponse.status);
              }
              const characterDetails = await characterResponse.json();
              console.log("Character Details:", characterDetails.result.properties);
              setStore({characters: store.characters.concat(characterDetails.result.properties)})
            } catch (error) {
              console.log("Error fetching character details:", error);
            }
          });
      
          await Promise.all(characterDetailsPromises);
      
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },

      loadSomeData1: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .then((planets) => {
            console.log(planets.results);
            setStore({ planets: planets.results });
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://www.swapi.tech/api/people/")
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .then((characters) => {
            characters.results.map((character) => {
              fetch(`https://www.swapi.tech/api/people/${characters.uid}`)
              .then((response) => {
                if (!response.ok) {
                  throw Error(response.status);
                }
                return response.json();
              })
              .then((character) => {
                console.log(character)
              })
              .catch((error) => {
                console.log(error)
              })
            })
          })
          .catch((error) => {
            console.log(error);
          });
      },

      changeToSingleView: () => {
        setStore({ isInSingleView: true });
      },

      toggleViews: () => {
        const store = getStore()
        setStore({ isInPlanetsView: !store.isInPlanetsView })
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
