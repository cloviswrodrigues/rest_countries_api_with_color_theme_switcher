import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <NavLink to={`/country/${data.name.toLowerCase()}`} />
      <img src={data.flag} alt="" />
      <div>
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
      </div>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.shape().isRequired,
};
