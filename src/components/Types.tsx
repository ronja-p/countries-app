/* eslint-disable no-undef */

export type CountriesDataProps = {
  country: CountriesType;
};

export type CountriesType = {
  flag: string;
  name: string;
  region: string;
  capital: string;
  population: number;
};

export type CountryType = {
  flag: string;
  name: string;
  nativeName: string;
  region: string;
  languages: string;
  currencies: string;
  borders: string;
  timezones: string;
  capital: string;
  population: number;
};

export type CountriesState = {
  countries: CountriesType[];
  favouriteCountries: CountriesType[];
  isLoading: boolean;
  error: Error | null | any;
};

export type CountryState = {
  country: CountryType[];
  isLoading: boolean;
  error: Error | null | any;
};

export type FavouritesState = {
  favouriteCountries: CountriesType[];
  isLoading: boolean;
  error: Error | null | any;
};
