import { useState } from 'react';
import styled from 'styled-components';
import { maxWidthLarge } from '../../../global-style/mediaSize';
import HeaderDropdown from './header-dropdown/HeaderDropdown';
import HeaderNav from './HeaderNav';

function Header() {
  const [selectedMenu, setSelectedMenu] = useState('book');
  const [isDropdown, setIsDropdown] = useState(false);

  const openDropdown = () => {
    setIsDropdown(true);
  };

  const closeDropdown = () => {
    setIsDropdown(false);
  };

  return (
    <HeaderWrapper>
      <HeaderNav setSelectedMenu={setSelectedMenu} openDropdown={openDropdown} />
      <HeaderDropdownWrapper visible={isDropdown}>
        <HeaderDropdown selectedMenu={selectedMenu} closeDropdown={closeDropdown} />
      </HeaderDropdownWrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  position: relative;
`;

const HeaderDropdownWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 20;
  top: 91px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  @media ${maxWidthLarge} {
    display: none;
  }
`;
