import HttpClient from './http';

import countries from './repositories/data.json';

import CountryMapper from './mappers/CountryMapper';

const API = 'https://restcountries.com/v3.1';

class CountriesService {
  async listCountries() {
    const path = '/all';
    const { json } = await HttpClient.get(API + path);
    const listCountries = json.map((country) => CountryMapper.toDomain(country));
    return listCountries;
  }

  getCountry(countryName) {
    if (!countryName) {
      return null;
    }

    const country = countries.find(({ name }) => name.toLowerCase() === countryName.toLowerCase());
    if (country.borders) {
      const bordersLowerCase = country.borders.map((border) => border.toLowerCase());
      const bordersFiltered = countries.filter(({ alpha3Code }) => bordersLowerCase.includes(alpha3Code.toLowerCase()))
        .map(({ name }) => name);
      if (bordersFiltered.length > 0) {
        country.borders = bordersFiltered;
      }
    }

    return country;
  }
}

export default new CountriesService();
