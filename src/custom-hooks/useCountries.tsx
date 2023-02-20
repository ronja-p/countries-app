// This hook is used to fetch all countries
import { useState, useEffect } from 'react';
import { CountriesType } from '../components/Types';

const useCountries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null | any>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const targetData = data.map((item: any) => {
          return {
            flag: item.flags.png,
            name: item.name.common,
            region: item.region,
            capital: item.capital,
            population: item.population
          };
        });
        setCountries(targetData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return { countries, isLoading, error };
};

export default useCountries;
