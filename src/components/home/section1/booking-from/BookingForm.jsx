import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

import Form from './Form';

import bgImagePC from '../../../../images/bg/quickbooking__bg.svg';
import bgImageM from '../../../../images/bg/quickbooking__m-bg.svg';
import { maxWidthLarge } from '../../../../global-style/mediaSize';

function BookingForm({ layoutCSS }) {
  return (
    <BookingFormWrapper layoutCSS={layoutCSS}>
      <Form />
    </BookingFormWrapper>
  );
}

export default BookingForm;

const BookingFormWrapper = styled.div`
  display: flex;

  &::after {
    content: '';
    background: url(${bgImagePC}) no-repeat center / cover;
    width: 300px;

    @media ${maxWidthLarge} {
      display: none;
    }
  }

  @media ${maxWidthLarge} {
    width: 100%;
    background: url(${bgImageM}) no-repeat right bottom / auto;
  }

  ${layoutCSS}
`;
