import '../styles/CountryCard.scss';
import { Link } from 'react-router-dom';

const CountryCard = ({ data }) => {
  return (
    <>
      <ul className='card'>
        {data.map((country) => {
          return (
            <Link to={`/country/${country.numericCode}`} key={country.name}>
              <li className='element'>
                <img
                  className='card-img'
                  src={country.flags.png}
                  alt='flag of the country'
                />
                <div className='card-content element text'>
                  <h2>{country.name}</h2>
                  <p>
                    <span>Population:</span> {country.population}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  <p>
                    <span>Capital:</span> {country.capital}
                  </p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default CountryCard;
