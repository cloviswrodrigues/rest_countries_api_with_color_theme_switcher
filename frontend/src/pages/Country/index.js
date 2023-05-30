import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container, Section } from './styles';

import CountriesService from '../../services/CountriesService';
import Button from '../../components/Button';
import Details from '../../components/Country/Details';

export default function Country() {
  const { name } = useParams();
  const [country, useCountry] = useState(null);

  useEffect(() => {
    const data = CountriesService.getCountry(name);
    useCountry(data);
  }, [name]);

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
