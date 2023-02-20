/* eslint-disable no-unused-vars */

import { useEffect } from 'react';

import SearchBar from '../components/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCountries,
  sortNameAscending,
  sortNameDescending,
  sortCapitalAscending,
  sortCapitalDescending,
  sortPopulationAscending,
  sortPopulationDescending
} from '../redux/slices/countriesSlice';
import { AppDispatch } from '../redux/store';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent
} from '@mui/material';
import Paper from '@mui/material/Paper';
import FavouriteButton from './FavouriteButton';

const FavouritesTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { countries, isLoading, error } = useSelector((state: RootState) => state.countries);
  const { searchTerm } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    handleSort(e.target.value as string);
  };

  function handleSort(sortType: string) {
    switch (sortType) {
      case 'nameAscending':
        dispatch(sortNameAscending());
        break;
      case 'nameDescending':
        dispatch(sortNameDescending());
        break;
      case 'capitalAscending':
        dispatch(sortCapitalAscending());
        break;
      case 'capitalDescending':
        dispatch(sortCapitalDescending());
        break;
      case 'populationAscending':
        dispatch(sortPopulationAscending());
        break;
      case 'populationDescending':
        dispatch(sortPopulationDescending());
        break;
      default:
        dispatch(sortNameAscending());
    }
  }

  return (
    <div>
      <section>{error && <p>{error}</p>}</section>
      {isLoading ? (
        <p>Countries data is loading...</p>
      ) : (
        <>
          <SearchBar />
          <FormControl fullWidth variant="filled">
            <InputLabel>Sort by:</InputLabel>

            <Select onChange={handleChange} defaultValue="nameAscending">
              <MenuItem value="nameAscending">Name (A-Z)</MenuItem>
              <MenuItem value="nameDescending">Name (Z-A)</MenuItem>
              <MenuItem value="capitalAscending">Capital (A-Z)</MenuItem>
              <MenuItem value="capitalDescending">Capital (Z-A)</MenuItem>
              <MenuItem value="populationAscending">Population (&uarr;)</MenuItem>
              <MenuItem value="populationDescending">Population (&darr;)</MenuItem>
            </Select>
          </FormControl>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Flag</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Region</TableCell>
                  <TableCell>Capital</TableCell>
                  <TableCell>Population</TableCell>
                  <TableCell>Favourites</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countries
                  .filter((val) => {
                    if (searchTerm == '') {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      val.capital.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((country, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell sx={{ width: '10%' }}>
                          <img src={country?.flag} alt={`Flag of ${country.name}`}></img>
                        </TableCell>
                        <TableCell>
                          <Link to={`/country/${country.name}`}>{country.name}</Link>
                        </TableCell>
                        <TableCell>{country?.region}</TableCell>
                        <TableCell>{country?.capital}</TableCell>
                        <TableCell>{country?.population.toLocaleString()}</TableCell>
                        <TableCell>
                          <FavouriteButton country={country} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default FavouritesTable;
