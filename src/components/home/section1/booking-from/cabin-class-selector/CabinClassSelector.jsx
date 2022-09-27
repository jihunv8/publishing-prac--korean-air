import styled from 'styled-components';
import { maxWidthLarge } from '../../../../../global-style/mediaSize';
import { layoutCSS } from '../../../../../util/layoutCSS';

import CabinClassSelect from './CabinClassSelect';

function CabinClassSelector({ layoutCSS }) {
  return (
    <CabinClassSelectorWrapper layoutCSS={layoutCSS}>
      <CabinClassSelect />
    </CabinClassSelectorWrapper>
  );
}

export default CabinClassSelector;

const CabinClassSelectorWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 3px 18px;
  border-radius: 8px;

  @media ${maxWidthLarge} {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  ${layoutCSS}
`;
