import styled, { css } from 'styled-components';
import { maxContentsArea } from '../../../global-style/mediaSize';

import MainBanner from './main-banner/MainBanner';
import BookingForm from './booking-from/BookingForm';
import FrequencyMenu from './frequency-menu/FrequencyMenu';

function Section1() {
  return (
    <Section1Wrapper>
      <MainBanner />
      <BookingFormWrapper>
        <BookingForm layoutCSS={BookingFormLayoutCSS} />
      </BookingFormWrapper>
      <FrequencyMenu layoutCSS={FrequencyMenuLayoutCSS} />
    </Section1Wrapper>
  );
}

export default Section1;

const Section1Wrapper = styled.section`
  overflow: hidden;
`;

const BookingFormWrapper = styled.div`
  margin: -460px auto 0;
  display: flex;
  justify-content: flex-end;
  max-width: ${maxContentsArea};
`;

const BookingFormLayoutCSS = css`
  transform: translateX(300px);
`;

const FrequencyMenuLayoutCSS = css`
  margin: 20px auto 0;
`;
