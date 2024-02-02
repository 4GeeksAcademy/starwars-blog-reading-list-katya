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
    },
    actions: {
      loadSomeData: () => {
        const actions = getActions();
        try {
          actions.fetch("characters");
          actions.fetch("planets");
          actions.fetch("vehicles");
        } catch (error) {
          console.error("Error loading data:", error);
        }
      },

      fetch: async (itemTypes) => {
        const store = getStore();
        let url = "";

        if (itemTypes === "characters") {
          url = "https://www.swapi.tech/api/people/";
        } else {
          url = `https://www.swapi.tech/api/${itemTypes}/`;
        }

        try {
          const itemsResponse = await fetch(url);
          if (!itemsResponse.ok) {
            throw Error(itemsResponse.status);
          }
          const items = await itemsResponse.json();

          // Details for each item
          const itemDetailsPromises = items.results.map(async (item) => {
            try {
              const itemResponse = await fetch(item.url);
              if (!itemResponse.ok) {
                throw Error(itemResponse.status);
              }
              const itemDetails = await itemResponse.json();

              return {
                ...itemDetails.result.properties,
                description: itemDetails.result.description,
                id: itemDetails.result._id,
                uid: itemDetails.result.uid,
              };
            } catch (error) {
              console.log("Error fetching details:", error);
            }
          });

          const itemsWithDetails = await Promise.all(itemDetailsPromises);

          setStore({
            [itemTypes]: store[itemTypes].concat(itemsWithDetails),
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }

        setStore({ loading: false });
      },

      fetchLocalStorageFavorites: () => {
        setStore({
          favoritePlanets:
            JSON.parse(localStorage.getItem("favoritePlanets")) || [],
          favoriteCharacters:
            JSON.parse(localStorage.getItem("favoriteCharacters")) || [],
          favoriteVehicles:
            JSON.parse(localStorage.getItem("favoriteVehicles")) || [],
        });
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

      openItem: (id, setDetails, itemType, itemPropertyMap) => {
        const store = getStore();
        const item = store[itemType + "s"].find((item) => item.id === id);

        const details = {};
        for (const [key, value] of Object.entries(itemPropertyMap)) {
          details[key] = item[value];
        }

        setDetails(details);
        setStore({ loading: false });
      },

      addToFavorites: (id, itemTypes) => {
        const store = getStore();
        const item = store[itemTypes.toLowerCase()].find(
          (item) => item.id === id
        );
        localStorage.setItem(
          "favorite" + itemTypes,
          JSON.stringify(store["favorite" + itemTypes].concat(item))
        );
        setStore({
          ["favorite" + itemTypes]: store["favorite" + itemTypes].concat(item),
        });

        console.log("Favorite " + itemTypes, store["favorite" + itemTypes]);
      },

      checkFavorites: (id, itemTypes) => {
        const store = getStore();
        const item = store[itemTypes.toLowerCase()].find(
          (item) => item.id === id
        );
        
        if (store["favorite" + itemTypes].some((f) => f.id == item.id)) {
          return true;
        }
        return false;
      },

      removeFromFavorites: (id, itemTypes) => {
        const store = getStore();
        const updatedFavorites = store["favorite" + itemTypes].filter(
          (item) => item.id != id
        );
        localStorage.setItem(
          "favorite" + itemTypes,
          JSON.stringify(updatedFavorites)
        );
        setStore({ ["favorite" + itemTypes]: updatedFavorites });
      },
    },
  };
};

export default getState;
