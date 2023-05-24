import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container, CardImage, CardInformation } from './styles';
import Image from '../Image';

export default function Card({ data }) {
  return (
    <Container>
      <NavLink to={`/country/${data.name.toLowerCase()}`} />
      <CardImage>
        <Image src={data.flag} alt={`${data.name}'s flag`} />
      </CardImage>
      <CardInformation>
        <h2>{data.name}</h2>
        <p>
          <span>Population: </span>
          {data.population}
        </p>
        <p>
          <span>Region: </span>
          {data.region}
        </p>
        <p>
          <span>Capital: </span>
          {data.capital}
        </p>
      </CardInformation>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.shape().isRequired,
};
