import styled, { css } from 'styled-components';
import { layoutCSS } from '../../../../../../util/layoutCSS';

import AirlineTypeSelector from './AirlineTypeSelector';
import DateSelector from './DateSelector';
import PointSelector from './PointSelector';

function AirlineSelector({ layoutCSS }) {
  return (
    <AirlineSelectorWrapper layoutCSS={layoutCSS}>
      <AirlineTypeSelector layoutCSS={AirlineTypeSelectorLayoutCSS} />
      <PointSelector layoutCSS={PointSelectorLayoutCSS} />
      <DateSelector type="button" layoutCSS={DateSelectorLayoutCSS} />
    </AirlineSelectorWrapper>
  );
}

export default AirlineSelector;

const AirlineSelectorWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 16px 13px 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${layoutCSS}
`;

const AirlineTypeSelectorLayoutCSS = css`
  margin-top: 20px;
`;

const PointSelectorLayoutCSS = css`
  margin-top: 10px;
`;

const DateSelectorLayoutCSS = css`
  margin-top: 10px;
`;
