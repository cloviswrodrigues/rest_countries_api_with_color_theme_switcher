import { useState, useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { Container, Button, Menu } from './styles';
import { ReactComponent as ArrowSvg } from '../../assets/images/icons/arrow.svg';

export default function DropDown({
  text, items = [], indexDefaultValue = 0, onSelected,
}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [textFilter, setTextFilter] = useState(items[indexDefaultValue]);
  const buttonText = `${text} - ${textFilter}`;
  const menuRef = useRef();

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

  useEffect(() => {
    function closedDropDownClickOut(event) {
      if (!menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }
    window.addEventListener('click', closedDropDownClickOut);

    return () => {
      window.removeEventListener('click', closedDropDownClickOut);
    };
  }, []);

  return (
    <Container ref={menuRef}>
      <Button onClick={handleDropDown} menuOpen={toggleMenu}>
        <span>{buttonText}</span>
        <ArrowSvg />
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
  indexDefaultValue: PropTypes.number,
  onSelected: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
  indexDefaultValue: 0,
};
