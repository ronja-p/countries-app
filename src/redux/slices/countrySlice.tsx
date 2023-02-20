/* eslint-disable no-unused-vars */

import { createSlice } from '@reduxjs/toolkit';
import { CountryState } from '../../components/Types';
import { AppDispatch } from '../store';

export const initialState: CountryState = {
  country: [],
  isLoading: true,
  error: null
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    clearCountry: (state) => {
      state.country = [];
    },
    getCountry: (state) => {
      state.isLoading = true;
    },
    getCountrySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.country = payload;
      state.error = null;
    },
    getCountryFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }
  }
});

export default countrySlice.reducer;

export const { clearCountry, getCountry, getCountrySuccess, getCountryFailed } =
  countrySlice.actions;

export function fetchCountry(countryName: string | undefined) {
  return async (dispatch: AppDispatch) => {
    dispatch(getCountry());
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();
      const targetData = data.map((item: any) => {
        return {
          flag: item.flags.png,
          name: item.name.common,
          nativeName: Object.keys(item.name.nativeName)
            .map((key) => {
              return item.name.nativeName[key].common;
            })
            .toString()
            .replace(/,/g, ' '), // fix
          region: item.region,
          languages: Object.keys(item.languages)
            .map((key) => {
              return item.languages[key];
            })
            .toString()
            .replace(/,/g, ' '), // fix
          currencies: Object.keys(item.currencies)
            .map((key) => {
              return item.currencies[key].name;
            })
            .toString()
            .replace(/,/g, ' '),
          borders: item.borders?.toString().replace(/,/g, ' '),
          timezones: item.timezones.toString(),
          capital: item.capital,
          population: item.population
        };
      });
      dispatch(getCountrySuccess(targetData));
    } catch (error) {
      dispatch(getCountryFailed(error));
    }
  };
}
