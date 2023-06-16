import HttpClient from './http';
import CountryMapper from './mappers/CountryMapper';

const API = 'https://restcountries.com/v3.1asds';

class CountriesService {
  async listCountries() {
    const path = '/all';
    const { response, json } = await HttpClient.get(API + path);

    if (response.ok) {
      const listCountries = json.map((country) => CountryMapper.toDomain(country));
      return listCountries;
    }

    throw new Error('An error occurred while fetching data from the API');
  }

  async getCountry(countryCode) {
    if (!countryCode) {
      return null;
    }

    const path = `/alpha/${countryCode}`;
    const { json } = await HttpClient.get(API + path);
    if (!json) {
      return null;
    }
    let country = json[0];
    country.borders = await this.getBordersByAlphaCode(country.borders);
    country = CountryMapper.toDomain(country);
    return country;
  }

  async getBordersByAlphaCode(listAlphaCode) {
    if (!listAlphaCode || listAlphaCode.length <= 0) return null;
    const path = `/alpha?codes=${listAlphaCode.toString()}`;
    const { json } = await HttpClient.get(API + path);
    const data = json.map((country) => ({ name: country.name.common, code: country.ccn3 }));
    return data;
  }
}

export default new CountriesService();
