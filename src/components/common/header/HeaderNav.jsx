import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import * as media from '../../../global-style/mediaSize';

import koreanairLogoPC from '../../../images/logos/logo--koreanair-pc.png';
import koreanairLogoM from '../../../images/logos/logo--koreanair-m.png';
import skyteamLogo from '../../../images/logos/logo--skyteam-pc.png';

import loginIcon from '../../../images/icons/util__link--login.svg';
import alramIcon from '../../../images/icons/util__link--alram-off.svg';
import cartIcon from '../../../images/icons/util__link--cart-off.svg';
import searchIcon from '../../../images/icons/util__link--search.svg';
import hamburgerIcon from '../../../images/icons/drawer-trigger.svg';

function HeaderNav({ selectedMenu = '', setSelectedMenu = () => {}, openDropdown = () => {} }) {
  const isTabletSize = useMediaQuery({ maxWidth: media.screenLarge });

  const selectMenu =
    (menu = 'book') =>
    () => {
      openDropdown();
      setSelectedMenu(menu);
    };

  return (
    <HeaderNavWrapper>
      <ContentsArea>
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
        {!isTabletSize && (
          <div>
            <NavButton onClick={selectMenu('book')} selected={selectedMenu === 'book'}>
              예매
            </NavButton>
            <NavButton onClick={selectMenu('airport')} selected={selectedMenu === 'airport'}>
              공항
            </NavButton>
            <NavButton onClick={selectMenu('inFlight')} selected={selectedMenu === 'inFlight'}>
              기내
            </NavButton>
            <NavButton onClick={selectMenu('skypass')} selected={selectedMenu === 'skypass'}>
              스카이패스
            </NavButton>
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
      </ContentsArea>
    </HeaderNavWrapper>
  );
}

export default HeaderNav;

const HeaderNavWrapper = styled.nav`
  border-bottom: solid 1px #d9dbe1;
  padding: 0 20px;
`;

const ContentsArea = styled.div`
  margin: 0 auto;
  max-width: ${media.maxContentsArea};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logos = styled.div`
  display: flex;

  > a > img {
    display: block;
  }

  @media ${media.maxWidthLarge} {
    > a {
      height: 50px;
      display: flex;
      align-items: center;
      > img {
        width: 132px;
      }
    }
  }

  @media ${media.maxWidthXSmall} {
    > a > img {
      width: 105px;
    }
  }
`;

const NavButton = styled.button`
  height: 90px;
  padding: 0 30px;
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.56;
  position: relative;

  &:after {
    content: '';
    height: 4px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: bottom 0.4s, width 0.4s, background-color 0.4s;

    ${({ selected }) =>
      selected &&
      css`
        animation: select 0.4s forwards;

        @keyframes select {
          from {
            width: calc(100% - 60px);
            background-color: #888;
            bottom: 14px;
          }
          to {
            width: calc(100% - 40px);
            background-color: #de001b;
            bottom: 12px;
          }
        }
      `}
  }
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;

  @media ${media.maxWidthLarge} {
    column-gap: 0;
  }
`;

const MenuItemStyle = css`
  width: 44px;
  height: 44px;
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center / 44px;
  transition: background-size 0.15s;

  &:hover {
    background-size: 48px;
  }

  @media ${media.maxWidthXSmall} {
    column-gap: 0;
    width: 35px;
    height: 40px;
    background-size: 40px;
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
