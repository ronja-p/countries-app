import React from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

import { setSearchTerm } from '../redux/slices/searchSlice';
import FavouritesTable from '../components/CountriesTable';

export const Favourites = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setSearchTerm(''));

  return (
    <div>
      <FavouritesTable />
    </div>
  );
};
