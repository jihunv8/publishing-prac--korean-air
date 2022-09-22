import styled from 'styled-components';

import PointSelectButton from './PointSelectButton';

import swapIcon from '../../../../../../images/icons/booking__swap--disabled.svg';
import { layoutCSS } from '../../../../../../util/layoutCSS';

function PointSelector({ from = { code: 'SEL', name: '서울' }, to = { code: 'To', name: '도착지' }, layoutCSS }) {
  return (
    <PointSelectorWrapper layoutCSS={layoutCSS}>
      <PointSelectButton type="button" code={from.code} name={from.name} />
      <ReverseButton type="button" />
      <PointSelectButton type="button" code={to.code} name={to.name} />
    </PointSelectorWrapper>
  );
}

export default PointSelector;

const PointSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;

  ${layoutCSS}
`;

const ReverseButton = styled.button`
  background: url(${swapIcon}) no-repeat center;
  width: 44px;
  height: 44px;
  margin: 0 10px;
  border: none;
  border-radius: 100%;
  flex-shrink: 0;

  &:focus,
  &:hover {
    outline: 1px solid #0064de;
  }
`;
