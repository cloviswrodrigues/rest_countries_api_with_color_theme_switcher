import { useState, useEffect } from 'react';

import {
  Container, Section, Filters, CountryLists,
} from './styles';

import SearchInput from '../../components/Inputs/Search';
import DropDown from '../../components/Dropdowns';
import Card from '../../components/Card';

import CountrysService from '../../services/CountrysService';

export default function Home() {
  const filtersDropDown = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [countrys, setCountrys] = useState([]);
  const [regionFilter, setRegionFilter] = useState(null);

  const countryFiltered = countrys.filter(({ region }) => {
    if (regionFilter && regionFilter !== 'All') {
      return region.toLowerCase() === regionFilter.toLowerCase();
    }
    return true;
  });

  useEffect(() => {
    const countryList = CountrysService.listCountrys();
    setCountrys(countryList);
  }, []);

  function applyFilterByRegion(region) {
    setRegionFilter(region);
  }

  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput />
          <DropDown text="Filter by region" items={filtersDropDown} onSelected={applyFilterByRegion} />
        </Filters>
        <CountryLists>
          {countryFiltered.map((country) => <Card key={country.name} data={country} />)}
        </CountryLists>
      </Section>
    </Container>
  );
}
