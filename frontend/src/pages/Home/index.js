import {
  Container, Section, Filters, CountryLists,
} from './styles';

import SearchInput from '../../components/Inputs/Search';
import DropDown from '../../components/Dropdowns';

export default function Home() {
  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput />
          <DropDown />
        </Filters>
        <CountryLists>
          Countrys
        </CountryLists>
      </Section>
    </Container>
  );
}
