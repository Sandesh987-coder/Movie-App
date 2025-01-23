import React, { createContext, useContext, useReducer } from 'react';

const FavouritesContext = createContext();

const favouritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      return [...state, action.movie];
    case 'REMOVE_FROM_FAVOURITES':
      return state.filter(movie => movie.imdbID !== action.id);
    default:
      return state;
  }
};

export const FavouritesProvider = ({ children }) => {
  const [favourites, dispatch] = useReducer(favouritesReducer, []);
  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
