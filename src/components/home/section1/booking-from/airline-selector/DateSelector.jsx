import styled from 'styled-components';
import { layoutCSS } from '../../../../../util/layoutCSS';

import calendarIcon from '../../../../../images/icons/quickbooking__calendar.svg';
import { maxWidthLarge } from '../../../../../global-style/mediaSize';

function DateSelector({ layoutCSS, ...props }) {
  return (
    <DateSelectorWrapper layoutCSS={layoutCSS} {...props}>
      <Icon />
      가는 날 ~ 오는 날
    </DateSelectorWrapper>
  );
}

export default DateSelector;

const DateSelectorWrapper = styled.button`
  width: 100%;
  height: 48px;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  border-top: dotted 1px #d9dbe1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #767676;

  &:focus,
  &:hover {
    outline: solid 1px #0064de;
  }

  @media ${maxWidthLarge} {
    height: 60px;
  }

  ${layoutCSS};
`;

const Icon = styled.span`
  width: 30px;
  height: 30px;
  display: block;
  background: url(${calendarIcon}) no-repeat center / 30px;
`;
