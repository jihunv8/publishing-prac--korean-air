import styled, { css } from 'styled-components';
import { layoutCSS } from '../../../../../../util/layoutCSS';

import AirlineTypeSelector from './AirlineTypeSelector';
import PointSelector from './PointSelector';

function AirlineSelector({ layoutCSS }) {
  return (
    <AirlineSelectorWrapper layoutCSS={layoutCSS}>
      <AirlineTypeSelector layoutCSS={AirlineTypeSelectorLayoutCSS} />
      <PointSelector layoutCSS={PointSelectorCSS} />
    </AirlineSelectorWrapper>
  );
}

export default AirlineSelector;

const AirlineSelectorWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 16px 13px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${layoutCSS}
`;

const AirlineTypeSelectorLayoutCSS = css`
  margin-top: 20px;
`;

const PointSelectorCSS = css`
  margin-top: 10px;
`;
