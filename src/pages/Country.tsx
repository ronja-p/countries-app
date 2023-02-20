/* eslint-disable no-unused-vars */

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountry } from '../redux/slices/countrySlice';
import { AppDispatch } from '../redux/store';
import { RootState } from '../redux/store';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export const Country = () => {
  const { countryName } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { country, isLoading, error } = useSelector((state: RootState) => state.country);

  useEffect(() => {
    dispatch(fetchCountry(countryName));
  }, [dispatch]);

  const altText = `Flag of ${country[0]?.name}`;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {country.length && (
        <Card sx={{ maxWidth: 450 }}>
          <section>
            {isLoading && <p>Country data is loading...</p>}
            {error && <p>{error.message}</p>}
          </section>
          <CardMedia component="img" height="250" image={country[0]?.flag} alt={altText} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country[0]?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capital: {country[0]?.capital}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Native Name: {country[0]?.nativeName}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Region: {country[0]?.region}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Languages: {country[0]?.languages}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Currencies: {country[0]?.currencies}
            </Typography>
            {country[0].borders && (
              <Typography variant="body1" color="text.secondary">
                Borders: {country[0]?.borders}
              </Typography>
            )}
            <Typography variant="body1" color="text.secondary">
              Time Zones: {country[0]?.timezones}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};
