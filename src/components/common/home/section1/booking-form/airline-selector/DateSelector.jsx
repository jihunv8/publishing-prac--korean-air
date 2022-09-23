import styled from 'styled-components';
import { layoutCSS } from '../../../../../../util/layoutCSS';

import calendarIcon from '../../../../../../images/icons/quickbooking__calendar.svg';

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
  border-top: dotted 1px #d9dbe1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #767676;

  &:hover {
    outline: solid 1px #0064de;
  }

  ${layoutCSS};
`;

const Icon = styled.span`
  width: 30px;
  height: 29px;
  display: block;
  background: url(${calendarIcon}) no-repeat center;
`;
