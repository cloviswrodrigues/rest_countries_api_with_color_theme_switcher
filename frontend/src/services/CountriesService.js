import HttpClient from './http';

import countries from './repositories/data.json';

const API = 'https://restcountries.com/v3.1';

class CountriesService {
  listCountries() {
    const path = '/all';
    return HttpClient.get(API + path);
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
