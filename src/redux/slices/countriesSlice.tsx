/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';
import { CountriesState, CountriesType } from '../../components/Types';
import { AppDispatch } from '../store';

export const initialState: CountriesState = {
  countries: [],
  favouriteCountries: [],
  isLoading: true,
  error: null
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountries: (state) => {
      state.isLoading = true;
    },
    getCountriesSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.countries = payload.sort((a: CountriesType, b: CountriesType) => {
        return a.name > b.name ? 1 : -1;
      });
      state.error = null;
    },
    getCountriesFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    sortNameAscending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: CountriesType, b: CountriesType) => {
        return a.name > b.name ? 1 : -1;
      });
    },
    sortNameDescending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: CountriesType, b: CountriesType) => {
        return a.name < b.name ? 1 : -1;
      });
    },
    sortCapitalAscending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: CountriesType, b: CountriesType) => {
        return a.capital > b.capital ? 1 : -1;
      });
    },
    sortCapitalDescending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: CountriesType, b: CountriesType) => {
        return a.capital < b.capital ? 1 : -1;
      });
    },
    sortPopulationAscending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: CountriesType, b: CountriesType) => {
        return a.population > b.population ? 1 : -1;
      });
    },
    sortPopulationDescending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: CountriesType, b: CountriesType) => {
        return a.population < b.population ? 1 : -1;
      });
    },
    storeFavourite: (state, { payload }) => {
      state.favouriteCountries = [...payload];
      console.log(state.favouriteCountries);
    }
  }
});

export default countriesSlice.reducer;

export const {
  getCountries,
  getCountriesSuccess,
  getCountriesFailed,
  sortNameAscending,
  sortNameDescending,
  sortCapitalAscending,
  sortCapitalDescending,
  sortPopulationAscending,
  sortPopulationDescending,
  storeFavourite
} = countriesSlice.actions;

export function fetchCountries() {
  return async (dispatch: AppDispatch) => {
    dispatch(getCountries());
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const targetData = data.map((item: any) => {
        return {
          flag: item.flags.png,
          name: item.name.common,
          region: item.region,
          capital: [item.capital].toString(),
          population: item.population
        };
      });
      dispatch(getCountriesSuccess(targetData));
    } catch (error) {
      dispatch(getCountriesFailed(error));
    }
  };
}
