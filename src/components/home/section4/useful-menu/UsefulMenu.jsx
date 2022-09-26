import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

import Menu from './Menu';

import cardIcon from '../../../../images/icons/masl__credit-card-pc.png';
import hotelIcon from '../../../../images/icons/masl__hotel-pc.png';
import rentalIcon from '../../../../images/icons/masl__rental-car-pc.png';
import dutyFreeIcon from '../../../../images/icons/masl__duty-free-pc.png';
import insuranceIcon from '../../../../images/icons/masl__insurance-pc.png';
import guideIcon from '../../../../images/icons/masl__guide-book-pc.png';
import { maxWidthLarge } from '../../../../global-style/mediaSize';

const menuData = [
  { title: '대한항공 카드', href: '', iconUrl: cardIcon },
  { title: '호텔', href: '', iconUrl: hotelIcon },
  { title: '렌터카', href: '', iconUrl: rentalIcon },
  { title: '기내 면세점', href: '', iconUrl: dutyFreeIcon },
  { title: '여행자 보험', href: '', iconUrl: insuranceIcon },
  { title: '여행 상품', href: '', iconUrl: guideIcon },
];

function UsefulMenu({ layoutCSS }) {
  return (
    <UsefulMenuWrapper layoutCSS={layoutCSS}>
      {menuData.map((data) => (
        <MenuItem>
          <Menu title={data.title} href={data.href} iconUrl={data.iconUrl} />
        </MenuItem>
      ))}
    </UsefulMenuWrapper>
  );
}

export default UsefulMenu;

const UsefulMenuWrapper = styled.ul`
  padding: 24px 0 28px;
  border: solid 1px #d9dbe1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media ${maxWidthLarge} {
    padding: 0;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 32px;
    grid-column-gap: 16px;
    border: none;
  }

  ${layoutCSS}
`;

const MenuItem = styled.li`
  position: relative;

  &:not(:last-child)::after {
    content: '';
    display: block;
    background-color: #d9dbe1;
    width: 1px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    @media ${maxWidthLarge} {
      display: none;
    }
  }
`;
