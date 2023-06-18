import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container, Section, ContainerError } from './styles';

import CountriesService from '../../services/CountriesService';
import Button from '../../components/Button';
import Details from '../../components/Country/Details';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';

export default function Country() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const data = await CountriesService.getCountry(countryCode);
        setCountry(data);
        setIsLoading(false);
      } catch {
        setError(true);
        setIsLoading(false);
      }
    })();
  }, [countryCode]);

  return (
    <Container>
      <Section>
        <Button link="/">Back</Button>
        <Loader isLoading={isLoading} />
        {country && <Details data={country} />}
        {error && !isLoading
          && (
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
