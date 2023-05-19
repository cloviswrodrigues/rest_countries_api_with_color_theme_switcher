import countries from './repositories/data.json';

class CountriesService {
  listCountries() {
    return countries;
  }
}

export default new CountriesService();
