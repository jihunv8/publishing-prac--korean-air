import styled, { css } from 'styled-components';

import koreanairLogoPC from '../../images/logos/logo--koreanair-pc.png';
import koreanairLogoM from '../../images/logos/logo--koreanair-m.png';
import skyteamLogo from '../../images/logos/logo--skyteam-pc.png';

import loginIcon from '../../images/icons/util__link--login.svg';
import alramIcon from '../../images/icons/util__link--alram-off.svg';
import cartIcon from '../../images/icons/util__link--cart-off.svg';
import searchIcon from '../../images/icons/util__link--search.svg';
import hamburgerIcon from '../../images/icons/drawer-trigger.svg';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const isTabletSize = useMediaQuery({ maxWidth: '1060px' });

  return (
    <HeaderWrapper>
      <HeaderArea>
        <Logos>
          {isTabletSize ? (
            <a href="/">
              <img src={koreanairLogoM} alt="korean air logo" />
            </a>
          ) : (
            <>
              <a href="/">
                <img src={koreanairLogoPC} alt="korean air logo" />
              </a>

              <a href="">
                <img src={skyteamLogo} alt="skyteam logo" />
              </a>
            </>
          )}
        </Logos>
        {isTabletSize || (
          <div>
            <NavItem>예매</NavItem>
            <NavItem>공항</NavItem>
            <NavItem>기내</NavItem>
            <NavItem>스카이패스</NavItem>
          </div>
        )}

        <Menu>
          <MenuItemLink href="" imgUrl={loginIcon}></MenuItemLink>
          <MenuItemButton imgUrl={alramIcon}></MenuItemButton>
          <MenuItemLink href="" imgUrl={cartIcon}></MenuItemLink>
          {isTabletSize ? (
            <MenuItemButton imgUrl={hamburgerIcon}></MenuItemButton>
          ) : (
            <MenuItemButton imgUrl={searchIcon}></MenuItemButton>
          )}
        </Menu>
      </HeaderArea>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  border-bottom: solid 1px #d9dbe1;
  padding: 0 20px;
`;

const HeaderArea = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logos = styled.div`
  display: flex;

  > a > img {
    display: block;
  }

  @media screen and (max-width: 1060px) {
    > a > img {
      width: 132px;
    }
  }
`;

const NavItem = styled.button`
  height: 90px;
  padding: 0 30px;
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.56;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;

  @media screen and (max-width: 1060px) {
    column-gap: 0;
  }
`;

const MenuItemStyle = css`
  width: 48px;
  height: 48px;
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center / 44px;
  transition: background-size 0.15s;

  &:hover {
    background-size: 48px;
  }
`;

const MenuItemLink = styled.a`
  ${MenuItemStyle}
`;

const MenuItemButton = styled.button`
  background-color: transparent;
  border: none;
  ${MenuItemStyle}
`;
