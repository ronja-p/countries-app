import React from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

import { setSearchTerm } from '../redux/slices/searchSlice';
import CountriesTable from '../components/CountriesTable';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setSearchTerm(''));

  return (
    <div>
      <CountriesTable />
    </div>
  );
};
