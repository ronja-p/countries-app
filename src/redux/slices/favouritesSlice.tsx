/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';
import { FavouritesState, CountriesType } from '../../components/Types';

export const initialState: FavouritesState = {
  favouriteCountries: [],
  isLoading: true,
  error: null
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    storeFavourites: (state, { payload }) => {
      state.favouriteCountries = [...payload];
      console.log(state.favouriteCountries);
    },
    fetchFavourites: (state) => {
      console.log(state.favouriteCountries);
    },

    sortNameAscending: (state) => {
      let sortedFavourites = [...state.favouriteCountries];
      state.favouriteCountries = sortedFavourites.sort((a: CountriesType, b: CountriesType) => {
        return a.name > b.name ? 1 : -1;
      });
    },
    sortNameDescending: (state) => {
      let sortedFavourites = [...state.favouriteCountries];
      state.favouriteCountries = sortedFavourites.sort((a: CountriesType, b: CountriesType) => {
        return a.name < b.name ? 1 : -1;
      });
    },
    sortCapitalAscending: (state) => {
      let sortedFavourites = [...state.favouriteCountries];
      state.favouriteCountries = sortedFavourites.sort((a: CountriesType, b: CountriesType) => {
        return a.capital > b.capital ? 1 : -1;
      });
    },
    sortCapitalDescending: (state) => {
      let sortedFavourites = [...state.favouriteCountries];
      state.favouriteCountries = sortedFavourites.sort((a: CountriesType, b: CountriesType) => {
        return a.capital < b.capital ? 1 : -1;
      });
    },
    sortPopulationAscending: (state) => {
      let sortedFavourites = [...state.favouriteCountries];
      state.favouriteCountries = sortedFavourites.sort((a: CountriesType, b: CountriesType) => {
        return a.population > b.population ? 1 : -1;
      });
    },
    sortPopulationDescending: (state) => {
      let sortedFavourites = [...state.favouriteCountries];
      state.favouriteCountries = sortedFavourites.sort((a: CountriesType, b: CountriesType) => {
        return a.population < b.population ? 1 : -1;
      });
    }
  }
});

export default favouritesSlice.reducer;

export const {
  storeFavourites,
  fetchFavourites,
  sortNameAscending,
  sortNameDescending,
  sortCapitalAscending,
  sortCapitalDescending,
  sortPopulationAscending,
  sortPopulationDescending
} = favouritesSlice.actions;
