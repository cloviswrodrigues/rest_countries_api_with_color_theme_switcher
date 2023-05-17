import {
  Container, Section, Filters, CountryLists,
} from './styles';

import SearchInput from '../../components/Inputs/Search';
import DropDown from '../../components/Dropdowns';

export default function Home() {
  const filtersDropDown = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput />
          <DropDown text="Filter by region" items={filtersDropDown} />
        </Filters>
        <CountryLists>
          Countrys
        </CountryLists>
      </Section>
    </Container>
  );
}
