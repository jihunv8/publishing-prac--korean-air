import styled from 'styled-components';
import { maxWidthLarge } from '../../../../../global-style/mediaSize';

import checkBoxIcon from '../../../../../images/icons/icon-w-checkbox.svg';

function FlexibleDatesCheckBox() {
  return (
    <FlexibleDatesCheckBoxWrapper>
      <CheckBox type="checkbox" id="flexible-date-checkbox" />
      <Label htmlFor="flexible-date-checkbox">가까운 날짜 함께 조회</Label>
    </FlexibleDatesCheckBoxWrapper>
  );
}

export default FlexibleDatesCheckBox;

const FlexibleDatesCheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: #fff;
  line-height: 1.5;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media ${maxWidthLarge} {
    font-size: 1.4rem;
    line-height: 1.58;
  }
`;

const CheckBox = styled.input`
  display: none;

  & + label {
    &::before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 12px;
      border: solid 1px #fff;
      border-radius: 2px;
    }

    &:hover::before {
      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #0064de;
    }
  }

  &:checked + label::before {
    background: #fff url(${checkBoxIcon}) no-repeat center;
  }
`;
