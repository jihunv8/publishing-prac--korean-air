import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';
import { useRef, useState } from 'react';

import Airline from './Airline';

import prevBtnIcon from '../../../../images/icons/mris__button-left.svg';
import nextBtnIcon from '../../../../images/icons/mris__button-right.svg';

import mockData from './mockData';
import { maxWidthLarge, maxWidthMiddle, maxWidthSmall, screenLarge } from '../../../../global-style/mediaSize';
import { useMediaQuery } from 'react-responsive';

function AirlineList({ layoutCSS }) {
  const [airlineData, setAirlineData] = useState(mockData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMaxWidthLarge = useMediaQuery({ maxWidth: screenLarge });

  const swipePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  const swipeNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex <= airlineData.length - (isMaxWidthLarge ? 2 : 4)) {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <AirlineListWrapper layoutCSS={layoutCSS}>
      <List index={currentIndex}>
        {airlineData.map((data, i) => {
          const { from, to, cabinClass, type, price, image } = data;
          return (
            <ListItem key={i}>
              <Airline from={from} to={to} cabinClass={cabinClass} type={type} price={price} imageUrl={image} />
            </ListItem>
          );
        })}
      </List>
      <PrevButton onClick={swipePrev} />
      <NextButton onClick={swipeNext} />
    </AirlineListWrapper>
  );
}

export default AirlineList;

const AirlineListWrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${layoutCSS}
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  transform: translateX(calc((232px + 30px) * -1 * ${({ index }) => index}));
  transition: transform 0.7s;

  @media ${maxWidthLarge} {
    transform: translateX(calc(((100% - 8px) / 2 + 8px) * -1 * ${({ index }) => index}));
    width: 55%;
  }

  @media ${maxWidthMiddle} {
    width: 70%;
  }

  @media ${maxWidthSmall} {
    width: 90%;
  }
`;

const ListItem = styled.li`
  width: 232px;
  flex-shrink: 0;

  &:not(:first-child) {
    margin-left: 30px;
  }

  @media ${maxWidthLarge} {
    width: calc((100% - 8px) / 2);

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
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
