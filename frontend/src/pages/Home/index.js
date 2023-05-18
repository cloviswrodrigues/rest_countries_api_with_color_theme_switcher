import {
  Container, Section, Filters, CountryLists,
} from './styles';

import SearchInput from '../../components/Inputs/Search';
import DropDown from '../../components/Dropdowns';
import Card from '../../components/Card';

export default function Home() {
  const filtersDropDown = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const countrys = [
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
    {
      name: 'Germany',
      population: '81,770,900',
      region: 'Europe',
      capital: 'Berlin',
      flag: 'https://flagcdn.com/w320/de.png',
    },
  ];

  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput />
          <DropDown text="Filter by region" items={filtersDropDown} />
        </Filters>
        <CountryLists>
          {countrys.map((country) => <Card data={country} />)}
        </CountryLists>
      </Section>
    </Container>
  );
}
