import '../styles/AllCountries.scss';
import CountryCard from './CountryCard';

const AllCountries = ({ filteredCountry }) => {
  return (
    <div className='all-countries'>
      <CountryCard data={filteredCountry} />
    </div>
  );
};

export default AllCountries;
