// This hook is used to fetch one specific country
import { useState, useEffect } from 'react';
import { CountryType } from '../components/Types';

const useCountry = (countryName: string | undefined) => {
  const [country, setCountry] = useState<CountryType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null | any>(null);

  const countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(countryUrl);
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
              .replace(/,/g, ' '),
            region: item.region,
            languages: Object.keys(item.languages)
              .map((key) => {
                return item.languages[key];
              })
              .toString()
              .replace(/,/g, ' '),
            currencies: Object.keys(item.currencies)
              .map((key) => {
                return item.currencies[key].name;
              })
              .toString()
              .replace(/,/g, ' '),
            borders: item.borders?.toString().replace(/,/g, ' '),
            timezones: item.timezones.toString(),
            capital: item.capital[0],
            population: item.population
          };
        });
        setCountry(targetData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountry();
  }, [countryUrl]);

  return { country, isLoading, error };
};

export default useCountry;
