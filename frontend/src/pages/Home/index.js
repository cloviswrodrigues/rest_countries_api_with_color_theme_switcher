import { useState, useEffect } from 'react';

import {
  Container, Section, Filters, CountryLists,
} from './styles';

import SearchInput from '../../components/Inputs/Search';
import DropDown from '../../components/Dropdowns';
import Card from '../../components/Card';

import CountrysService from '../../services/CountrysService';

export default function Home() {
  const filtersDropDown = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    const countryList = CountrysService.listCountrys();
    setCountrys(countryList);
  }, []);

  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput />
          <DropDown text="Filter by region" items={filtersDropDown} />
        </Filters>
        <CountryLists>
          {countrys.map((country) => <Card key={country.name} data={country} />)}
        </CountryLists>
      </Section>
    </Container>
  );
}
