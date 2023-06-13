import PropTypes from 'prop-types';

import { InputContainer } from './styles';
import { ReactComponent as SearchSvg } from '../../../assets/images/icons/search.svg';

export default function SearchInput({ search, setSearch }) {
  return (
    <InputContainer type="text">
      <SearchSvg />
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
    </InputContainer>
  );
}

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
