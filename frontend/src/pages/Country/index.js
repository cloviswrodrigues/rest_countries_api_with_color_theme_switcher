import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container, Section } from './styles';

import CountriesService from '../../services/CountriesService';
import Button from '../../components/Button';
import Details from '../../components/Country/Details';

export default function Country() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await CountriesService.getCountry(countryCode);
      setCountry(data);
    })();
  }, [countryCode]);

  if (!country) return null;
  return (
    <Container>
      <Section>
        <Button link="/">Back</Button>
        <Details data={country} />
      </Section>
    </Container>
  );
}
