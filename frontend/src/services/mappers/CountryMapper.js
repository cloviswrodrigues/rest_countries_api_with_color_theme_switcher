class CountryMapper {
  toDomain(data) {
    return {
      name: data.name.common,
      code: data.ccn3 || data.cca3,
      flag: data.flags.svg,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      nativeName: data.nativeName,
      topLevelDomain: data.tld || [],
      currencies: Object.values(data.currencies || {}).map((currency) => currency.name),
      languages: Object.values(data.languages || {}),
      borders: data.borders || [],
    };
  }
}

export default new CountryMapper();
