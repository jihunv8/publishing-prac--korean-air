import styled, { css } from 'styled-components';

import AirlineSelector from './airline-selector/AirlineSelector';

function Form() {
  return (
    <FormWrapper>
      <BookingTypeButtonsContainer>
        <BookingButton type="button">예매</BookingButton>
        <MileageBookingButton type="button">마일리지 예매</MileageBookingButton>
      </BookingTypeButtonsContainer>
      <AirlineSelector layoutCSS={AirlineSelectorLayoutCSS} />
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.form`
  background: rgba(5, 22, 96, 0.85);
  width: 400px;
  padding: 20px 10px 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookingTypeButtonsContainer = styled.div`
  background-color: #65728a;
  width: fit-content;
  border-radius: 22px;
`;

const BookingTypeButton = styled.button`
  height: 36px;
  color: #fff;
  border: none;
  line-height: 2.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const BookingButton = styled(BookingTypeButton)`
  background-color: #0064de;
  width: 100px;
  border-radius: 22px;
  font-weight: bold;
`;

const MileageBookingButton = styled(BookingTypeButton)`
  background-color: transparent;
  padding-left: 16px;
  padding-right: 20px;
  border-radius: 22px;
  font-weight: bold;
`;

const AirlineSelectorLayoutCSS = css`
  margin-top: 12px;
`;
