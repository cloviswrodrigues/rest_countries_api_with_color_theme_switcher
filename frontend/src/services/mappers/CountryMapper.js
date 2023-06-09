class CountryMapper {
  toDomain(data) {
    return {
      name: data.name.common,
      flag: data.flag,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      nativeName: data.nativeName,
      topLevelDomain: data.tld || [],
      currencies: data.currencies || [],
      languages: data.languages || [],
      borders: data.borders || [],
    };
  }
}

export default new CountryMapper();
