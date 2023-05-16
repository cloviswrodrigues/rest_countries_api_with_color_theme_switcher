import {
  Container, Section, Filters, CountryLists,
} from './styles';

import SearchInput from '../../components/Inputs/Search';

export default function Home() {
  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput width={40} />
        </Filters>
        <CountryLists>
          Countrys
        </CountryLists>
      </Section>
    </Container>
  );
}
