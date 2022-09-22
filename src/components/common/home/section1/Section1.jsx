import styled from 'styled-components';
import MainBanner from './main-banner/MainBanner';
import BookingForm from './booking-form/BookingForm';

function Section1() {
  return (
    <Section1Wrapper>
      <MainBanner />
      <BookingForm />
    </Section1Wrapper>
  );
}

export default Section1;

const Section1Wrapper = styled.section``;
