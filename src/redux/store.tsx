/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../redux/slices/countriesSlice';
import countryReducer from '../redux/slices/countrySlice';
import searchReducer from '../redux/slices/searchSlice';
import favouritesReducer from './slices/favouritesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    search: searchReducer,
    favourites: favouritesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
