import countrys from './repositories/data.json';

class CountrysService {
  listCountrys() {
    return countrys;
  }
}

export default new CountrysService();
