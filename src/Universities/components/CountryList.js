import { useState, useEffect } from 'react';
import { getCountries } from '../server/api';

const CountryList = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data.map(country => country.name));
    }).catch(error => console.log(error));
  }, []);

  const handleChange = (event) => {
    const selectedCountry = event.target.value;
    onCountryChange(selectedCountry);
  };

  return (
    <div className="flex justify-center">
      <select onChange={handleChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryList;