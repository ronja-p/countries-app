import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setSearchTerm } from '../redux/slices/searchSlice';
import { TextField, InputAdornment } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <TextField
        sx={{ width: '100%' }}
        variant="filled"
        className="search-bar"
        type="text"
        placeholder="Search by country, capital or region..."
        onChange={(event) => {
          dispatch(setSearchTerm(event.target.value));
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch />
            </InputAdornment>
          )
        }}></TextField>
    </div>
  );
};

export default SearchBar;
