import styled from 'styled-components';
import { maxWidthLarge } from '../../../../../global-style/mediaSize';

function BookingTypeSelector() {
  return (
    <BookingTypeSelectorWrapper>
      <BookingButton type="button">예매</BookingButton>
      <MileageBookingButton type="button">마일리지 예매</MileageBookingButton>
    </BookingTypeSelectorWrapper>
  );
}

export default BookingTypeSelector;

const BookingTypeSelectorWrapper = styled.div`
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

  @media ${maxWidthLarge} {
    height: 40px;
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
`;
