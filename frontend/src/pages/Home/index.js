import { useState, useEffect, useMemo } from 'react';

import {
  Container, Section, Filters, CountryLists,
} from './styles';

import SearchInput from '../../components/Inputs/Search';
import DropDown from '../../components/Dropdowns';
import Card from '../../components/Card';

import CountriesService from '../../services/CountriesService';

export default function Home() {
  const filtersDropDown = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState(null);

  const countryFilteredByRegion = useMemo(() => countries.filter(({ region }) => {
    if (regionFilter && regionFilter !== 'All') {
      return region.toLowerCase() === regionFilter.toLowerCase();
    }
    return true;
  }), [countries, regionFilter]);

  const countryFiltered = useMemo(() => {
    if (search) {
      return countryFilteredByRegion.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
    }

    return countryFilteredByRegion;
  }, [search, regionFilter, countries]);

  useEffect(() => {
    const countryList = CountriesService.listCountries();
    setCountries(countryList);
  }, []);

  function applyFilterByRegion(region) {
    setRegionFilter(region);
  }

  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput search={search} setSearch={setSearch} />
          <DropDown text="Filter by region" items={filtersDropDown} onSelected={applyFilterByRegion} />
        </Filters>
        <CountryLists>
          {countryFiltered.map((country) => <Card key={country.name} data={country} />)}
        </CountryLists>
      </Section>
    </Container>
  );
}
