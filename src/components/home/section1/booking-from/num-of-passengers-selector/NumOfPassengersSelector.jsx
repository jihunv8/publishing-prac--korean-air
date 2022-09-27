import styled from 'styled-components';
import { maxWidthLarge } from '../../../../../global-style/mediaSize';
import { layoutCSS } from '../../../../../util/layoutCSS';

import NumOfPassengersButton from './NumOfPassengersButton';

function NumOfPassengersSelector({ layoutCSS }) {
  return (
    <NumOfPassengersSelectorWrapper layoutCSS={layoutCSS}>
      <NumOfPassengersButton type="button" />
    </NumOfPassengersSelectorWrapper>
  );
}

export default NumOfPassengersSelector;

const NumOfPassengersSelectorWrapper = styled.div`
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
