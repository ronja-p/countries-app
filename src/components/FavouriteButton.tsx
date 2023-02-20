/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import { CountriesDataProps, CountriesType } from './Types';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Button } from '@mui/material';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { storeFavourites } from '../redux/slices/favouritesSlice';

let favouriteCountries: CountriesType[] | null = [];

const FavouriteButton = ({ country }: CountriesDataProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [icon, setIcon] = useState<boolean | null>(null);

  const handleFavourite = (country: CountriesType) => {
    if (!favouriteCountries?.includes(country)) {
      favouriteCountries?.push(country);
      setIcon(true);
      dispatch(storeFavourites(favouriteCountries));
    } else if (favouriteCountries?.includes(country)) {
      let deleteCountry = favouriteCountries?.indexOf(country);
      favouriteCountries?.splice(deleteCountry);
      setIcon(false);
      dispatch(storeFavourites(favouriteCountries));
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleFavourite(country)}>
        {icon ? <MdFavorite /> : <MdFavoriteBorder />}
      </Button>
    </div>
  );
};

export default FavouriteButton;
