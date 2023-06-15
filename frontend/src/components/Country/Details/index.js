import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
  Container, Flag, CountryContainer, CountryName, CountryDetails, CountryBorders,
} from './styles';

import Image from '../../Image';

export default function Details({ data }) {
  return (
    <Container>
      <Flag>
        <Image src={data.flag} alt={`${data.name}'s flag`} />
      </Flag>
      <CountryContainer>
        <CountryName>{data.name}</CountryName>
        <CountryDetails>
          <div>
            <p>
              <b>Native Name: </b>
              {data.nativeName}
            </p>
            <p>
              <b>Population: </b>
              {data.population}
            </p>
            <p>
              <b>Region: </b>
              {data.region}
            </p>
            <p>
              <b>Sub Region: </b>
              {data.subregion}
            </p>
            <p>
              <b>Capital: </b>
              {data.capital}
            </p>
          </div>
          <div>
            <p>
              <b>Top Level Domain: </b>
              {data.topLevelDomain.map((domain, idx) => (idx > 0 ? `, ${domain}` : domain))}
            </p>
            <p>
              <b>Currencies: </b>
              {data.currencies.map(({ name }, idx) => (idx > 0 ? `, ${name}` : name))}
            </p>
            <p>
              <b>Languages: </b>
              {data.languages.map(({ name }, idx) => (idx > 0 ? `, ${name}` : name))}
            </p>
          </div>
        </CountryDetails>
        <CountryBorders>
          <span>Border Countries: </span>
          <ul>
            {/* eslint-disable-next-line max-len */}
            {data.borders && data.borders.map((border) => (<li key={border.name}><NavLink to={`/country/${border.code}`}>{border.name}</NavLink></li>))}
          </ul>
        </CountryBorders>
      </CountryContainer>
    </Container>
  );
}

Details.propTypes = {
  data: PropTypes.shape().isRequired,
};
