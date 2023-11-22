import '../styles/SearchBar.scss';
import data from '../data.json';
import { useState } from 'react';

const SearchBar = ({ setFilteredCountry, theme }) => {
  const [searchCountryInput, setSearchCountryInput] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchCountryInput(value);
    filterCountry(value);
  };

  const filterCountry = (searchCountryInput) => {
    const filteredCountry = data.filter((item) =>
      item.name.toLowerCase().includes(searchCountryInput.toLowerCase()),
    );
    setFilteredCountry(filteredCountry);
  };

  return (
    <>
      <form className={`search-bar ${theme}`}>
        <input
          className={`search-input element text ${theme}`}
          type='text'
          placeholder='Search for a country...'
          value={searchCountryInput}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default SearchBar;
