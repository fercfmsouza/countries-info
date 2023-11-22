import '../styles/HomePage.scss';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import AllCountries from '../components/AllCountries';
import { useState, useEffect } from 'react';
import jsonData from '../data.json';

const HomePage = ({ theme }) => {
  const [filteredCountries, setFilteredCountries] = useState(jsonData);
  const [filteredRegion, setFilteredRegion] = useState('all');

  const filterCountriesByRegion = () => {
    if (filteredRegion === 'all') {
      setFilteredCountries(jsonData);
    } else {
      const filteredCountries = jsonData.filter(
        (country) => country.region === filteredRegion,
      );
      setFilteredCountries(filteredCountries);
    }
  };

  useEffect(() => {
    filterCountriesByRegion();
  }, [filteredRegion]);

  return (
    <div className='home background'>
      <div className='home-search-filter'>
        <SearchBar setFilteredCountry={setFilteredCountries} theme={theme} />
        <Filter setFilteredRegion={setFilteredRegion} theme={theme} />
      </div>
      <AllCountries filteredCountry={filteredCountries} />
    </div>
  );
};

export default HomePage;
