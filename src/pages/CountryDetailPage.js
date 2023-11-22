import '../styles/CountryDetailPage.scss';
import countriesData from '../data.json';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetailPage = ({ theme }) => {
  const [foundCountry, setFoundCountry] = useState();
  const { countryId } = useParams();

  useEffect(() => {
    const country = countriesData.find((countryObj) => {
      return countryObj.numericCode === countryId;
    });

    if (country) {
      setFoundCountry(country);
    }
  }, [countryId]);

  const getBorderCountry = (alpha3Code) =>
    countriesData.find((country) => {
      return country.alpha3Code === alpha3Code;
    });

  const iconStyle = {
    filter: theme === 'light' ? 'invert(0%)' : 'invert(100%)',
  };

  return (
    <div className='country-details background text'>
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <div className='country-content'>
          <div>
            <div>
              <Link className='back-button text element' to='/countries-info'>
                {theme === 'dark' ? (
                  <>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/left-arrow.png`}
                      alt='back to home page'
                      style={iconStyle}
                    />
                    Back
                  </>
                ) : (
                  <>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/left-arrow.png`}
                      alt='back to home page'
                      style={iconStyle}
                    />
                    Back
                  </>
                )}
              </Link>
            </div>
            <img
              className='country-img'
              src={foundCountry.flags.png}
              alt='flag of the country'
            />
          </div>

          <div className='country-info'>
            <h2>{foundCountry.name}</h2>
            <div className='country-info-1'>
              <div>
                <p>
                  <span>Navite Name:</span> {foundCountry.nativeName}
                </p>
                <p>
                  <span>Population:</span> {foundCountry.population}
                </p>
                <p>
                  <span>Region:</span> {foundCountry.region}
                </p>
                <p>
                  <span>Sub Region:</span> {foundCountry.subregion}
                </p>
                <p>
                  <span>Capital:</span> {foundCountry.capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level: </span> {foundCountry.topLevelDomain[0]}
                </p>
                <p>
                  <span>Currencies: </span> {foundCountry.currencies?.[0].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {foundCountry.languages.length > 0
                    ? foundCountry.languages.map((lang) => lang.name).join(', ')
                    : 'No language'}
                </p>
              </div>
            </div>
            <div className='country-border'>
              <span>Border Countries: </span>
              {foundCountry?.borders ? (
                foundCountry.borders.map((alpha3Code, index) => {
                  const borderCountry = getBorderCountry(alpha3Code);

                  return (
                    <Link
                      to={`/country/${borderCountry.numericCode}`}
                      key={index}
                      className='borders element text'
                    >
                      {borderCountry.name}
                      {index !== foundCountry.borders.length - 1 ? ' ' : ''}
                    </Link>
                  );
                })
              ) : (
                <p className='no-borders'>Country with no borders.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetailPage;
