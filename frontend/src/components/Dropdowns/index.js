import { useState } from 'react';
import { PropTypes } from 'prop-types';

import { Container, Button, Menu } from './styles';

export default function DropDown({ text, items = [], onSelected }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [textFilter, setTextFilter] = useState(items[0]);
  const buttonText = `${text} - ${textFilter}`;

  function toggleDropdown() {
    setToggleMenu((prevState) => !prevState);
  }

  function handleDropDown() {
    toggleDropdown();
  }

  function selectedItem(item) {
    onSelected(item);
    toggleDropdown();
    setTextFilter(item);
  }

  return (
    <Container>
      <Button onClick={handleDropDown} menuOpen={toggleMenu}>
        <span>{buttonText}</span>
        {/* eslint-disable max-len */}
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144" />
        </svg>
      </Button>
      <Menu show={toggleMenu}>
        {items.map((item) => (<div key={item} onClick={() => selectedItem(item)}>{item}</div>))}
      </Menu>
    </Container>
  );
}

DropDown.propTypes = {
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelected: PropTypes.func.isRequired,
};
