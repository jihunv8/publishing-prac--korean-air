import styled, { css } from 'styled-components';

import BookingTypeSelector from './booking-type-selector/BookingTypeSelector';
import AirlineSelector from './airline-selector/AirlineSelector';

function Form() {
  return (
    <FormWrapper>
      <BookingTypeSelector />
      <AirlineSelector layoutCSS={AirlineSelectorLayoutCSS} />
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.form`
  background: rgba(5, 22, 96, 0.85);
  width: 400px;
  padding: 20px 10px 14px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AirlineSelectorLayoutCSS = css`
  margin-top: 12px;
`;
