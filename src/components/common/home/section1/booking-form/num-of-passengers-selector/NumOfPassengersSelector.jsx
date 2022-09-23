import styled from 'styled-components';
import { layoutCSS } from '../../../../../../util/layoutCSS';

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

  ${layoutCSS}
`;
