const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      isInSingleView: false,
      isInPlantesView: true,
      starsBg:
        "https://i.etsystatic.com/19757570/r/il/67af62/3423023845/il_570xN.3423023845_6v7h.jpg",
    },
    actions: {
      loadSomeData: () => {
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
            console.log(characters.results);
            setStore({ characters: characters.results });
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
