import styled from 'styled-components';
import { layoutCSS } from '../../../../util/layoutCSS';

import Form from './Form';

import bgImage from '../../../../images/bg/quickbooking__bg.svg';

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
    background: url(${bgImage}) no-repeat center / cover;
    width: 300px;
  }

  ${layoutCSS}
`;
