import countries from './repositories/data.json';

class CountriesService {
  listCountries() {
    return countries;
  }

  getCountry(countryName) {
    if (!countryName) {
      return null;
    }

    return countries.find(({ name }) => name.toLowerCase() === countryName.toLowerCase());
  }
}

export default new CountriesService();
