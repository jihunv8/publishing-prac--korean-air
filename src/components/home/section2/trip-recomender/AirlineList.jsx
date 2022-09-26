import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

import Airline from './Airline';

import prevBtnIcon from '../../../../images/icons/mris__button-left.svg';
import nextBtnIcon from '../../../../images/icons/mris__button-right.svg';

import mockData from './mockData';

function AirlineList({ layoutCSS }) {
  return (
    <AirlineListWrapper layoutCSS={layoutCSS}>
      <PrevButton />
      <NextButton />
      <List>
        {mockData.map((data, i) => {
          const { from, to, cabinClass, type, price, image } = data;
          return (
            <ListItem key={i}>
              <Airline from={from} to={to} cabinClass={cabinClass} type={type} price={price} imageUrl={image} />
            </ListItem>
          );
        })}
      </List>
    </AirlineListWrapper>
  );
}

export default AirlineList;

const AirlineListWrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${layoutCSS}
`;

const SwipeButton = styled.button`
  width: 30px;
  height: 60px;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = styled(SwipeButton)`
  background: url(${prevBtnIcon});
  left: 1px;
`;

const NextButton = styled(SwipeButton)`
  background: url(${nextBtnIcon});
  right: 1px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-left: 30px;
  }
`;
