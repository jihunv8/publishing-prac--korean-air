import styled from 'styled-components';

import bgImage from '../../../../../images/bg/quickbooking__bg.svg';
import Form from './Form';

function BookingForm() {
  return (
    <BookingFormWrapper>
      <Form />
    </BookingFormWrapper>
  );
}

export default BookingForm;

const BookingFormWrapper = styled.div``;
