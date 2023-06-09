import { useState, useEffect, useMemo } from 'react';

import {
  Container, Section, Filters, CountryLists, ContainerError,
} from './styles';

import SearchInput from '../../components/Inputs/Search';
import DropDown from '../../components/Dropdowns';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';

import CountriesService from '../../services/CountriesService';
import useLocalStorage from '../../Hooks/useLocalStorage';

export default function Home() {
  const filtersDropDown = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useLocalStorage({ key: 12, defaultValue: filtersDropDown[0] });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getFilterDefault = filtersDropDown.findIndex((filter) => filter === regionFilter);
  const indexDefaultValue = getFilterDefault !== -1 ? getFilterDefault : 0;

  const countryFilteredByRegion = useMemo(() => countries?.filter(({ region }) => {
    if (regionFilter && regionFilter !== 'All') {
      return region.toLowerCase() === regionFilter.toLowerCase();
    }
    return true;
  }), [countries, regionFilter]);

  const countryFiltered = useMemo(() => {
    if (search) {
      return countryFilteredByRegion?.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
    }

    return countryFilteredByRegion;
  }, [search, regionFilter, countries]);

  useEffect(() => {
    (async () => {
      try {
        setHasError(false);

        const countryList = await CountriesService.listCountries();
        setCountries(countryList);
      } catch {
        setHasError(true);
        setCountries(null);
      }
      setIsLoading(false);
    })();
  }, []);

  function applyFilterByRegion(region) {
    setRegionFilter(region);
  }

  return (
    <Container>
      <Section>
        <Filters>
          <SearchInput search={search} setSearch={setSearch} />
          <DropDown
            text="Filter by region"
            items={filtersDropDown}
            indexDefaultValue={indexDefaultValue}
            onSelected={applyFilterByRegion}
          />
        </Filters>
        <Loader isLoading={isLoading} />
        <CountryLists>
          {countryFiltered && countryFiltered.map((country) => <Card key={country.name} data={country} />)}
        </CountryLists>
        {countryFiltered?.length <= 0 && !isLoading
          && (
          <ContainerError>
            <Alert>
              <span>NO COUNTRY FOUND</span>
            </Alert>
          </ContainerError>
          )}
        {hasError && (
          <ContainerError>
            <Alert type="danger">
              <span>AN UNEXPECTED ERROR OCCURRED</span>
            </Alert>
          </ContainerError>
        )}
      </Section>
    </Container>
  );
}
