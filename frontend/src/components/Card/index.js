import { PropTypes } from 'prop-types';

import { Container } from './styles';

export default function Card({ data }) {
  return (
    <Container>
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
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
