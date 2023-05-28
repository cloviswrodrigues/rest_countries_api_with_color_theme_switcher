import countries from './repositories/data.json';

class CountriesService {
  listCountries() {
    return countries;
  }

  getCountry(countryName) {
    if (!countryName) {
      return null;
    }

    const country = countries.find(({ name }) => name.toLowerCase() === countryName.toLowerCase());
    const bordersLowerCase = country.borders.map((border) => border.toLowerCase());
    const bordersFiltered = countries.filter(({ alpha3Code }) => bordersLowerCase.includes(alpha3Code.toLowerCase()))
      .map(({ name }) => name);
    if (bordersFiltered.length > 0) {
      country.borders = bordersFiltered;
    }
    return country;
  }
}

export default new CountriesService();
