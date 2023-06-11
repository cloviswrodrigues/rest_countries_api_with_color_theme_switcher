import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container, Section } from './styles';

import CountriesService from '../../services/CountriesService';
import Button from '../../components/Button';
import Details from '../../components/Country/Details';
import Loader from '../../components/Loader';

export default function Country() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await CountriesService.getCountry(countryCode);
      setCountry(data);
      setIsLoading(false);
    })();
  }, [countryCode]);

  return (
    <Container>
      <Section>
        <Button link="/">Back</Button>
        <Loader isLoading={isLoading} />
        {country && <Details data={country} />}
      </Section>
    </Container>
  );
}
